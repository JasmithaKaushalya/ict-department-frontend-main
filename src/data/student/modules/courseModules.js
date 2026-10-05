const courseModules = {
  semester1: [
    { code: "ESD 121", title: "English Language I", credits: 1 },
    { code: "ESD 151/161", title: "Sinhala / Tamil Language I", credits: 1 },
    { code: "ICT 101", title: "Mathematics for ICT", credits: 2 },
    { code: "ICT 131", title: "Programming Techniques", credits: 3 },
    { code: "ICT 132", title: "Fundamentals of Computer Networks", credits: 2 },
    { code: "ICT 133", title: "Computer Systems Organization", credits: 3 },
    { code: "ICT 141", title: "Electronics for ICT", credits: 3 },
  ],

  semester2: [
    { code: "ESD 111", title: "Communication Skills I", credits: 1 },
    { code: "ESD 122", title: "Communicative English", credits: 1 },
    { code: "ESD 152/162", title: "Sinhala / Tamil Language II", credits: 1 },
    { code: "ICT 102", title: "Calculus", credits: 2 },
    { code: "ICT 103", title: "Introduction to Statistics", credits: 2 },
    { code: "ICT 111", title: "Financial Management", credits: 2 },
    { code: "ICT 134", title: "Database Management Systems", credits: 2 },
    { code: "ICT 142", title: "Internet and Web Technologies", credits: 3 },
    { code: "ICT 143", title: "Data Structures and Algorithms", credits: 2 },
  ],

  semester3: [
    { code: "BGE 211", title: "Aesthetic Studies", credits: 2 },
    { code: "ESD 221", title: "Effective English Usage", credits: 1 },
    { code: "ICT 201", title: "Numerical Methods", credits: 2 },
    { code: "ICT 231", title: "Object Oriented Programming", credits: 3 },
    {
      code: "ICT 232",
      title: "Information Systems and Data Modeling",
      credits: 3,
    },
    { code: "ICT 233", title: "Communication Theory", credits: 2 },
    { code: "ICT 234", title: "Information Assurance", credits: 2 },
    { code: "ICT 235", title: "Software Engineering", credits: 3 },
  ],

  semester4: [
    { code: "ESD 222", title: "Explorative English", credits: 1 },
    { code: "ICT 211", title: "Project Management", credits: 2 },
    { code: "ICT 221", title: "Professional Ethics in Computing", credits: 2 },
    { code: "ICT 222", title: "Independent Study Project I", credits: 2 },
    { code: "ICT 236", title: "Business Process Management", credits: 2 },
    { code: "ICT 237", title: "Systems Level Programming", credits: 2 },
    {
      code: "ICT 238",
      title: "Object Oriented Analysis and Design",
      credits: 3,
    },
    { code: "ICT 241", title: "Human Computer Interaction", credits: 2 },
    { code: "ICT 242", title: "Statistical Methods", credits: 2 },
  ],

  semester5: [
    { code: "ESD 311", title: "Communication Skills II", credits: 1 },
    { code: "ICT 321", title: "Independent Study Project II", credits: 2 },
    {
      code: "ICT 331",
      title: "Advanced Database Management Systems",
      credits: 2,
    },
    { code: "ICT 332", title: "Software Quality Assurance", credits: 3 },
    { code: "ICT 341", title: "Algorithm Design and Optimization", credits: 2 },
    { code: "ICT 342", title: "Cloud Computing", credits: 2 },
    { code: "ICT 343", title: "Web Service Technologies", credits: 3 },
    {
      code: "ICT 351",
      title: "Mobile Computing",
      credits: 2,
      specialization: "Software Technology",
    },
    {
      code: "ICT 352",
      title: "Rapid Application Development",
      credits: 2,
      specialization: "Software Technology",
    },
    {
      code: "ICT 361",
      title: "Operational Research",
      credits: 3,
      specialization: "Business Intelligence",
    },
    {
      code: "ICT 362",
      title: "Sampling Techniques",
      credits: 1,
      specialization: "Business Intelligence",
    },
  ],

  semester6: [{ code: "ICT 371", title: "Industrial Training", credits: 6 }],

  semester7: [
    { code: "ICT 481", title: "Capstone Project", credits: 6 },
    {
      code: "ICT 431",
      title: "Object Oriented Design Patterns and Principles",
      credits: 2,
    },
    {
      code: "ICT 441",
      title: "Scientific Writing and Research Methodology",
      credits: 2,
    },
    { code: "ICT 442", title: "Emerging Technologies in ICT", credits: 2 },
    { code: "ICT 443", title: "Multivariate Analysis", credits: 2 },
    {
      code: "ICT 451",
      title: "Software Requirement Engineering",
      credits: 3,
      specialization: "Software Technology",
    },
    {
      code: "ICT 452",
      title: "Semantic Web Technologies",
      credits: 2,
      specialization: "Software Technology",
    },
    {
      code: "ICT 461",
      title: "Time Series Analysis",
      credits: 2,
      specialization: "Business Intelligence",
    },
    {
      code: "ICT 462",
      title: "Data Mining and Practical Machine Learning",
      credits: 3,
      specialization: "Business Intelligence",
    },
  ],

  semester8: [
    { code: "ICT 481", title: "Capstone Project (Cont.)", credits: null },
    {
      code: "ICT 411",
      title: "Entrepreneurship and Business Development",
      credits: 2,
    },
    { code: "ICT 421", title: "Safety and Risk Management", credits: 2 },
    { code: "ICT 432", title: "Computer Systems Security", credits: 3 },
    {
      code: "ICT 453",
      title: "Parallel and Distributed Computing",
      credits: 2,
      specialization: "Software Technology",
    },
    {
      code: "ICT 454",
      title: "IoT and Embedded Systems",
      credits: 3,
      specialization: "Software Technology",
    },
    {
      code: "ICT 463",
      title: "Neural Networks",
      credits: 2,
      specialization: "Business Intelligence",
    },
    {
      code: "ICT 464",
      title: "Intelligent Systems",
      credits: 3,
      specialization: "Business Intelligence",
    },
  ],
};

export default courseModules;
