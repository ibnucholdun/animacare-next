import CardComment from "@/components/fragments/CardComment";
import Button from "@/components/ui/Button";
import commentServices from "@/services/comment";
import { capitalizeWord } from "@/utils/capitalWord";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  detailForum: any;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailForumView: React.FC<Props> = ({
  detailForum,
  isLoading,
  setIsLoading,
}) => {
  const session: any = useSession();
  const [commentInput, setCommentInput] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form: any = event.target as HTMLFormElement;
    const data = {
      comment: form.comment.value,
      author: session.data?.user?.fullname || "",
      profileImage: session.data?.user?.image || "",
    };

    try {
      const result = await commentServices.postComment(
        data,
        session?.data?.accessToken,
        detailForum?.id
      );
      if (result.status === 200) {
        setIsLoading(false);
        form.reset();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="px-24 py-12 min-h-screen">
      <section className={`${isLoading ? "" : "animate-pulse"}`}>
        <div className="flex justify-between items-center mb-6">
          <h1
            className={` ${
              isLoading
                ? "text-xl font-medium flex items-center gap-2"
                : "bg-slate-200 h-8 w-32 rounded"
            }`}>
            <Image
              src={detailForum?.profileImage}
              alt={detailForum?.author}
              width={40}
              height={0}
              className={`${
                isLoading
                  ? "w-[30px] h-[30px] object-cover rounded-full"
                  : "hidden"
              }`}
            />
            {isLoading ? capitalizeWord(detailForum?.author) : ""}
          </h1>
          <p
            className={` ${
              isLoading ? "text-sm" : "bg-slate-200 h-8 w-32 rounded"
            }`}>
            {isLoading
              ? new Date(detailForum?.created_at?.seconds * 1000).toDateString()
              : ""}
          </p>
        </div>
        <div className="border p-6 rounded-lg border-blueLight">
          <h1
            className={`${
              isLoading
                ? "text-2xl font-semibold text-blueLight"
                : "bg-slate-200 h-8 w-32 rounded"
            }`}>
            {isLoading ? detailForum?.title : ""}
          </h1>
          <hr className="mt-4 border-2" />
          <p
            className={`mt-4 ${
              isLoading
                ? "text-md font-light"
                : "bg-slate-200 h-16 w-full rounded"
            }`}>
            {isLoading ? detailForum?.description : ""}
          </p>
        </div>
      </section>
      <h2 className="text-2xl font-semibold text-blueLight my-12">Komentar</h2>
      <section className="komentar">
        <div className="flex gap-3">
          <Image
            src={session?.data?.user?.image}
            alt={session?.data?.user?.fullname}
            width={40}
            height={0}
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <form action="" onSubmit={handleSubmit} className="w-full">
            <textarea
              name="comment"
              id="comment"
              cols={30}
              rows={5}
              value={commentInput}
              onChange={(e) =>
                setCommentInput(capitalizeWord(e.target.value) || "")
              }
              placeholder="Tulis Komentar"
              className="border border-blueLight p-4 w-full outline-none rounded-lg"
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-blueLight text-white mt-6 px-6 text-lg hover:text-blueLight hover:bg-white">
                Kirim
              </Button>
            </div>
          </form>
        </div>
        <div className="my-12">
          {detailForum?.comments
            ?.sort(
              (a: any, b: any) => b.created_at?.seconds - a.created_at?.seconds
            )
            .map((comment: any) => (
              <CardComment
                name={capitalizeWord(comment?.author) || ""}
                image={comment?.profileImage}
                date={new Date(
                  comment?.created_at?.seconds * 1000
                ).toDateString()}
                comment={comment?.comment}
                key={comment?.id}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default DetailForumView;
