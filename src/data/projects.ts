export interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    role: string;
    code: string;
    demo: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: 'SongLib - Android, iOS, Desktop, Web',
      description: "I have worked with different technologies for this project that I started when I was a student. SongLib which initially was known as vSongBook started out as an Android App with me using Java before me adding support of Windows Phone with C# and even Desktop and later during Covid transitioning to Flutter to make it available everywhere: Android, iOS, Web and desktop.",
      tools: ['Flutter', 'Firebase', 'Express', 'MongoDB'],
      role: 'Multi Stack Developer',
      code: 'https://github.com/sirodaves/songlib',
      demo: 'https://songlib.vercel.app',
    },
    {
      id: 2,
      name: 'Infinadeck - Desktop',
      description: 'Ten Second Media (TSM) is a startup based in Europe building desktop as well as IoT customer oriented applications using Qt Framework (C/C++). I worked as a Qt Frontend app developer using Qt (C/C++) for the Infinadeck desktop client app.',
      tools: ['Qt', 'Qt Creator', 'Visual Studio'],
      role: 'Front-End Developer',
      code: '',
      demo: '',
    },
    {
      id: 3,
      name: 'TechElimu - Desktop',
      description: 'Referred by MsingiPack, the development team got recruited to work on a similar an e-learning platform now for TechElimu. I developed a desktop client using .Net Framework (c#) to consume the REST api and provide offline content access by allowing users to download learning content and track usage statistics.',
      tools: ['.Net', 'Visual Studio'],
      role: 'Desktop App Developer',
      code: '',
      demo: '',
    }
  ];
  