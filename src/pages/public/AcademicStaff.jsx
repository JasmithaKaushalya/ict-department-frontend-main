import { useState, useEffect } from "react";
import StaffHero from "../../components/pages/public/acedamicstaff/StaffHero";
import HodFeatured from "../../components/pages/public/acedamicstaff/HodFeatured";
import StaffGrid from "../../components/pages/public/acedamicstaff/StaffGrid";
import ResearchAreas from "../../components/pages/public/acedamicstaff/ResearchAreas";
import CTASection from "../../components/pages/public/home/CTASection";
import PublicLayout from "../../layouts/PublicLayout";
import { getAllAcademicStaff } from "../../api/academicStaffApi";

const TITLE_MAP = {
  SENIOR_PROFESSOR: "Senior Professor",
  PROFESSOR: "Professor",
  SENIOR_LECTURER: "Senior Lecturer",
  LECTURER: "Lecturer",
  LECTURER_PROBATIONARY: "Probationary Lecturer",
  LECTURER_TEMPORARY: "Temporary Lecturer",
  DEMONSTRATOR: "Demonstrator",
  DEMONSTRATOR_TEMPORARY: "Temporary Demonstrator"
};

function AcademicStaff() {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await getAllAcademicStaff();
        
        const mappedData = data.map(s => {
          const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            s.displayName
          )}&background=eff6ff&color=1d4ed8&size=256`;
          
          return {
            id: s.email,
            name: s.displayName,
            email: s.email,
            phone: s.phoneNumber ? `0${s.phoneNumber}` : "",
            designation: TITLE_MAP[s.title] || s.title?.replace(/_/g, " "),
            qualifications: s.qualifications || [],
            research: s.researchInterests || [],
            image: s.picture ? `http://localhost:8081${s.picture}` : defaultAvatar,
            rawTitle: s.title,
            positions: s.positions || []
          };
        });
        
        setStaffList(mappedData);
      } catch (error) {
        console.error("Failed to load public staff data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) {
    return (
      <PublicLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </PublicLayout>
    );
  }

  // 1. Identify HOD: Looks for "Head of Department" in positions, falls back to highest ranking staff
  const hod = staffList.find(s => s.positions.includes("Head of Department")) 
              || staffList.find(s => ["SENIOR_PROFESSOR", "PROFESSOR", "SENIOR_LECTURER"].includes(s.rawTitle))
              || staffList[0];

  // 2. Separate Academic vs Temporary based on Backend Enums
  const permanentTitles = ["SENIOR_PROFESSOR", "PROFESSOR", "SENIOR_LECTURER", "LECTURER", "LECTURER_PROBATIONARY"];
  const temporaryTitles = ["LECTURER_TEMPORARY", "DEMONSTRATOR", "DEMONSTRATOR_TEMPORARY"];

  // Exclude HOD from the standard grid so they don't appear twice
  const regularStaff = staffList.filter(s => s.id !== hod?.id);

  const academicStaff = regularStaff.filter(s => permanentTitles.includes(s.rawTitle));
  const temporaryStaff = regularStaff.filter(s => temporaryTitles.includes(s.rawTitle));

  // 3. Extract all unique research areas across all staff dynamically
  const allResearch = [...new Set(staffList.flatMap(s => s.research))].filter(Boolean);

  return (
    <PublicLayout>
      <StaffHero />
      <HodFeatured hod={hod} />

      <StaffGrid
        title="Academic Staff"
        subtitle="Our Lecturers"
        members={academicStaff}
        variant="academic"
      />

      <StaffGrid
        title="Temporary Academic Staff"
        subtitle="Demonstrators"
        members={temporaryStaff}
        variant="temporary"
      />

      <ResearchAreas areas={allResearch} />
      <CTASection />
    </PublicLayout>
  );
}

export default AcademicStaff;