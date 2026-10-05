import Footer from "../components/common/layout/Footer";
import Navbar from "../components/common/layout/Navbar";

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

export default PublicLayout;
