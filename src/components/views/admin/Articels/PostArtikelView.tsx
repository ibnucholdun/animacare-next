import AdminLayout from "@/components/layouts/AdminLayout";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Button from "@/components/ui/Button";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

type Props = {};

const PostArtikelView = (props: Props) => {
  const [content, setContent] = useState("");

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
    console.log(newContent);
  };

  return (
    <AdminLayout>
      <div className="px-20 my-12">
        <h1 className="text-3xl font-semibold mb-12">Post Artikel</h1>
        <form action="" className="w-9/12">
          <div className="flex flex-col my-[10px]">
            <label htmlFor="judul-artikel">Judul Artikel</label>
            <input
              type="text"
              name="judul-artikel"
              id="judul-artikel"
              placeholder="Judul Artikel"
              className="p-[10px] mt-[5px] border border-blueLight outline-none rounded text-sm w-full"
            />
          </div>
          <div className="flex flex-col my-[10px]">
            <label htmlFor="gambar-artikel">Gambar Artikel</label>
            <input
              type="file"
              name="gambar-artikel"
              id="gambar-artikel"
              placeholder="Gambar Artikel"
              className="p-[10px] mt-[5px] outline-none rounded text-sm w-9/12"
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
              Submit
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default PostArtikelView;
