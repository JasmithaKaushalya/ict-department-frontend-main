import { Routes, Route } from "react-router-dom";
//public
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Courses from "../pages/public/Courses";
import Staff from "../pages/public/AcademicStaff";
import NewsEvents from "../pages/public/NewsEvents";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";

//student
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/student/Dashboard";
import Profile from "../pages/student/Profile";
import GPA from "../pages/student/GPA";
import Results from "../pages/student/Results";
import Modules from "../pages/student/Modules";
import Timetable from "../pages/student/Timetable";

//admin
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import StudentRegistration from "../pages/admin/StudentRegistration";
import Students from "../pages/admin/Students";
import AcademicStaff from "../pages/admin/AcademicStaff";
import ResultsManagement from "../pages/admin/ResultsManagement";
import GpaManagement from "../pages/admin/GpaManagement";
import BatchManagement from "../pages/admin/BatchManagement";
import ProtectedRoute from "./ProtectedRoute";
import CourseModuleManagement from "../pages/admin/CourseModuleManagement";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/academic-staff" element={<Staff />} />
      <Route path="/NewsEvents" element={<NewsEvents />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* Student Dashboard */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="STUDENT">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="gpa" element={<GPA />} />
        <Route path="results" element={<Results />} />
        <Route path="modules" element={<Modules />} />
        <Route path="timetable" element={<Timetable />} />
      </Route>

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="student-registration" element={<StudentRegistration />} />
        <Route path="students" element={<Students />} />
        <Route path="staff" element={<AcademicStaff />} />
        <Route path="modules" element={<CourseModuleManagement />} />
        <Route path="results" element={<ResultsManagement />} />
        <Route path="gpa" element={<GpaManagement />} />
        <Route path="batches" element={<BatchManagement />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
