const curriculumSeed = [
  // 100 Level - Semester 1
  { code: "ICT131-3", title: "Programming Techniques", credits: 3, level: "100", semester: 1, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT132-2", title: "Fundamentals of Computer Networks", credits: 2, level: "100", semester: 1, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT133-3", title: "Computer Systems Organization", credits: 3, level: "100", semester: 1, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT141-3", title: "Electronics for ICT", credits: 3, level: "100", semester: 1, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT101-2", title: "Mathematics for ICT", credits: 2, level: "100", semester: 1, specialization: null, type: "Compulsory", status: "Active" },

  // 100 Level - Semester 2
  { code: "ICT134-2", title: "Database Management Systems", credits: 2, level: "100", semester: 2, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT142-3", title: "Internet and Web Technologies", credits: 3, level: "100", semester: 2, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT143-2", title: "Data Structures and Algorithms", credits: 2, level: "100", semester: 2, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT102-2", title: "Calculus", credits: 2, level: "100", semester: 2, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT103-2", title: "Introduction to Statistics", credits: 2, level: "100", semester: 2, specialization: null, type: "Compulsory", status: "Active" },

  // 200 Level - Semester 3
  { code: "ICT231-3", title: "Object Oriented Programming", credits: 3, level: "200", semester: 3, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT235-3", title: "Software Engineering", credits: 3, level: "200", semester: 3, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT234-2", title: "Information Assurance", credits: 2, level: "200", semester: 3, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT232-3", title: "Information Systems and Data Modeling", credits: 3, level: "200", semester: 3, specialization: null, type: "Compulsory", status: "Active" },

  // 200 Level - Semester 4
  { code: "ICT238-3", title: "Object Oriented Analysis and Design", credits: 3, level: "200", semester: 4, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT236-2", title: "Business Process Management", credits: 2, level: "200", semester: 4, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT211-2", title: "Project Management", credits: 2, level: "200", semester: 4, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT241-2", title: "Human Computer Interaction", credits: 2, level: "200", semester: 4, specialization: null, type: "Compulsory", status: "Active" },

  // 300 Level - Common (Semester 5)
  { code: "ICT331-2", title: "Advanced Database Management Systems", credits: 2, level: "300", semester: 5, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT332-3", title: "Software Quality Assurance", credits: 3, level: "300", semester: 5, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT342-2", title: "Cloud Computing", credits: 2, level: "300", semester: 5, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT343-3", title: "Web Service Technologies", credits: 3, level: "300", semester: 5, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT341-2", title: "Algorithm Design and Optimization", credits: 2, level: "300", semester: 5, specialization: null, type: "Compulsory", status: "Active" },

  // 300 Level - Software Technology (Semester 5)
  { code: "ICT351-2", title: "Mobile Computing", credits: 2, level: "300", semester: 5, specialization: "Software Technology", type: "Compulsory", status: "Active" },
  { code: "ICT352-2", title: "Rapid Application Development", credits: 2, level: "300", semester: 5, specialization: "Software Technology", type: "Compulsory", status: "Active" },

  // 300 Level - Business Intelligence (Semester 5)
  { code: "ICT361-3", title: "Operational Research", credits: 3, level: "300", semester: 5, specialization: "Business Intelligence", type: "Compulsory", status: "Active" },
  { code: "ICT362-1", title: "Sampling Techniques", credits: 1, level: "300", semester: 5, specialization: "Business Intelligence", type: "Compulsory", status: "Active" },

  // 300 Level - Semester 6
  { code: "ICT371-6", title: "Industrial Training", credits: 6, level: "300", semester: 6, specialization: null, type: "Compulsory", status: "Active" },

  // 400 Level - Common (Semester 7)
  { code: "ICT481-6", title: "Capstone Project", credits: 6, level: "400", semester: 7, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT441-2", title: "Scientific Writing and Research Methodology", credits: 2, level: "400", semester: 7, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT442-2", title: "Emerging Technologies in ICT", credits: 2, level: "400", semester: 7, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT431-2", title: "Object Oriented Design Patterns and Principles", credits: 2, level: "400", semester: 7, specialization: null, type: "Compulsory", status: "Active" },

  // 400 Level - Software Technology (Semester 7)
  { code: "ICT451-3", title: "Software Requirement Engineering", credits: 3, level: "400", semester: 7, specialization: "Software Technology", type: "Compulsory", status: "Active" },
  { code: "ICT452-2", title: "Semantic Web Technologies", credits: 2, level: "400", semester: 7, specialization: "Software Technology", type: "Compulsory", status: "Active" },

  // 400 Level - Business Intelligence (Semester 7)
  { code: "ICT461-2", title: "Time Series Analysis", credits: 2, level: "400", semester: 7, specialization: "Business Intelligence", type: "Compulsory", status: "Active" },
  { code: "ICT462-3", title: "Data Mining and Practical Machine Learning", credits: 3, level: "400", semester: 7, specialization: "Business Intelligence", type: "Compulsory", status: "Active" },

  // 400 Level - Semester 8
  { code: "ICT411-2", title: "Entrepreneurship and Business Development", credits: 2, level: "400", semester: 8, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT421-2", title: "Safety and Risk Management", credits: 2, level: "400", semester: 8, specialization: null, type: "Compulsory", status: "Active" },
  { code: "ICT432-3", title: "Computer Systems Security", credits: 3, level: "400", semester: 8, specialization: null, type: "Compulsory", status: "Active" },

  // 400 Level - Software Technology (Semester 8)
  { code: "ICT453-2", title: "Parallel and Distributed Computing", credits: 2, level: "400", semester: 8, specialization: "Software Technology", type: "Compulsory", status: "Active" },
  { code: "ICT454-3", title: "IoT and Embedded Systems", credits: 3, level: "400", semester: 8, specialization: "Software Technology", type: "Compulsory", status: "Active" },

  // 400 Level - Business Intelligence (Semester 8)
  { code: "ICT463-2", title: "Neural Networks", credits: 2, level: "400", semester: 8, specialization: "Business Intelligence", type: "Compulsory", status: "Active" },
  { code: "ICT464-3", title: "Intelligent Systems", credits: 3, level: "400", semester: 8, specialization: "Business Intelligence", type: "Compulsory", status: "Active" },
];

export default curriculumSeed;