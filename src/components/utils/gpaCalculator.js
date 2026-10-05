const gradePoints = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  E: 0.0,
};

export function getGradePoint(grade) {
  return gradePoints[grade] ?? 0;
}

// Semester GPA = Σ(Grade Point × Credit) / Total Credits
export function calculateGPA(moduleResults) {
  if (!moduleResults.length) return 0;

  const totalPoints = moduleResults.reduce(
    (sum, m) => sum + getGradePoint(m.grade) * m.credits,
    0,
  );
  const totalCredits = moduleResults.reduce((sum, m) => sum + m.credits, 0);

  if (totalCredits === 0) return 0;

  return Number((totalPoints / totalCredits).toFixed(2));
}

// CGPA = same formula across all semesters completed so far
export function calculateCGPA(allSemesterResults) {
  const allModules = allSemesterResults.flat();
  return calculateGPA(allModules);
}

export function getPerformanceCategory(gpa) {
  if (gpa >= 3.7) return "Excellent";
  if (gpa >= 3.0) return "Good";
  if (gpa >= 2.0) return "Average";
  return "Probation";
}

export default gradePoints;
