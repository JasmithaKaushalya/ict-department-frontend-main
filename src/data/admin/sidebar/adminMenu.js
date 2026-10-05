import {
  LayoutDashboard,
  UserPlus,
  Users,
  GraduationCap,
  BookOpen,
  FileSpreadsheet,
  Award,
  Newspaper,
  Layers,
  CalendarDays,
  Settings,
} from "lucide-react";

const adminMenu = [
  { title: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Student Registration", path: "/admin/student-registration", icon: UserPlus },
  { title: "Students", path: "/admin/students", icon: Users },
  { title: "Academic Staff", path: "/admin/staff", icon: GraduationCap },
  { title: "Course Modules", path: "/admin/modules", icon: BookOpen },
  { title: "Results Management", path: "/admin/results", icon: FileSpreadsheet },
  { title: "GPA Management", path: "/admin/gpa", icon: Award },
  { title: "Batch Management", path: "/admin/batches", icon: Layers },

];

export default adminMenu;