import Sidebar from "@/components/fragments/Sidebar";

type Props = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bxs-dashboard",
  },
  {
    title: "Articles",
    url: "/admin/articles",
    icon: "bxs-book",
  },
];

const AdminLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="">
      <Sidebar lists={listSidebarItem} />
      {children}
    </div>
  );
};

export default AdminLayout;
