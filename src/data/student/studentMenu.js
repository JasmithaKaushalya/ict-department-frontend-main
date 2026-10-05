import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  User,
  GraduationCap,
  FileSpreadsheet,
  CalendarDays,
  FolderOpen,
  Bell,
  MessageSquare,
  LogOut,
} from "lucide-react";

const studentMenu = [
  { title: "Dashboard", path: "/student/dashboard", icon: LayoutDashboard },
  { title: "My Profile", path: "/student/profile", icon: User },
  { title: "GPA & CGPA", path: "/student/gpa", icon: GraduationCap },
  { title: "Results", path: "/student/results", icon: FileSpreadsheet },
  { title: "Course Modules", path: "/student/modules", icon: FolderOpen },
  { title: "Timetable", path: "/student/timetable", icon: CalendarDays },
];

export default studentMenu;
