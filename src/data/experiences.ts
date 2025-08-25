export interface Experience {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
  descriptions: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Apps Developer',
    company: "Britam EA",
    duration: "June 2023 - May 2025",
    type: "Hybrid",
    descriptions: ["Spearheaded the development of a cross-platform mobile app for Britam Financial Advisors (FAs) using Flutter, building it from scratch to a live app now available on both Google Playstore and Apple Store that enables FAs to onboard new clients, track and manage sales efficiently.", "Led sprint planning and feature prioritization discussions with business teams, bridging the gap between technical and non-technical stakeholders.", "Developed a web admin portal using NestJS, allowing underwriters to review policy applications seamlessly and improve operational efficiency.", "Provided support and maintenance for deployed systems to ensure reliability and user satisfaction.", "Mentored junior devs, conducting code reviews and knowledge-sharing sessions."],
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    company: "Pondus Ltd",
    duration: "Jan 2023 - May 2023",
    type: "Remote",
    descriptions: ["Worked within a cross-functional team of backend and frontend developers to fix bugs and introduce new features in the Pondus mobile app, successfully shipping it to Android, iOS, and web platforms.", "Improved app stability and user experience, contributing to a 30% increase in user engagement.", "Facilitated communication between backend and frontend teams, ensuring smooth integration and reduced blockers."],
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    company: "Adanian Labs",
    duration: "Aug 2021 - Jul 2022",
    type: "On-site",
    descriptions: ["Contributed to the successful launch of MooveBeta, a micro-transaction platform with integrated mobile money transfer functionality across Kenya, Uganda, Nigeria & SA using Flutter.", "Collaborated within a team of five developers to meet tight deadlines and exceed client expectations.", "Took ownership of client communication during key project phases, aligning deliverables with client expectations."],
  },
  {
    id: 4,
    title: 'Desktop App Developer',
    company: "Grow Mobile Technology",
    duration: "Apr 2020 - Mar 2021",
    type: "On-site",
    descriptions: ["Designed and implemented intuitive Desktop client for e-learning platforms using .Net Platform (C#).", "Played a pivotal role in the successful delivery of projects like KEC App, MsingiPack, completing them within budget constraints.", "Improved system stability by implementing optimized data storage solutions."],
  },
  {
    id: 5,
    title: 'Software Developer',
    company: "Diamond Doors Eng. Ltd",
    duration: "Feb 2019 - Jan 2020",
    type: "On-site",
    descriptions: ["Developed a customer and sales management system, its REST API (Php), and a mobile app (Java).", "Improved customer experience by automating processes, reducing response time.", "Collaborated with a team of three devs to deliver the MVP, ensuring scalability for future enhancements.", "Acted as the main liaison between developers and management, translating technical progress into business impact."],
  },
  {
    id: 6,
    title: 'Software Developer Intern',
    company: "Kenya School of TVET",
    duration: "Jan 2017 - Jun 2017",
    type: "On-site",
    descriptions: ["Architected and developed a comprehensive Complaint Management System utilizing PHP and JavaScript, enabling efficient tracking, categorization, and resolution of institutional issues"],
  },
];
