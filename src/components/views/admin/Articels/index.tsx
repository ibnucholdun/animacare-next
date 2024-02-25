import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";
import Button from "@/components/ui/Button";
const { useRouter } = require("next/navigation");

type Props = {};

const ArticlesAdminView = (props: Props) => {
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
      </div>
    </AdminLayout>
  );
};

export default ArticlesAdminView;
