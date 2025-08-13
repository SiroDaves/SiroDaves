import cplusplus from '../../public/assets/svg/skills/cplusplus.svg';
import csharp from '../../public/assets/svg/skills/csharp.svg';
import dart from '../../public/assets/svg/skills/dart.svg';
import kotlin from '../../public/assets/svg/skills/kotlin.svg';
import swift from '../../public/assets/svg/skills/swift.svg';
import php from '../../public/assets/svg/skills/php.svg';
import java from '../../public/assets/svg/skills/java.svg';
import typescript from '../../public/assets/svg/skills/typescript.svg';
import javascript from '../../public/assets/svg/skills/javascript.svg';

export const skills = [
  'Dart',
  'Kotlin',
  'Swift',
  'Php',
  'Java',
  'TypeScript',
  'Javascript',
  'C++',
  'C#',
];

export const skillsImage = (skill: String): string | undefined => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'kotlin':
      return kotlin;
    case 'swift':
      return swift;
    case 'java':
      return java;
    case 'php':
      return php;
    case 'typescript':
      return typescript;
    case 'javascript':
      return javascript;
    default:
      return undefined;
  }
}
