'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  PlayCircle, FileText, ChevronLeft, Terminal, Link as LinkIcon, 
  Download, Code2, ChevronRight, CheckCircle2, ChevronDown, 
  Layout, Smartphone, Server, Database, Globe, Rocket, Zap, Cpu, 
  Palette, MousePointer, Image as ImageIcon, AlertTriangle, ShieldAlert, XCircle 
} from 'lucide-react';
import { GlassCard } from '@/app/components/GlassCard';
import Link from 'next/link';

// --- DATA: COMPLETE COURSE CONTENT (Node.js & PostgreSQL Updated) ---
const modulesData = {
  // --- MODULE 1: BASICS ---
  'module-1': {
    title: 'Суурь & Бэлтгэл',
    description: 'Flutter хөгжүүлэлтийн мэргэжлийн орчин бэлдэх, Dart хэлний гүнзгийрүүлсэн ойлголт.',
    iconName: 'terminal',
    lessons: [
      {
        id: 'l1',
        title: 'VS Code, SDK & Environment Setup',
        type: 'video',
        duration: '45 мин',
        videoUrl: 'https://www.youtube.com/embed/1KidD72q87s?si=j2TMNj7-SjzxZS99',
        description: 'Flutter нь Cross-Platform учир бид Android болон iOS (Mac дээр) аль алиныг нь зэрэг бэлдэх шаардлагатай. Энэ хичээлээр хөгжүүлэлтийн "Зүрх" болсон SDK болон "Тархи" болсон IDE-г холбоно.',
        steps: [
            { 
              title: 'Flutter SDK татах & задлах', 
              content: 'Google-ийн албан ёсны сайтаас "Stable" хувилбарыг татна. \n\n► Яагаад: Энэ нь Dart хэлний компайлер болон Flutter-ийн бүх widget-үүдийн эх кодыг агуулдаг. \n► Үр дүн: Таны компьютерт гар утасны апп бүтээх "багажнууд" физик байдлаар хуулагдана. \n► Анхаарах: C:/Program Files руу хийж болохгүй (Admin эрх нэхдэг). C:/src/flutter гэх мэт энгийн замд задлах хэрэгтэй.' 
            },
            { 
              title: 'Environment Path тохируулах', 
              content: 'PATH хувьсагчид Flutter-ийн `bin` фолдерыг зааж өгнө. \n\n► Яагаад: Компьютер тань "flutter" гэдэг үгийг хаанаас ч бичсэн таньдаг болгохын тулд. Хэрэв үүнийг хийхгүй бол зөвхөн тухайн фолдер дотроо л ажиллана. \n► MacOS/Linux: .zshrc эсвэл .bashrc файлд замыг нэмнэ. \n► Windows: Environment Variables цонх руу орж Path хэсэгт нэмнэ.' 
            },
            { 
              title: 'Android Toolchain & Xcode (iOS)', 
              content: 'Android Studio-г суулгаж, SDK Command-line tools-ийг check хийж суулгана. Mac хэрэглэгчид AppStore-оос Xcode суулгана. \n\n► Яагаад: Flutter нь эцсийн дүндээ Android SDK болон iOS SDK-г ашиглаж байж л утас руу апп-аа суулгадаг. Flutter бол гүүр юм. \n► Android License: Лицензүүдийг зөвшөөрөхгүй бол PlayStore-д апп гаргах боломжгүй.' 
            }
        ],
        commands: [
            { cmd: 'flutter doctor', desc: 'Оношилгоо: Таны системд юу дутуу байгааг, SDK замууд зөв эсэхийг, Android/Xcode лиценз зөвшөөрөгдсөн эсэхийг бүгдийг шалгаж тайлан гаргана.' },
            { cmd: 'flutter doctor --android-licenses', desc: 'Android SDK ашиглах хууль ёсны зөвшөөрлүүдийг (Yes/No) асууж баталгаажуулна. Бүгдийг нь "y" дарж зөвшөөрөх ёстой.' }
        ],
        risks: [
           { problem: 'cmd-д "flutter" is not recognized гэж гарах', solution: 'Энэ нь Path тохиргоо буруу хийгдсэн үед гарна. Компьютерээ Restart хийх эсвэл Path-аа дахин нягтал.' },
           { problem: 'Android toolchain - develop for Android devices (X)', solution: 'Android Studio > SDK Manager > SDK Tools таб руу ороод "Android SDK Command-line Tools"-ийг чагтлаад Apply дарж суулга.' }
        ],
        links: [
            { title: 'Flutter SDK татах', url: 'https://flutter.dev/docs/get-started/install', icon: Download }
        ]
      },
      {
        id: 'l2',
        title: 'Dart хэлний суурь',
        type: 'video',
        duration: '1 цаг',
        videoUrl: 'https://www.youtube.com/embed/UC2qovrvYY8?si=cYDX6PGkV5hEknhA',
        description: 'Dart хэлний синтакс, хувьсагчийн төрлүүд (var, final, const) болон if/else нөхцөл шалгах логик.',
        steps: [
            { title: 'DartPad ашиглах', content: 'Эхлээд ямар нэгэн суулгац хийхгүйгээр хэлний дүрмээ сурахын тулд dartpad.dev сайтыг ашиглана. \n► Яагаад: Програмчлалын логикт төвлөрөхөд IDE-ийн тохиргоо саад болохгүй байх нь чухал.' },
            { title: 'Хувьсагчид', content: 'String, int, double, bool төрлүүдийг зарлаж сурна. \n► Null Safety: Хувьсагч хоосон байж болох эсэхийг `?` тэмдгээр шийддэг чухал ойлголт.' }
        ],
        commands: [
            { cmd: 'dart create console_app', desc: 'Dart консоль төсөл үүсгэх' },
        ],
        risks: [],
        links: [
            { title: 'DartPad Online', url: 'https://dartpad.dev', icon: Code2 }
        ]
      },
      {
        id: 'l3',
        title: 'Анхны "Hello World" төсөл',
        type: 'doc',
        duration: '30 мин',
        videoUrl: 'https://www.youtube.com/embed/UPSsxGQRIzs?si=p4yYxu581GX89iVR',
        description: 'Flutter create комманд нь олон мянган мөр код бүхий бэлэн загварыг автоматаар үүсгэдэг. Үүнийг iOS болон Android төхөөрөмж дээр зэрэг ажиллуулж үзнэ.',
        steps: [
            { 
              title: 'Төсөл үүсгэх (Scaffolding)', 
              content: 'Terminal дээр `flutter create project_name` бичнэ. \n\n► Яагаад: Энэ комманд нь `android`, `ios`, `lib`, `web` гэх мэт бүх шаардлагатай фолдеруудыг автоматаар үүсгэдэг. \n► Android/iOS ялгаа: `android` фолдерт Gradle тохиргоо, `ios` фолдерт Xcode тохиргоо үүснэ. Бид ихэнхдээ `lib` фолдер дотор л кодоо бичнэ.' 
            },
            { 
              title: 'Аппыг ажиллуулах (Debugging)', 
              content: 'VS Code дээр F5 эсвэл `flutter run` дарна. \n\n► Яагаад: Таны бичсэн Dart кодыг машин хэл рүү хөрвүүлж (Compile), APK/IPA файл болгон багцалж, USB-ээр холбосон утас руу хуулж суулгана. \n► Hot Reload: Апп ажиллаж байх үед кодоо өөрчлөөд хадгалахад дэлгэц тэр дороо өөрчлөгдөнө. Энэ бол Flutter-ийн гол давуу тал.' 
            }
        ],
        commands: [
            { cmd: 'flutter create hello_world', desc: 'Стандарт Flutter төслийн бүтэц үүсгэнэ. (Жич: Нэр нь жижиг үсгээр, доогуур зураастай байх ёстой)' },
            { cmd: 'flutter run', desc: 'Debug mode-оор аппыг ажиллуулна. Энэ үед JIT (Just In Time) компайлер ажиллаж Hot Reload хийх боломж олгоно.' }
        ],
        risks: [
           { problem: 'Infinite Loading / Gradle build гацах', solution: 'Анх удаа ажиллуулахад интернэтээс Gradle сангуудыг татдаг тул 5-10 минут хүлээх хэрэгтэй. Интернэт сайн байх шаардлагатай.' },
           { problem: 'Device not found', solution: 'Утас тань Developer Mode асаагаагүй эсвэл USB Debugging зөвшөөрөл өгөөгүй байна. Утасны Settings > Developer Options шалга.' }
        ],
        links: [
            { title: 'First Flutter App', url: 'https://docs.flutter.dev/get-started/codelab', icon: LinkIcon }
        ]
      }
    ]
  },

  // --- MODULE 2: FRONTEND UI ---
  'module-2': {
    title: 'Frontend Sprint (UI)',
    description: 'Хэрэглэгчийн интерфейс (UI) загварчлал. Pixel-perfect дизайн гаргах техникүүд.',
    iconName: 'smartphone',
    lessons: [
      {
        id: 'ui-1',
        title: 'Layout Logic: Row & Column',
        type: 'video',
        duration: '50 мин',
        videoUrl: 'https://www.youtube.com/embed/j-DNaZTd6w4?si=wqWkW0AepZtrE_Tx',
        description: 'Дэлгэцэн дээрх элементүүдийг байрлуулах математик логик. Constraints (Хязгаарлалт) хэрхэн ажилладаг вэ?',
        steps: [
            { 
              title: 'Constraints Down, Sizes Up', 
              content: 'Эцэг (Parent) widget хүүхдүүддээ "Чи энэ зайд л багтах ёстой" гэж тушаадаг. Хүүхдүүд нь "Би ийм хэмжээтэй болмоор байна" гэж хэлдэг. \n\n► Яагаад: Үүнийг ойлгохгүй бол "RenderFlex overflowed" алдаа байнга гарна. \n► Жишээ: Column дотор ListView хийхэд өндөр нь хязгааргүй болж алдаа гардаг. Үүнийг Expanded ашиглаж засдаг.' 
            },
            { 
              title: 'Row & Column Axis', 
              content: 'MainAxis (Гол тэнхлэг) ба CrossAxis (Хөндлөн тэнхлэг)-ийн ялгаа. \n► Row: Гол тэнхлэг нь хэвтээ. \n► Column: Гол тэнхлэг нь босоо. \n► Alignment: Center, Start, End, SpaceBetween гэх мэт байрлалуудыг туршиж үзнэ.' 
            }
        ],
        commands: [],
        risks: [
           { problem: 'Yellow/Black striped warning (Overflow)', solution: 'Элемент дэлгэцэнд багтахгүй байна гэсэн үг. Шийдэл: Тухайн элементийг `Expanded` эсвэл `Flexible` widget-ээр ороох, эсвэл `SingleChildScrollView`-д хийх.' }
        ],
        links: [
            { title: 'Flutter Layout Cheat Sheet', url: 'https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e', icon: Layout }
        ]
      },
      {
        id: 'ui-2',
        title: 'Images & Assets Management',
        type: 'doc',
        duration: '40 мин',
        videoUrl: 'https://www.youtube.com/embed/Hxh6nNHSUjo?si=M2nHzUFFPwV0hX4-',
        description: 'Зураг, шрифт, JSON файл зэрэг нэмэлт нөөцүүдийг (Assets) апп руу зөв оруулах.',
        steps: [
            { 
              title: 'pubspec.yaml бүртгэл', 
              content: '`flutter:` хэсгийн доор `assets:` гэж бичээд зургийн фолдерыг зааж өгнө. \n\n► Чухал: YAML файл нь "space" буюу зай авахад маш мэдрэмтгий. 2 зай авах ёстой газар 3 зай авбал алдаа заана. \n► iOS/Android: Flutter эдгээр зургийг автоматаар iOS болон Android-ын native asset систем рүү хөрвүүлж багцалдаг.' 
            },
            { 
              title: 'Resolution Aware Images', 
              content: '1x, 2x, 3x фолдерууд үүсгэх. \n\n► Яагаад: iPhone Pro Max шиг өндөр нягтралтай утаснуудад 3x зургийг, энгийн Android утсанд 1x зургийг харуулж, аппын хурдыг нэмэгдүүлэх стандарт.' 
            }
        ],
        commands: [
            { cmd: 'flutter pub get', desc: 'pubspec.yaml файлд өөрчлөлт оруулсны дараа заавал энэ командыг ажиллуулж шинэчлэлтийг бүртгүүлнэ.' }
        ],
        risks: [
           { problem: 'Asset not found exception', solution: '1. pubspec.yaml дээр бүртгэсэн зам зөв эсэх. 2. `flutter pub get` хийсэн эсэх. 3. Аппаа бүрэн зогсоогоод дахин `run` хийсэн эсэхийг шалга (Hot reload шинэ assets-ийг таньдаггүй).' }
        ],
        links: [
            { title: 'Adding Assets', url: 'https://docs.flutter.dev/ui/assets/assets-and-images', icon: ImageIcon }
        ]
      },
      {
        id: 'ui-3',
        title: 'Scrollable Lists',
        type: 'video',
        duration: '1 цаг',
        videoUrl: 'https://www.youtube.com/embed/dUhmWAz4C7Y?si=lrDbVkFoDWMLgAv9',
        description: 'Урт хэмжээний мэдээллийг жагсааж харуулах (ListView, GridView). Memory Optimization.',
        steps: [
            { title: 'ListView.builder', content: 'Олон тооны өгөгдлийг санах ойд ачаалал өгөхгүйгээр (Lazy Loading) харуулах. \n► Яагаад: 1000 ширхэг зургийг нэг дор уншвал утас гацна. `builder` нь зөвхөн дэлгэцэнд харагдаж буй 5 зургийг л уншдаг.' },
            { title: 'GridView', content: 'Зургийн цомог шиг баганаар мэдээллийг харуулах. `SliverGrid` ашиглан илүү нарийн загвар гаргах боломжтой.' }
        ],
        commands: [],
        risks: [
            { problem: 'Vertical viewport was given unbounded height', solution: 'ListView-г Column дотор шууд хийж болохгүй. ListView-д тодорхой өндөр хэрэгтэй. `Expanded` дотор хийж шийднэ.'}
        ],
        links: [
            { title: 'List Wheel Scroll View', url: 'https://api.flutter.dev/flutter/widgets/ListWheelScrollView-class.html', icon: MousePointer }
        ]
      }
    ]
  },

  // --- MODULE 3: BACKEND DEVELOPMENT (NODE.JS & POSTGRESQL) ---
  'module-3': {
    title: 'Backend (Node.js & SQL)',
    description: 'Node.js, Express фреймворк ашиглан REST API сервер хөгжүүлж, PostgreSQL баазтай холбох.',
    iconName: 'database',
    lessons: [
      {
        id: 'be-1',
        title: 'Node.js & Express Setup',
        type: 'video',
        duration: '55 мин',
        videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE?si=example_node',
        description: 'JavaScript хэлийг сервер дээр ажиллуулах (Node.js) ба веб сервер үүсгэх (Express.js) үндэс.',
        steps: [
            { 
              title: 'Node.js төсөл эхлүүлэх', 
              content: 'Шинэ фолдер үүсгээд `npm init` хийнэ. Энэ нь `package.json` файл үүсгэх бөгөөд энэ нь төслийн тохиргоо, сангуудыг хадгална. \n\n► Яагаад: NPM (Node Package Manager) нь дэлхийн хамгийн том сангийн цуглуулга. Бид эндээс Express-ийг татна.' 
            },
            { 
              title: 'Express Server бичих', 
              content: '`server.js` файл үүсгэж, 3000 порт дээр сонсдог (listen) энгийн сервер бичнэ. \n► Middleware: Серверт ирж буй хүсэлтийг дунд нь барьж авч боловсруулах (Жишээ нь: JSON parse хийх).' 
            },
            { 
              title: 'Nodemon ашиглах', 
              content: 'Код өөрчлөх болгонд серверийг унтрааж асаах төвөгтэй тул Nodemon суулгана. Энэ нь кодыг хадгалах үед серверийг автоматаар restart хийнэ.' 
            }
        ],
        commands: [
            { cmd: 'npm init -y', desc: 'Default тохиргоогоор package.json файл үүсгэх.' },
            { cmd: 'npm install express dotenv pg', desc: 'Express (Сервер), Dotenv (Нууцлал), PG (Өгөгдлийн бааз) сангуудыг суулгах.' },
            { cmd: 'npm install -D nodemon', desc: 'Хөгжүүлэлтэд хэрэгтэй Nodemon-ийг devDependency хэлбэрээр суулгах.' }
        ],
        risks: [
           { problem: 'Address already in use :::3000', solution: '3000 порт дээр өөр программ (эсвэл өмнөх сервер) ажиллаж байна. `server.js` дотор портоо 3001 болгож өөрчил эсвэл Task Manager-аас Node процессыг зогсоо.' }
        ],
        links: [
            { title: 'Node.js Download', url: 'https://nodejs.org/', icon: Server }
        ]
      },
      {
        id: 'be-2',
        title: 'PostgreSQL Connection',
        type: 'doc',
        duration: '45 мин',
        videoUrl: 'https://www.youtube.com/embed/_n-Ai30C1qs?si=OVwuGUWyVXnfc2o2',
        description: 'Node.js серверээ PostgreSQL өгөгдлийн баазтай холбож, түүхий SQL (Raw SQL) бичиж сурах.',
        steps: [
            { 
              title: 'Database Setup (PGAdmin)', 
              content: 'PGAdmin дээр "restaurant_db" нэртэй шинэ database үүсгэж, дотор нь "foods" хүснэгт үүсгэнэ (id, name, price, imageUrl). \n\n► SQL: `CREATE TABLE foods (...)` командыг ажиллуулна.' 
            },
            { 
              title: 'Connection Pool', 
              content: 'Node.js дээр `pg` санг ашиглан Pool тохируулна. \n► Яагаад: Pool нь олон хэрэглэгч зэрэг хандахад database-ийн холболтыг нээлттэй хадгалж, хурдан ажиллуулдаг. \n► Env Vars: Нууц үг, хэрэглэгчийн нэрийг `.env` файлд хадгална (Github руу оруулахгүй!).' 
            },
            { 
              title: 'Query бичих', 
              content: '`await pool.query(\'SELECT * FROM foods\')` гэж бичээд үр дүнг нь console дээр хэвлэж шалгана.' 
            }
        ],
        commands: [
            { cmd: 'npm install pg', desc: 'Node.js-ийг PostgreSQL-тэй холбох үндсэн драйвер.' },
            { cmd: 'node db.js', desc: 'Database холболтын скриптээ ажиллуулж шалгах.' }
        ],
        risks: [
           { problem: 'password authentication failed for user "postgres"', solution: '.env файл дахь DB_PASSWORD буруу байна. PostgreSQL суулгах үед хийсэн нууц үгээ сана.' },
           { problem: 'relation "foods" does not exist', solution: 'Та зөв database руугаа холбогдоогүй эсвэл хүснэгтээ үүсгээгүй байна. PGAdmin дээр шалга.' }
        ],
        links: [
            { title: 'node-postgres docs', url: 'https://node-postgres.com/', icon: Database }
        ]
      },
      {
        id: 'be-3',
        title: 'REST API & Flutter Integration',
        type: 'video',
        duration: '1 цаг 10 мин',
        videoUrl: 'https://www.youtube.com/embed/pKd0Rpw7O48?si=example_api',
        description: 'CRUD (Create, Read, Update, Delete) үйлдлүүдтэй API бичиж, Flutter аппликейшнаас дуудах.',
        steps: [
            { 
              title: 'GET & POST Routes', 
              content: 'Express дээр `app.get(\'/foods\')` (мэдээлэл авах) болон `app.post(\'/foods\')` (мэдээлэл нэмэх) endpoints бичнэ. \n► Response: Сервер хариугаа үргэлж JSON хэлбэрээр буцаах ёстой (`res.json(data)`).' 
            },
            { 
              title: 'Network Config (10.0.2.2)', 
              content: 'Android Emulator нь компьютерын `localhost`-ийг `10.0.2.2` гэдэг IP хаягаар таньдаг. \n► Flutter Code: `http.get(Uri.parse(\'http://10.0.2.2:3000/foods\'))` гэж хандана. iOS Simulator дээр бол `localhost` хэвээрээ.' 
            },
            { 
              title: 'CORS (Cross-Origin Resource Sharing)', 
              content: 'Хэрэв Web хувилбар хийж байгаа бол `cors` санг суулгаж идэвхжүүлэх хэрэгтэй. Mobile апп-д заавал шаардлагагүй ч суулгахад илүүдэхгүй.' 
            }
        ],
        commands: [
            { cmd: 'npm install cors', desc: 'Өөр домэйнээс (Flutter Web/React) хандах эрх нээх.' }
        ],
        risks: [
            { problem: 'SocketException: Connection refused (Flutter)', solution: '1. Серверээ ассан эсэхийг шалга. 2. Android дээр `10.0.2.2`, бодит утас дээр компьютерынхаа LAN IP (192.168.x.x)-г ашигла.' },
            { problem: 'Cleartext HTTP traffic not permitted', solution: 'Android 9+-аас хойш HTTP хориглогдсон. `AndroidManifest.xml` дотор `android:usesCleartextTraffic="true"` нэмэх эсвэл HTTPS ашиглах.' }
        ],
        links: [
            { title: 'Express Routing', url: 'https://expressjs.com/en/guide/routing.html', icon: Globe }
        ]
      }
    ]
  },

  // --- MODULE 4: FINAL POLISH & AI ---
  'module-4': {
    title: 'Final Polish & AI',
    description: 'Аппыг зах зээлд гаргахад бэлтгэх. AI integration ба Release build.',
    iconName: 'rocket',
    lessons: [
      {
        id: 'ai-1',
        title: 'Gemini AI Integration',
        type: 'video',
        duration: '1 цаг',
        videoUrl: 'https://www.youtube.com/embed/YcZTOp7P6bM?si=A47o8yVy142RA6es',
        description: 'Google Generative AI (Gemini)-г ашиглан ухаалаг чатбот хийх.',
        steps: [
            { 
              title: 'API Key Security', 
              content: 'Google AI Studio-оос түлхүүр авна. \n\n► Маш чухал: API Key-ээ хэзээ ч GitHub дээр шууд Public оруулж болохгүй. `.env` файл ашиглаж нууцлах эсвэл `flutter_dotenv` сан ашиглана. \n► Android/iOS: Интернэт эрх нээгдсэн эсэхийг дахин шалга.' 
            },
            { 
              title: 'Streaming Response', 
              content: 'Хариултыг бүтэн иртэл хүлээх биш, үг үгээр нь урсгаж харуулах (StreamBuilder). \n► Яагаад: Хэрэглэгчид хүлээлгийн мэдрэмж төрүүлэхгүйн тулд хариуг шууд харуулж эхлэх нь UX-д маш чухал.' 
            }
        ],
        commands: [
            { cmd: 'flutter pub add google_generative_ai', desc: 'Google-ийн албан ёсны Dart SDK-г суулгана.' }
        ],
        risks: [
           { problem: 'API Key Quota Exceeded', solution: 'Үнэгүй хувилбар хязгаартай тул хэт олон хүсэлт явуулахгүй байх. Billing account холбох хэрэгтэй.' },
           { problem: '403 Forbidden', solution: 'API Key буруу эсвэл идэвхгүй байна. Google Cloud Console-оо шалгана уу.' }
        ],
        links: [
            { title: 'Gemini Dart SDK', url: 'https://ai.google.dev/tutorials/dart_quickstart', icon: Cpu }
        ]
      },
      {
        id: 'fp-1',
        title: 'App Icon & Splash Screen',
        type: 'doc',
        duration: '30 мин',
        videoUrl: 'https://www.youtube.com/embed/cEnMIfl8x88?si=4p5tSF0UElS-3YQ5',
        description: 'Аппын нүүр царай болсон лого болон эхлэх дэлгэцийг солих.',
        steps: [
            { title: 'Launcher Icon', content: 'flutter_launcher_icons багцыг ашиглан iOS болон Android-ын бүх хэмжээст логог автоматаар үүсгэх. \n► Android/iOS: Утасны загвар бүрд өөр өөр хэмжээтэй icon хэрэг болдог. Үүнийг гараар хийх нь маш их цаг авна.' },
            { title: 'Native Splash', content: 'flutter_native_splash ашиглан апп ачаалж байх үеийн дэлгэцийг загварчлах. \n► Branding: Хэрэглэгч апп руу ороход хамгийн түрүүнд хардаг дэлгэц тул брэндийн өнгийг зөв сонгох хэрэгтэй.' }
        ],
        commands: [
            { cmd: 'flutter pub run flutter_launcher_icons', desc: 'Лого үүсгэх команд (yaml файлд тохиргоо хийсний дараа ажиллуулна)' }
        ],
        risks: [
            { problem: 'Icon not changing', solution: 'Заримдаа утас хуучин icon-оо cache хийсэн байдаг. Аппаа бүрэн устгаад дахин суулгах хэрэгтэй.'}
        ],
        links: [
            { title: 'Icon Generator', url: 'https://pub.dev/packages/flutter_launcher_icons', icon: Palette }
        ]
      },
      {
        id: 'fp-2',
        title: 'Build & Release (PlayStore/AppStore)',
        type: 'video',
        duration: '40 мин',
        videoUrl: 'https://www.youtube.com/embed/I9ceqw5Ny-4?si=v2sv9TsFlrHBJOE1',
        description: 'Development build болон Release build-ийн ялгаа. Гарын үсэг зурах (Signing).',
        steps: [
            { 
              title: 'App ID & Package Name', 
              content: '`com.example.app` нэрийг өөрийн домэйнээр солих (Жишээ: `mn.company.superapp`). \n\n► Яагаад: Энэ ID дэлхий даяар цор ганц байх ёстой. Нэгэнт Store-д орсон бол үүнийг дараа нь сольж болдоггүй тул маш хянуур хандах хэрэгтэй.' 
            },
            { 
              title: 'Keystore (Android) & Certificates (iOS)', 
              content: 'Аппыг дижитал гарын үсгээр баталгаажуулах. \n► Эрсдэл: `upload-keystore.jks` файлыг алга болговол та дахиж хэзээ ч тэр аппынхаа update-ийг хийж чадахгүй. Энэ файлыг имэйл, cloud, hard disk гээд олон газар хадгалах хэрэгтэй.' 
            },
            { 
              title: 'Build Process', 
              content: 'Кодыг багасгаж (Shrink), хурдыг нэмэгдүүлэх (Obfuscate) тохиргоотойгоор build хийнэ. Debug код шиг удаан ажиллахгүй.' 
            }
        ],
        commands: [
            { cmd: 'flutter build appbundle', desc: 'Android: Play Store-д оруулахад зориулагдсан .aab файл үүсгэнэ (APK-аас илүү дэвшилтэт).' },
            { cmd: 'flutter build ipa', desc: 'iOS: App Store Connect руу илгээх .ipa архив файл үүсгэнэ (Mac компьютер шаардлагатай).' }
        ],
        risks: [
           { problem: 'Build failed with an exception', solution: 'Ихэвчлэн хуучин build файлуудаас болдог. `flutter clean` хийгээд дахин оролд.' },
           { problem: 'App ID conflict', solution: 'Play Store дээр ийм нэртэй апп аль хэдийн бүртгэгдсэн байна. `build.gradle` дотор applicationId-г өөрчил.' }
        ],
        links: [
            { title: 'Android Deployment', url: 'https://docs.flutter.dev/deployment/android', icon: Rocket }
        ]
      }
    ]
  }
};

