'use client';
import React, { useRef, useState, useEffect } from 'react';
import { 
  Eraser, Trash2, Download, Pen, 
  StickyNote, Smartphone, MousePointer2
} from 'lucide-react';

export default function WhiteboardPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Settings
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(4); 
  const [tool, setTool] = useState<'pen' | 'eraser' | 'sticky' | 'phone'>('pen');

  // Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx?.drawImage(canvas, 0, 0);

        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.drawImage(tempCanvas, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = tool === 'eraser' ? 30 : lineWidth;
  }, [color, lineWidth, tool]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    let clientX, clientY;
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    return {
        offsetX: clientX - rect.left,
        offsetY: clientY - rect.top,
        clientX,
        clientY
    };
  };

  // --- STAMP FUNCTIONS (NEW) ---
  const drawStickyNote = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      ctx.fillStyle = '#fef3c7'; // Yellow
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2;
      ctx.fillRect(x - 50, y - 50, 100, 100);
      ctx.strokeRect(x - 50, y - 50, 100, 100);
      
      // Lines
      ctx.beginPath();
      ctx.strokeStyle = '#fcd34d';
      ctx.moveTo(x - 40, y - 20); ctx.lineTo(x + 40, y - 20);
      ctx.moveTo(x - 40, y); ctx.lineTo(x + 40, y);
      ctx.moveTo(x - 40, y + 20); ctx.lineTo(x + 40, y + 20);
      ctx.stroke();

      // Reset context
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
  };

  const drawPhoneTemplate = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      // Phone Body
      ctx.strokeRect(x - 40, y - 80, 80, 160);
      // Notch
      ctx.beginPath();
      ctx.moveTo(x - 15, y - 80);
      ctx.lineTo(x + 15, y - 80);
      ctx.stroke();
      // Home Bar
      ctx.beginPath();
      ctx.moveTo(x - 20, y + 70);
      ctx.lineTo(x + 20, y + 70);
      ctx.stroke();

      // Reset
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e, canvas);

    // CHECK TOOL
    if (tool === 'sticky') {
        drawStickyNote(ctx, offsetX, offsetY);
        setTool('pen'); // Switch back to pen
        return;
    }
    if (tool === 'phone') {
        drawPhoneTemplate(ctx, offsetX, offsetY);
        setTool('pen');
        return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let clientX, clientY;
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    setCursorPos({ x: clientX, y: clientY });

    if (!isDrawing) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadBoard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (tempCtx) {
        tempCtx.fillStyle = '#ffffff';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.drawImage(canvas, 0, 0);
        const link = document.createElement('a');
        link.download = 'andsoft-whiteboard.png';
        link.href = tempCanvas.toDataURL();
        link.click();
    }
  };

  return (
    <div className="fixed inset-0 pt-[60px] pb-20 bg-slate-50 overflow-hidden flex flex-col items-center select-none">
        
        {/* --- CUSTOM CURSOR --- */}
        {showCursor && (
            <div 
                className="pointer-events-none fixed rounded-full z-[100] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-slate-500"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    width: (tool === 'pen' || tool === 'eraser') ? (tool === 'eraser' ? 30 : lineWidth) : 40,
                    height: (tool === 'pen' || tool === 'eraser') ? (tool === 'eraser' ? 30 : lineWidth) : 40,
                    backgroundColor: (tool === 'pen' || tool === 'eraser') ? (tool === 'eraser' ? '#ffffff' : color) : 'transparent',
                    border: (tool === 'eraser' || tool === 'sticky' || tool === 'phone') ? '1px solid #000' : 'none',
                    borderRadius: (tool === 'sticky' || tool === 'phone') ? '4px' : '50%'
                }}
            >
                {tool === 'sticky' && <StickyNote size={20} />}
                {tool === 'phone' && <Smartphone size={20} />}
            </div>
        )}

        {/* --- TOOLBAR --- */}
        <div className="absolute top-[80px] z-30 animate-slideDown">
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl p-2 flex items-center gap-2">
                
                {/* Colors */}
                <div className="flex gap-1.5 pr-3 border-r border-slate-200">
                    {[
                        { c: '#000000', label: 'Хар' },
                        { c: '#ef4444', label: 'Улаан' },
                        { c: '#3b82f6', label: 'Цэнхэр' },
                    ].map((btn) => (
                        <button
                            key={btn.c}
                            onClick={() => { setColor(btn.c); setTool('pen'); }}
                            className={`w-5 h-5 rounded-full border ${color === btn.c && tool === 'pen' ? 'ring-2 ring-slate-400 border-white' : 'border-transparent'}`}
                            style={{ backgroundColor: btn.c }}
                        />
                    ))}
                </div>

                {/* Tools */}
                <div className="flex gap-1">
                    <button onClick={() => setTool('pen')} className={`p-2 rounded-lg ${tool === 'pen' ? 'bg-slate-200' : 'hover:bg-slate-100'}`}><Pen size={18} /></button>
                    <button onClick={() => setTool('eraser')} className={`p-2 rounded-lg ${tool === 'eraser' ? 'bg-slate-200' : 'hover:bg-slate-100'}`}><Eraser size={18} /></button>
                    
                    {/* NEW: Templates */}
                    <button onClick={() => setTool('sticky')} className={`p-2 rounded-lg ${tool === 'sticky' ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-slate-100'}`} title="Sticky Note"><StickyNote size={18} /></button>
                    <button onClick={() => setTool('phone')} className={`p-2 rounded-lg ${tool === 'phone' ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`} title="Phone Frame"><Smartphone size={18} /></button>

                    <div className="w-px h-8 bg-slate-200 mx-1"></div>
                    <button onClick={clearBoard} className="p-2 rounded-lg text-red-500 hover:bg-red-50"><Trash2 size={18} /></button>
                    <button onClick={downloadBoard} className="p-2 rounded-lg text-blue-600 hover:bg-blue-50"><Download size={18} /></button>
                </div>
            </div>
        </div>

        {/* --- CANVAS --- */}
        <div 
            ref={containerRef} 
            className="w-full h-full relative bg-white shadow-inner cursor-none touch-none"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => { setShowCursor(false); setIsDrawing(false); }}
            onMouseMove={draw}
        >
            <div className="absolute inset-0 pointer-events-none opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onTouchStart={startDrawing}
                onTouchEnd={stopDrawing}
                className="block w-full h-full relative z-10"
            />
        </div>
    </div>
  );
}