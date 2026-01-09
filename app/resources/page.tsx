'use client';
import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { 
  Terminal, AlertTriangle, Book, Copy, Check, 
  ChevronRight, Database, Palette, Smartphone, LucideIcon 
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
type CategoryId = 'flutter' | 'backend' | 'errors' | 'assets';

interface ContentItem {
  title: string;
  desc: string;
  code?: string;
  solution?: string;
}

// ЗАССАН ХЭСЭГ: icon: any биш icon: LucideIcon болгов
interface Category {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { id: 'flutter', label: 'Flutter Snippets', icon: Smartphone },
  { id: 'backend', label: 'Backend Setup', icon: Database },
  { id: 'errors', label: 'Common Errors', icon: AlertTriangle },
  { id: 'assets', label: 'Brand Assets', icon: Palette },
];

const contentData: Record<CategoryId, ContentItem[]> = {
  flutter: [
    {
      title: "API Call with Dio (Singleton)",
      desc: "API дуудах үед Dio package ашиглах бэлэн Singleton загвар.",
      code: `class ApiClient {
  static final ApiClient _instance = ApiClient._internal();
  final Dio _dio = Dio();

  factory ApiClient() {
    return _instance;
  }

  ApiClient._internal() {
    _dio.options.baseUrl = "https://api.example.com";
    _dio.options.connectTimeout = const Duration(seconds: 5);
  }

  Future<Response> get(String path) async {
    try {
      return await _dio.get(path);
    } catch (e) {
      throw e;
    }
  }
}`
    },
    {
      title: "Custom Button Widget",
      desc: "Дахин ашиглах боломжтой товчлуурын компонент.",
      code: `class CustomButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;

  const CustomButton({required this.label, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.blue,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        padding: EdgeInsets.symmetric(vertical: 16),
      ),
      child: Text(label, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
    );
  }
}`
    }
  ],
  backend: [
    {
        title: "Express Basic Server",
        desc: "Node.js Express серверийн анхан шатны тохиргоо.",
        code: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`
    }
  ],
  errors: [
    {
        title: "RenderFlex overflowed by ... pixels",
        desc: "Энэ алдаа нь багана (Column) эсвэл мөр (Row) доторх контент багтахгүй үед гардаг.",
        solution: "Шийдэл: Тухайн Widget-ээ Expanded() эсвэл Flexible() дотор хийх, эсвэл SingleChildScrollView ашиглах."
    },
    {
        title: "setState() called after dispose()",
        desc: "Хуудас хаагдсаны дараа async функц ажиллаж дуусаад UI шинэчлэх гээд байдаг.",
        solution: "Шийдэл: if (mounted) { setState(() {}); } гэж шалгаж байж дуудах."
    }
  ],
  assets: []
};

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<CategoryId>('flutter');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 bg-slate-50/50">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* SIDEBAR */}
          <div className="md:col-span-1 space-y-2">
             <h2 className="text-xl font-black text-slate-800 mb-4 px-2">Knowledge Base</h2>
             {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        activeTab === cat.id 
                        ? 'bg-slate-800 text-white shadow-lg' 
                        : 'bg-white text-slate-600 hover:bg-white/60 border border-transparent hover:border-white'
                    }`}
                >
                    <cat.icon size={16} />
                    {cat.label}
                    {activeTab === cat.id && <ChevronRight size={14} className="ml-auto" />}
                </button>
             ))}
          </div>

          {/* CONTENT AREA */}
          <div className="md:col-span-3 space-y-6">
             {contentData[activeTab]?.length > 0 ? (
                contentData[activeTab].map((item, idx) => (
                   <GlassCard key={idx} className="bg-white/70 border-white/60">
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-1">
                             {activeTab === 'errors' ? <AlertTriangle size={20} className="text-red-500" /> : <Terminal size={20} />}
                         </div>
                         <div className="flex-1">
                             <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                             <p className="text-sm text-slate-600 mt-1 mb-4">{item.desc}</p>
                             
                             {item.code && (
                                 <div className="relative group">
                                     <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                         <button 
                                            onClick={() => handleCopy(item.code!, idx.toString())}
                                            className="p-1.5 bg-slate-700 text-white rounded-md hover:bg-slate-900 transition-colors"
                                         >
                                             {copiedId === idx.toString() ? <Check size={14} /> : <Copy size={14} />}
                                         </button>
                                     </div>
                                     <pre className="bg-[#1e293b] text-slate-300 p-4 rounded-xl text-xs font-mono overflow-x-auto">
                                         <code>{item.code}</code>
                                     </pre>
                                 </div>
                             )}

                             {item.solution && (
                                 <div className="bg-green-50 border border-green-100 p-3 rounded-lg text-sm text-green-800 font-medium flex items-start gap-2">
                                     <Check size={16} className="mt-0.5 shrink-0" />
                                     {item.solution}
                                 </div>
                             )}
                         </div>
                      </div>
                   </GlassCard>
                ))
             ) : (
                <div className="text-center py-20 text-slate-400">
                    <Book size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Энэ хэсэгт одоогоор мэдээлэл ороогүй байна.</p>
                </div>
             )}
          </div>

       </div>
    </div>
  );
}