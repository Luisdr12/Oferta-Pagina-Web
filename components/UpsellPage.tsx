
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Gift, 
  PieChart, 
  Clock, 
  Star, 
  ChevronRight,
  Zap,
  BookOpen,
  Award,
  Users
} from 'lucide-react';

interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellPage: React.FC<Props> = ({ onAccept, onDecline }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-b from-[#F0FFF4] to-white min-h-screen pb-24 md:pb-12">
      {/* 1. Contexto Inmediato */}
      <div className="max-w-[800px] mx-auto pt-8 px-5 text-center">
        <span className="bg-[#F39C12] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
          Oferta Especial Post-Compra
        </span>
        <h2 className="text-[#2ECC71] font-montserrat font-bold text-xl md:text-2xl leading-tight">
          ¡ESPERA! TU PEDIDO ESTÁ CASI LISTO... <br className="hidden md:block"/>
          <span className="text-gray-800">No cierres esta ventana o perderás este regalo.</span>
        </h2>
      </div>

      <main className="max-w-[800px] mx-auto px-5 mt-10 space-y-12">
        {/* 2. Promesa Upgrade */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-[42px] font-montserrat font-extrabold text-gray-900 leading-[1.1]">
            Accede al <span className="text-[#2ECC71]">Kit Maestro de Repostería </span> y Acelera tus Resultados
          </h1>
          <div className="relative inline-block mt-4">
             <img 
              src="https://picsum.photos/seed/kitmaestro/800/450" 
              alt="Kit Maestro Mockup" 
              className="rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-montserrat font-bold px-4 py-3 rounded-full shadow-lg transform rotate-12 animate-pulse text-sm md:text-base">
              EXCLUSIVO <br/> 60 SEGUNDOS
            </div>
          </div>
        </section>

        {/* 3. Qué Incluye */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
            <Gift className="w-12 h-12 text-[#2ECC71] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-montserrat font-bold text-lg mb-1">Recetario de Rellenos</h3>
            <p className="text-[#F39C12] font-bold line-through text-sm">Valor: $47</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
            <PieChart className="w-12 h-12 text-[#2ECC71] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-montserrat font-bold text-lg mb-1">Calculadora de Costos</h3>
            <p className="text-[#F39C12] font-bold line-through text-sm">Valor: $97</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
            <Award className="w-12 h-12 text-[#2ECC71] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-montserrat font-bold text-lg mb-1">Masterclass en Video</h3>
            <p className="text-[#F39C12] font-bold line-through text-sm">Valor: $197</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
            <Users className="w-12 h-12 text-[#2ECC71] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-montserrat font-bold text-lg mb-1">Comunidad VIP</h3>
            <p className="text-[#F39C12] font-bold line-through text-sm">Valor: $67</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
            <BookOpen className="w-12 h-12 text-[#2ECC71] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-montserrat font-bold text-lg mb-1">Guía de Sustitutos</h3>
            <p className="text-[#F39C12] font-bold line-through text-sm">Valor: $27</p>
          </div>
        </section>

        {/* 4. Prueba Rápida */}
        <section className="bg-[#F4A5B9] bg-opacity-10 p-8 rounded-3xl max-w-[600px] mx-auto text-center border-2 border-dashed border-[#F4A5B9]">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#F39C12] text-[#F39C12]" />)}
          </div>
          <p className="italic text-gray-700 text-lg mb-6">
            "Este kit cambió por completo mi negocio. Las calculadoras de costos me ayudaron a ganar un 40% más por cada torta que vendo."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img src="https://picsum.photos/seed/maria/60/60" className="rounded-full w-12 h-12 border-2 border-white" alt="Testimonial" />
            <div className="text-left">
              <p className="font-bold text-gray-900">María Rodríguez</p>
              <p className="text-sm text-gray-500">España • Rating 4.9/5</p>
            </div>
          </div>
        </section>

        {/* 5. Anclaje Precio */}
        <section className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-[#2ECC71] text-center transform hover:scale-[1.02] transition-transform">
          <p className="text-gray-500 font-bold mb-1 uppercase tracking-widest text-sm">Valor Total: $435</p>
          <p className="text-gray-400 line-through text-xl font-bold mb-4">Precio Normal: $97</p>
          <div className="flex flex-col items-center">
            <span className="bg-[#F39C12] text-white px-4 py-1 rounded-full font-bold text-xs mb-2">72% DESCUENTO</span>
            <p className="text-6xl md:text-[80px] font-montserrat font-black text-gray-900 leading-none">
              <span className="text-3xl align-top mr-1">$</span>27
            </p>
            <p className="text-[#2ECC71] font-bold mt-2">PAGO ÚNICO • ACCESO DE POR VIDA</p>
          </div>
        </section>

        {/* 6. Garantía */}
        <section className="bg-[#F0FFF4] border border-[#2ECC71] py-4 px-6 rounded-full flex items-center justify-center gap-3">
          <ShieldCheck className="text-[#2ECC71] w-6 h-6" />
          <p className="font-semibold text-[#27AE60] text-sm md:text-base">
            Garantía de Satisfacción de 7 Días - Riesgo Cero
          </p>
        </section>

        {/* 7. CTAs Dobles */}
        <section className="flex flex-col items-center gap-6">
          <button 
            onClick={onAccept}
            className="w-full max-w-[450px] bg-[#2ECC71] hover:bg-[#27AE60] text-white font-montserrat font-bold text-lg md:text-xl py-6 px-8 rounded-2xl shadow-[0_10px_20px_rgba(46,204,113,0.3)] transform hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group"
          >
            SÍ, QUIERO EL KIT MAESTRO POR $27
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onDecline}
            className="text-[#7F8C8D] font-medium text-sm underline hover:text-gray-900 transition-colors"
          >
            No gracias, solo el ebook básico
          </button>
        </section>
      </main>

      {/* 8. Timer Sticky */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 text-white py-4 px-6 flex items-center justify-between md:max-w-[400px] md:rounded-2xl md:bottom-8 md:right-8 md:left-auto md:shadow-2xl z-50">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-[#F39C12]" />
          <div>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold leading-none">Oferta expira en:</p>
            <p className="text-xl md:text-2xl font-montserrat font-black text-white">{formatTime(timeLeft)}</p>
          </div>
        </div>
        <Zap className="w-8 h-8 text-[#F39C12] animate-pulse" />
      </div>
    </div>
  );
};

export default UpsellPage;
