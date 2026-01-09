// app/data/curriculum.ts

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'doc' | 'quiz';
};

export type Module = {
  id: string;
  days: string;
  title: string;
  description: string;
  iconName: 'terminal' | 'smartphone' | 'server' | 'rocket';
  lessons: Lesson[];
};

export const curriculumData: Module[] = [
  {
    id: 'module-1',
    days: 'Өдөр 1-3',
    title: 'Суурь & Бэлтгэл',
    description: 'Хөгжүүлэлтийн орчин бэлдэх, Dart хэлний суурь, Flutter суулгах.',
    iconName: 'terminal',
    lessons: [
      { id: 'l1', title: 'VS Code болон Flutter SDK суулгах', duration: '45 мин', type: 'video' },
      { id: 'l2', title: 'Dart хэлний хувьсагч ба нөхцөл шалгах', duration: '1 цаг', type: 'doc' },
      { id: 'l3', title: 'OOP: Класс ба Объект хандалт', duration: '1.5 цаг', type: 'video' },
      { id: 'l4', title: 'Анхны Hello World апп ажиллуулах', duration: '30 мин', type: 'video' },
    ]
  },
  {
    id: 'module-2',
    days: 'Өдөр 4-7',
    title: 'Frontend Sprint (UI)',
    description: 'Рестораны меню болон захиалгын дэлгэцүүдийг бодит мэт угсрах.',
    iconName: 'smartphone',
    lessons: [
      { id: 'l5', title: 'Row, Column, Container विजетүүд', duration: '1 цаг', type: 'video' },
      { id: 'l6', title: 'Login Screen дизайн хийх', duration: '2 цаг', type: 'video' },
      { id: 'l7', title: 'Хоолны меню жагсаалт (ListView)', duration: '1.5 цаг', type: 'video' },
      { id: 'l8', title: 'Дэлгэц хооронд шилжих (Navigator)', duration: '1 цаг', type: 'doc' },
    ]
  },
  {
    id: 'module-3',
    days: 'Өдөр 8-10',
    title: 'Backend Integration',
    description: 'Firebase ашиглан хэрэглэгч бүртгэх, захиалга хадгалах.',
    iconName: 'server',
    lessons: [
      { id: 'l9', title: 'Firebase төсөл үүсгэх & тохиргоо', duration: '40 мин', type: 'video' },
      { id: 'l10', title: 'Authentication: Имэйлээр нэвтрэх', duration: '2 цаг', type: 'video' },
      { id: 'l11', title: 'Firestore: Хоолны цэс унших', duration: '1.5 цаг', type: 'video' },
      { id: 'l12', title: 'Захиалга бичих (CRUD үйлдэл)', duration: '1 цаг', type: 'doc' },
    ]
  },
  {
    id: 'module-4',
    days: 'Өдөр 11-14',
    title: 'Final Polish & AI',
    description: 'AI ашиглан код сайжруулах, алдаа засах, апп-аа дуусгах.',
    iconName: 'rocket',
    lessons: [
      { id: 'l13', title: 'App Icon болон Splash Screen солих', duration: '30 мин', type: 'video' },
      { id: 'l14', title: 'AI (ChatGPT) ашиглан алдаа засах', duration: '1 цаг', type: 'video' },
      { id: 'l15', title: 'Төслийн танилцуулга бэлдэх', duration: '2 цаг', type: 'doc' },
      { id: 'l16', title: 'Төгсөлтийн ажил хамгаалах', duration: '-', type: 'quiz' },
    ]
  }
];