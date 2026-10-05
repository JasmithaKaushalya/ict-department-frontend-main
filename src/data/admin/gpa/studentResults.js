// Simulates results already saved via Results Management (POST /api/results),
// keyed by enrollment number. Each entry holds per-semester module grades.
// Once a real backend exists, this file is replaced by GET /api/results/student/{id}.

const studentResults = {
  "ICT/2024/001": {
    semester3: [
      { code: "ICT231-3", credits: 3, grade: "A-" },
      { code: "ICT232-3", credits: 3, grade: "B+" },
      { code: "ICT235-3", credits: 3, grade: "A" },
      { code: "ICT234-2", credits: 2, grade: "A+" },
    ],
  },
  "ICT/2024/002": {
    semester3: [
      { code: "ICT231-3", credits: 3, grade: "B" },
      { code: "ICT232-3", credits: 3, grade: "B+" },
      { code: "ICT235-3", credits: 3, grade: "A-" },
      { code: "ICT234-2", credits: 2, grade: "B" },
    ],
  },
  "ICT/2024/003": {
    semester3: [
      { code: "ICT231-3", credits: 3, grade: "A+" },
      { code: "ICT232-3", credits: 3, grade: "A" },
      { code: "ICT235-3", credits: 3, grade: "A+" },
      { code: "ICT234-2", credits: 2, grade: "A" },
    ],
  },
};

export default studentResults;
