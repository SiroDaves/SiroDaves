export interface Project {
  title: string;
  descriptions: string[];
  tools: string[];
  role: string;
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: 'SongLib: Android, iOS, Desktop',
    descriptions: [
      'This is another one of my personal long time projects that I work on. I developed SongLib (originally vSongBook) across multiple platforms, starting with Java (Android) and C# (Windows Phone), then moving to desktop with .NET, and Qt. During Covid, I transitioned to Flutter to support Android, iOS, & desktop.',
      'Currently, I use Jetpack Compose (Kotlin), SwiftUI (swift), MongoDB and ExpressJS for the backend and database respectively.'
    ],
    tools: ['Flutter (Dart)', 'Mern', 'Android (Kotlin)', 'iOS (Swift)', '.Net (C#)', 'Qt (C/C++)'],
    role: 'Multi Stack Developer',
    color: "#BB4D1A",
    link: 'https://songlib.vercel.app',
  },
  {
    title: 'MsingiPack: Desktop',
    descriptions: ['Developed a .NET (C#) desktop client for MsingiPack’s e-learning platform, enabling offline content access, downloads, and user activity tracking via REST APIs.'],
    tools: ['.Net (C#)', 'Visual Studio'],
    role: 'Desktop App Developer',
    color: "#615FFF",
    link: 'https://www.msingipack.cloud',
  },
  {
    title: 'TechElimu - Desktop',
    descriptions: ['Based on MsingiPack, our team was recruited to build a similar e-learning platform for TechElimu. I developed a .NET (C#) desktop client that consumed REST APIs, enabling offline content access and user activity tracking.'],
    tools: ['.Net (C#)', 'Visual Studio'],
    role: 'Desktop App Developer',
    color: "#9810FA",
    link: 'https://techelimu.co.ke',
  },
  {
    title: 'Kundli: Android',
    descriptions: ['I was tasked to work alongside another developer to convert a legacy app built with React Native to Flutter. It involved learning to work with React Native to understand the logic so as to translate it to Flutter.'],
    tools: ['Flutter (Dart)', 'React Native (Javascript)'],
    role: 'Mobile App Developer',
    color: "#45556C",
    link: 'https://www.astrosage.com/kundli/',
  },
  {
    title: 'Infinadeck: Desktop',
    descriptions: ['Developed the Infinadeck desktop client app using Qt (C/C++) for a customer-oriented IoT application.'],
    tools: ['Qt (C/C++)', 'Qt Creator', 'Visual Studio'],
    role: 'Front-End Developer',
    color: "#1C398E",
    link: 'https://infinadeck.com',
  },
  {
    title: 'SwahiLib: Android, iOS',
    descriptions: ['Developed the Infinadeck desktop client app using Qt (C/C++) for a customer-oriented IoT application.'],
    tools: ['Flutter (Dart)', 'Android (Kotlin)', 'iOS (Swift)', 'Supabase'],
    role: 'Mobile App Developer',
    color: "#016630",
    link: 'https://linktr.ee/swahilibapp',
  },
  {
    title: 'Marine Cargo Insurance Portal: Web',
    descriptions: ['I worked on a stalled project for Minet Insurance for 3 months to add the financial module which basically involved integrating the platform with Mpesa Daraja Api for retail invoicing via their Paybill.'],
    tools: ['Laravel (Php)', 'React (TypeScript)', 'Mpesa Daraja Api', 'Maria Db'],
    role: 'Full-Stack Developer',
    color: "#C11007",
    link: 'https://retail.minet.co.ke/marine',
  },
  {
    title: 'Savii Errands: Android, iOS',
    descriptions: [
      'Savii Errands is a service hailing app I worked on with a team of other developers that enables clients and delivery guys to locate it with each other.', 'It uses Flutter and Open Street maps to manage as well as locate clients and errand runners.'
    ],
    tools: ['Flutter (Dart)', 'Open Street Maps', 'Supabase'],
    role: 'Mobile App Developer',
    color: "#441306",
    link: '',
  },
];
