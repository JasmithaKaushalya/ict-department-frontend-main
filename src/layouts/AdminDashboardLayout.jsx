import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/pages/admin/sidebar/AdminSidebar";
import AdminTopbar from "../components/pages/admin/sidebar/AdminTopbar";

function AdminDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