export default function ModuleDetailPage() {
  const params = useParams();
  const moduleId = params.id as string;
  const moduleData = modulesData[moduleId as keyof typeof modulesData];
  const [activeLessonId, setActiveLessonId] = useState(moduleData ? moduleData.lessons[0].id : null);
  const [openStepIndex, setOpenStepIndex] = useState<number | null>(null);

  // --- HANDLE: Module Not Found ---
  if (!moduleData) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate-500 animate-fadeIn">
        <Server size={48} className="mb-4 opacity-50" />
        <h2 className="text-xl font-bold">Бүлэг олдсонгүй</h2>
        <p className="text-sm mt-2">URL хаяг буруу байна (Жишээ нь: /modules/module-3)</p>
        <Link href="/roadmap" className="mt-6 px-6 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-700 transition-colors">
            Төлөвлөгөө рүү буцах
        </Link>
    </div>
  );

  const activeLesson = moduleData.lessons.find(l => l.id === activeLessonId) || moduleData.lessons[0];

  const handleLessonChange = (id: string) => {
      setActiveLessonId(id);
      setOpenStepIndex(null);
  }

  const toggleStep = (index: number) => {
      setOpenStepIndex(openStepIndex === index ? null : index);
  }

  // Helper to get correct icon for lesson type/content
  const getLessonIcon = (type: string) => {
      if (type === 'video') return <PlayCircle size={16} className="md:w-[18px] md:h-[18px]" />;
      if (type === 'doc') return <FileText size={16} className="md:w-[18px] md:h-[18px]" />;
      return <Zap size={16} className="md:w-[18px] md:h-[18px]" />;
  }

  return (
    <div className="animate-fadeIn pb-24">
      {/* --- HEADER: Breadcrumbs & Title --- */}
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <Link href="/roadmap" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 rounded-full flex items-center justify-center hover:bg-white/60 transition-colors border border-white/50 shrink-0">
            <ChevronLeft size={18} className="md:w-5 md:h-5 text-slate-700" />
        </Link>
        <div className="overflow-hidden">
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5 truncate">
                <span className="shrink-0">{moduleData.title}</span>
                <ChevronRight size={10} className="md:w-3 md:h-3" />
                <span className="text-slate-800 truncate">{activeLesson.title}</span>
            </div>
            <h1 className="text-lg md:text-2xl font-bold text-slate-800 truncate">Сургалтын агуулга</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start">
        
        {/* --- LEFT COLUMN: Content --- */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
            
            {/* 1. Video Player Area */}
            <div className="relative aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-slate-700/50 group z-10">
                {activeLesson.videoUrl ? (
                    <iframe className="w-full h-full" src={activeLesson.videoUrl} title={activeLesson.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400">
                        <FileText size={48} className="mb-4 opacity-50" />
                        <p className="text-sm">Видео хичээл байхгүй.</p>
                        <span className="text-xs text-slate-600 mt-2">Доорх зааврыг дагана уу.</span>
                    </div>
                )}
            </div>

            {/* 2. Lesson Details Card */}
            <GlassCard>
                <div className="flex items-start md:items-center gap-3 mb-4 md:mb-6 border-b border-slate-300/30 pb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 text-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                        <Terminal size={16} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                        <h2 className="text-base md:text-xl font-bold text-slate-800 leading-tight">{activeLesson.title}</h2>
                        <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Зааварчилгаа</span>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <p className="text-slate-600 leading-relaxed text-xs md:text-base">{activeLesson.description}</p>
                    
                    {/* Steps Accordion */}
                    {activeLesson.steps && (
                        <div className="space-y-2 md:space-y-3">
                            <h3 className="font-bold text-slate-800 text-xs md:text-sm uppercase ml-1 mb-1 md:mb-2">Алхамууд (Дэлгэрэнгүй):</h3>
                            {activeLesson.steps.map((step, idx) => {
                                const isOpen = openStepIndex === idx;
                                return (
                                    <div key={idx} className={`bg-white/40 border transition-all duration-300 rounded-xl overflow-hidden ${isOpen ? 'border-blue-300 shadow-md bg-white/60' : 'border-white/50 hover:bg-white/50'}`}>
                                        <button onClick={() => toggleStep(idx)} className="w-full flex items-center justify-between p-3 md:p-4 text-left">
                                            <div className="flex items-start md:items-center gap-3">
                                                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold shrink-0 mt-0.5 md:mt-0 transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>{idx + 1}</div>
                                                <span className={`font-bold text-xs md:text-sm leading-tight ${isOpen ? 'text-blue-800' : 'text-slate-700'}`}>{step.title}</span>
                                            </div>
                                            <ChevronDown size={16} className={`text-slate-500 shrink-0 transition-transform duration-300 md:w-[18px] md:h-[18px] ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                                        </button>
                                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="p-3 md:p-4 pt-0 pl-[2.75rem] md:pl-[3.25rem] text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 mt-1 whitespace-pre-wrap">
                                                {step.content}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Terminal Commands */}
                    {activeLesson.commands && activeLesson.commands.length > 0 && (
                        <div className="space-y-2 pt-4 border-t border-slate-300/30">
                            <h3 className="font-bold text-slate-800 text-xs md:text-sm uppercase ml-1">Terminal Commands (Тайлбартай):</h3>
                            <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 shadow-inner">
                                <div className="bg-[#0F172A] px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 border-b border-slate-700">
                                    <div className="flex gap-1.5"><div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500"></div><div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500"></div><div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500"></div></div>
                                    <span className="text-[10px] text-slate-400 font-mono ml-2">bash</span>
                                </div>
                                <div className="p-3 md:p-4 font-mono text-xs md:text-sm space-y-4">
                                    {activeLesson.commands.map((cmd, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex gap-2 text-slate-300 break-all items-center">
                                                <span className="text-green-400 select-none shrink-0">$</span>
                                                <span className="text-white font-bold">{cmd.cmd}</span>
                                            </div>
                                            <div className="text-slate-400 text-[11px] md:text-xs mt-1.5 pl-4 border-l-2 border-slate-600 opacity-80 group-hover:opacity-100 transition-opacity">
                                                {cmd.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* NEW SECTION: Risks & Troubleshooting */}
                    {activeLesson.risks && activeLesson.risks.length > 0 && (
                        <div className="space-y-2 pt-4 border-t border-slate-300/30">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle size={16} className="text-orange-500" />
                                <h3 className="font-bold text-slate-800 text-xs md:text-sm uppercase">Эрсдэл & Алдаа засах (Troubleshooting):</h3>
                            </div>
                            <div className="grid gap-3">
                                {activeLesson.risks.map((risk, idx) => (
                                    <div key={idx} className="bg-orange-50/80 border border-orange-200 rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 items-start">
                                        <div className="mt-1 text-orange-600 shrink-0">
                                            <ShieldAlert size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-xs md:text-sm flex items-center gap-2">
                                                <span className="text-red-500 font-mono text-[10px] bg-red-100 px-1.5 py-0.5 rounded uppercase">Error</span>
                                                {risk.problem}
                                            </h4>
                                            <p className="text-slate-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                                                <span className="font-bold text-slate-700">Шийдэл:</span> {risk.solution}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </GlassCard>
        </div>

        {/* --- RIGHT COLUMN: Sidebar --- */}
        <div className="space-y-4 md:space-y-6 lg:sticky lg:top-24">
            
            {/* Lesson List */}
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm overflow-hidden">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                    <h3 className="font-bold text-slate-800 text-sm md:text-base">Хичээлүүд</h3>
                    <span className="text-[10px] md:text-xs bg-slate-800 text-white px-2 py-1 rounded-md font-bold">
                        {moduleData.lessons.findIndex(l => l.id === activeLessonId) + 1}/{moduleData.lessons.length}
                    </span>
                </div>
                <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar pr-1 md:pr-2">
                    {moduleData.lessons.map((lesson) => {
                        const isActive = lesson.id === activeLessonId;
                        return (
                            <button key={lesson.id} onClick={() => handleLessonChange(lesson.id)} className={`w-full text-left p-2.5 md:p-3 rounded-xl flex items-start gap-3 transition-all duration-200 border ${isActive ? 'bg-white shadow-md border-white/60 translate-x-1' : 'hover:bg-white/40 border-transparent opacity-70 hover:opacity-100'}`}>
                                <div className={`mt-0.5 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-500'}`}>
                                    {getLessonIcon(lesson.type)}
                                </div>
                                <div>
                                    <p className={`text-xs md:text-sm font-bold leading-tight ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>{lesson.title}</p>
                                    <span className="text-[10px] text-slate-500 font-bold mt-1 block">{lesson.duration}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Extra Resources */}
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-sm">
                <h4 className="text-[10px] md:text-xs font-bold text-slate-500 uppercase mb-3 md:mb-4 tracking-wider">Нэмэлт материал</h4>
                {activeLesson.links && activeLesson.links.length > 0 ? (
                    <div className="space-y-2 md:space-y-3">
                        {activeLesson.links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-white/40 hover:bg-white/70 border border-white/30 hover:border-white/60 transition-all group">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-colors shadow-sm shrink-0"><link.icon size={14} className="md:w-4 md:h-4" /></div>
                                <span className="text-xs md:text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-tight">{link.title}</span>
                            </a>
                        ))}
                    </div>
                ) : <p className="text-xs md:text-sm text-slate-400 italic">Энэ хичээлд нэмэлт материал байхгүй.</p>}
            </div>
        </div>
      </div>
    </div>
  );
}