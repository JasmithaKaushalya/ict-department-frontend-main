import { useState, useEffect } from "react";
import ProfileHeader from "../../components/pages/student/profile/ProfileHeader";
import ProfileAvatar from "../../components/pages/student/profile/ProfileAvatar";
import PersonalInfo from "../../components/pages/student/profile/PersonalInfo";
import AcademicInfo from "../../components/pages/student/profile/AcademicInfo";
import { getMyProfile } from "../../api/userApi";
import { getMyResults } from "../../api/resultApi";

function Profile() {
  const [user, setUser] = useState(null);
  const [academicStats, setAcademicStats] = useState({
    currentSemester: "—",
    cgpa: "—",
    creditsEarned: "—",
  });
  const [loading, setLoading] = useState(true);

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      // 1. Fetch User Data
      const profileData = await getMyProfile();
      setUser(profileData);

      // 2. Fetch Results Data to calculate CGPA & Credits
      const resultsData = await getMyResults();

      if (resultsData && resultsData.length > 0) {
        let attemptedCredits = 0;
        let earnedCredits = 0;
        let totalPoints = 0;
        let maxSemester = 1;

        resultsData.forEach((r) => {
          const credits = r.subject.creditHours;

          attemptedCredits += credits;
          totalPoints += credits * r.gradePoint;

          // Only count credits as 'earned' if the student passed (Grade Point > 0)
          if (r.gradePoint > 0) {
            earnedCredits += credits;
          }

          // Find the highest semester number they have results for
          const semNum = parseInt(r.semester.replace("SEMESTER_", ""), 10);
          if (semNum > maxSemester) maxSemester = semNum;
        });

        const cgpa =
          attemptedCredits > 0
            ? (totalPoints / attemptedCredits).toFixed(2)
            : "0.00";

        setAcademicStats({
          currentSemester: `Semester ${maxSemester}`,
          cgpa: cgpa,
          creditsEarned: earnedCredits.toString(),
        });
      } else {
        // Default if no results exist yet
        setAcademicStats({
          currentSemester: "Semester 1",
          cgpa: "0.00",
          creditsEarned: "0",
        });
      }
    } catch (error) {
      console.error("Failed to load profile data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-red-500 py-8">
        Failed to load profile data.
      </div>
    );
  }

  return (
    <div className="space-y-8">
     
      <ProfileHeader />
      <ProfileAvatar student={user} onPictureUpdate={fetchProfileData} />

      <div className="grid lg:grid-cols-2 gap-8">
        <PersonalInfo student={user} />
        <AcademicInfo student={user} stats={academicStats} />
      </div>
    </div>
  );
}

export default Profile;
