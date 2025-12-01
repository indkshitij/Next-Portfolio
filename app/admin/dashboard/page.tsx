

import Sidebar from "@/frontend/molecules/Sidebar";
import Header from "@/frontend/molecules/admin/Header";


export const metadata = {
  title: 'Dashboard | Admin',
};

const Page = () => {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-custom-black flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
      </div>
    </div>
  );
};

export default Page;
