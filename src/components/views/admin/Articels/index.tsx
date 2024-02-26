import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
const { useRouter } = require("next/navigation");

type Props = {
  articles: any[];
};

const ArticlesAdminView: React.FC<Props> = ({ articles }) => {
  const router = useRouter();
  return (
    <AdminLayout>
      <div className="px-20 mt-12">
        <h1 className="text-3xl font-semibold text-center">
          Artikel Management
        </h1>
        <Button
          type="button"
          onClick={() => router.push("/admin/articles/post-article")}
          className="mt-2 bg-blueLight text-white text-lg hover:text-blueLight hover:border-blueLight hover:bg-white flex items-center gap-2">
          + Tambah Artikel
        </Button>
        <table className="w-full border rounded-lg mt-5">
          <thead className="text-center p-2">
            <tr className="bg-[#f2f2f2]">
              <th className="w-[40px]  border-2">#</th>
              <th className="w-[300px] border-2">Image</th>
              <th className="w-[600px] border-2">Title</th>
              <th className="w-[200px] border-2">Action</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr className="text-center">
              <td className="border-2">1</td>
              <td className="border-2">1</td>
              <td className="border-2">1</td>
              <td className="border-2">
                <div className="flex justify-center gap-2 p-2">
                  <Button
                    type="button"
                    className="cursor-pointer bg-[#3C3CF4] p-4 outline-none">
                    <i className="bx bxs-edit text-xl text-white" />
                  </Button>
                  <Button
                    type="button"
                    className="cursor-pointer bg-[#FF0000] p-4 outline-none">
                    <i className="bx bx-trash text-xl text-white" />
                  </Button>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border-2">1</td>
              <td className="border-2">1</td>
              <td className="border-2">1</td>
              <td className="border-2">1</td>
            </tr>
          </tbody> */}
          <tbody>
            {articles.map((article: any, index: number) => (
              <tr className="text-center" key={index}>
                <td className="border-2">{index + 1}</td>
                <td className="border-2 flex justify-center py-3">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={100}
                      height={100}
                    />
                  ) : null}
                </td>
                <td className="border-2">{article.title}</td>
                <td className="border-2">
                  <div className="flex justify-center gap-2 p-2">
                    <Button
                      type="button"
                      className="cursor-pointer bg-[#3C3CF4] p-4 outline-none">
                      <i className="bx bxs-edit text-xl text-white" />
                    </Button>
                    <Button
                      type="button"
                      className="cursor-pointer bg-[#FF0000] p-4 outline-none">
                      <i className="bx bx-trash text-xl text-white" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ArticlesAdminView;
