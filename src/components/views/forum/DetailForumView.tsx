import Button from "@/components/ui/Button";
import React from "react";

type Props = {
  detailForum: any;
  isLoading: boolean;
};

const DetailForumView: React.FC<Props> = ({ detailForum, isLoading }) => {
  return (
    <div className="px-24 py-12 min-h-screen">
      <section className={`${isLoading ? "" : "animate-pulse"}`}>
        <div className="flex justify-between items-center mb-6">
          <h1
            className={` ${
              isLoading
                ? "text-xl font-medium flex items-center gap-1"
                : "bg-slate-200 h-8 w-32 rounded"
            }`}>
            <i
              className={`${
                isLoading
                  ? "bx bx-user-circle text-5xl text-blueLight"
                  : "hidden"
              }`}></i>
            {isLoading ? detailForum?.author : ""}
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
          <i className="bx bx-user-circle text-5xl text-blueLight"></i>
          <textarea
            name="comment"
            id="comment"
            cols={30}
            rows={5}
            placeholder="Tulis Komentar"
            className="border border-blueLight p-4 w-full outline-none rounded-lg"></textarea>
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            className="bg-blueLight text-white mt-6 px-6 text-lg outline-none">
            Kirim
          </Button>
        </div>
        <div className="my-12">
          <div className="flex gap-1 mb-6">
            <i className="bx bx-user-circle text-4xl text-blueLight"></i>
            <div className="border border-slate-200 p-4 w-full rounded-lg">
              <div className="flex items-center gap-2">
                <h2 className="text-md font-semibold text-slate-600">
                  Ibnu Choldun •
                </h2>
                <p className="text-sm font-extralight">Thu Feb 22 2024</p>
              </div>
              <p className="text-xl  pt-4">Aku bisa</p>
            </div>
          </div>
          <div className="flex gap-1 mb-6">
            <i className="bx bx-user-circle text-4xl text-blueLight"></i>
            <div className="border border-slate-200 p-4 w-full rounded-lg">
              <div className="flex items-center gap-2">
                <h2 className="text-md font-semibold text-slate-600">
                  Ibnu Choldun •
                </h2>
                <p className="text-sm font-extralight">Thu Feb 22 2024</p>
              </div>
              <p className="text-xl  pt-4">Aku bisa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailForumView;
