export interface Experience {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Mobile App Developer',
    company: "Britam",
    duration: "June 2023 - Dec 2024",
    type: "Hybrid",
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    company: "Pondus",
    duration: "Jan 2023 - May 2023",
    type: "Remote",
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    company: "Adanian Labs",
    duration: "Aug 2021 - Jul 2022",
    type: "On-site",
  },
  {
    id: 4,
    title: 'Desktop App Developer',
    company: "Grow Mobile Technology",
    duration: "Apr 2020 - Mar 2021",
    type: "On-site",
  },
  {
    id: 5,
    title: 'Desktop App Developer',
    company: "Diamond Doors Eng. Ltd",
    duration: "Feb 2019 - Jan 2020",
    type: "On-site",
  },
  {
    id: 5,
    title: 'Software Developer Intern',
    company: "Kenya School of TVET",
    duration: "Jan 2017 - Dec 2017",
    type: "On-site",
  },
];
