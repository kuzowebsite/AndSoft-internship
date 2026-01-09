import './globals.css';
import { Navbar } from './components/Navbar';

export const metadata = {
  title: 'Flutter Internship Guide',
  description: '14 хоногийн эрчимжүүлсэн сургалт',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body className="font-sans text-slate-800 antialiased selection:bg-white/40">
        <div className="min-h-screen bg-gradient-to-br from-[#9ca3af] via-[#bdc3c7] to-[#9ca3af] relative overflow-x-hidden">
          
          {/* Global Ambient Background Blobs */}
          <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-overlay -z-10"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-overlay -z-10"></div>
          
          <Navbar />
          
          <main className="pt-32 pb-40 max-w-6xl mx-auto px-4 md:px-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}