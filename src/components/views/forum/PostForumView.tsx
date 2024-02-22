import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import forumServices from "@/services/forum";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const PostForumView = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form: any = event.target as HTMLFormElement;
    const data = {
      title: form.title.value,
      description: form.description.value,
      author: session.data?.user?.fullname || "",
    };
    try {
      const result = await forumServices.postForum(
        data,
        session?.data?.accessToken
      );
      if (result.status === 200) {
        setIsLoading(false);
        form.reset();
        router.push("/forum");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-24 my-12">
      <div className="flex justify-between gap-[100px]">
        <div className="w-full">
          <Image src="/imagePost.png" alt="image" width={500} height={500} />
        </div>
        <div className="w-full">
          <form action="" onSubmit={handleSubmit}>
            <Input
              label=""
              name="title"
              type="text"
              placehoder="Ketikkan judul topik"
              classname="w-3/4"
            />
            <textarea
              className="w-3/4 outline-none border border-blueLight p-3 mb-6"
              placeholder="Ketikkan deskripsi topik"
              name="description"
              id="description"
              cols={30}
              rows={10}
            />
            <div className="w-3/4 flex justify-end">
              <Button
                type="submit"
                className=" px-12 bg-blueLight text-white text-lg">
                {isLoading ? "Loading..." : "Buat"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForumView;