import Sidebar from "@/components/fragments/Sidebar";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="w-[250px]">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
