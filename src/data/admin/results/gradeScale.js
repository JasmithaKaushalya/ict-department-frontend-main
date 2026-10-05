const gradeScale = [
  { min: 90, max: 100, grade: "A+", point: 4.0 },
  { min: 85, max: 89, grade: "A", point: 4.0 },
  { min: 80, max: 84, grade: "A-", point: 3.7 },
  { min: 75, max: 79, grade: "B+", point: 3.3 },
  { min: 70, max: 74, grade: "B", point: 3.0 },
  { min: 65, max: 69, grade: "B-", point: 2.7 },
  { min: 60, max: 64, grade: "C+", point: 2.3 },
  { min: 55, max: 59, grade: "C", point: 2.0 },
  { min: 50, max: 54, grade: "C-", point: 1.7 },
  { min: 45, max: 49, grade: "D+", point: 1.3 },
  { min: 40, max: 44, grade: "D", point: 1.0 },
  { min: 0, max: 39, grade: "E", point: 0.0 },
];

export function getGradeFromMarks(marks) {
  if (marks === "" || marks === null || marks === undefined) return null;
  const numericMarks = Number(marks);
  return gradeScale.find((g) => numericMarks >= g.min && numericMarks <= g.max) || null;
}

export default gradeScale;