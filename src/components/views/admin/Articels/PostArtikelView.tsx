import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

// Components
import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";

// Services
import { uploadFile } from "@/lib/firebase/services";
import articleServices from "@/services/articles";

// Toastify
import { toast } from "react-toastify";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

type Props = {};

const PostArtikelView = (props: Props) => {
  const [content, setContent] = useState("");
  const [changeImage, setChangeImage] = useState<File | null>(null);
  const session: any = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const uploadImage = async (form: any, id: string) => {
    const file = form.image.files[0];
    const newName = "article." + file.name.split(".")[1];

    if (file) {
      uploadFile(
        id,
        file,
        newName,
        "articles",
        async (status: boolean, newImageUrl: string) => {
          if (status) {
            const data = {
              image: newImageUrl,
            };

            const result = await articleServices.updateArticle(
              id,
              data,
              session?.data?.accessToken
            );

            if (result.status === 200) {
              setIsLoading(false);
              setChangeImage(null);
              form.reset();
              const { data } = await articleServices.getArticles();

              if (data) {
                router.push("/admin/articles");
                toast.success("Add Product Success");
              }
            } else {
              setIsLoading(false);
              toast.error("Add Product Failed");
            }
          } else {
            setIsLoading(false);
            toast.error("Add Product Failed");
          }
        }
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: any = e.target as HTMLFormElement;
    const data = {
      title: form.title.value,
      description: content,
      image: changeImage,
    };

    const result = await articleServices.postArticle(
      data,
      session?.data?.accessToken
    );

    if (result.status === 200) {
      uploadImage(form, result.data.data.id);
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  const onChangeImage = (e: any) => {
    e.preventDefault();
    setChangeImage(e.currentTarget.files[0]);
  };

  return (
    <AdminLayout>
      <div className="px-20 pt-12">
        <h1 className="text-3xl font-semibold mb-12">Post Artikel</h1>
        <form action="" className="w-9/12" onSubmit={handleSubmit}>
          <div className="flex flex-col my-[10px]">
            <label htmlFor="title">Judul Artikel</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Judul Artikel"
              className="p-[10px] mt-[5px] border outline-none rounded text-sm w-full"
            />
          </div>
          <div className="flex flex-col my-[10px]">
            <label htmlFor="image">Gambar Artikel</label>
            <input
              type="file"
              name="image"
              id="image"
              placeholder="Gambar Artikel"
              className="p-[10px] mt-[5px] outline-none rounded text-sm w-9/12"
              onChange={onChangeImage}
            />
          </div>
          <div className="flex flex-col my-[10px]">
            <label htmlFor="isi-artikel">Isi Artikel</label>
            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="mt-[5px] bg-white w-full h-[300px] outline-none rounded"
            />
          </div>
          <div className="flex justify-end py-12">
            <Button type="submit" className="bg-blueLight text-white">
              {isLoading ? "Loading" : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default PostArtikelView;
