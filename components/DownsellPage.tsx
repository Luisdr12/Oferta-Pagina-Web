
import React from 'react';
import { 
  Heart, 
  Book, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ChevronRight,
  Star
} from 'lucide-react';

interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

const DownsellPage: React.FC<Props> = ({ onAccept, onDecline }) => {
  return (
    <div className="bg-[#FEFCFB] min-h-screen pb-16">
      <main className="max-w-[700px] mx-auto px-6 space-y-16">
        
        {/* 1. Reconocimiento */}
        <section className="pt-16 text-center space-y-4">
          <div className="w-16 h-16 bg-[#F8E8ED] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-[#F4A5B9] w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-[36px] font-montserrat font-semibold text-gray-800 leading-tight">
            Lo entiendo perfectamente... <br/>
            <span className="text-[#52C27B]">A veces menos es más.</span>
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-[500px] mx-auto">
            Quizás el kit completo es demasiado por ahora. No quiero que te vayas sin las herramientas esenciales para empezar.
          </p>
        </section>

        {/* 2. Oferta Reducida */}
        <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FDF8F5] text-[#F39C12] px-4 py-1 rounded-full text-xs font-bold">
            <Book className="w-3 h-3" />
            VERSIÓN ESENCIAL
          </div>
          <h2 className="text-2xl font-montserrat font-bold">La "Mini Biblia" de Rellenos</h2>
          <img 
            src="https://picsum.photos/seed/minibook/600/400" 
            alt="Mini Kit" 
            className="rounded-2xl max-w-[300px] mx-auto shadow-md"
          />
          <p className="text-gray-700 leading-relaxed">
            He extraído los <span className="font-bold">25 rellenos más exitosos</span> de mi colección privada para que puedas empezar a transformar tus tortas hoy mismo por una fracción del precio.
          </p>
        </section>

        {/* 3. Qué Incluye */}
        <section className="space-y-6">
          <div className="space-y-4">
            {[
              "Top 25 Recetas de Rellenos Saludables",
              "Guía Rápida de Conservación",
              "Sustitutos de Azúcar Naturales",
              "Acceso Vitalicio a las Actualizaciones"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-50">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#52C27B]" />
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Prueba Social */}
        <section className="bg-[#F8E8ED] bg-opacity-50 p-6 rounded-2xl">
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F39C12] text-[#F39C12]" />)}
          </div>
          <p className="text-gray-700 italic">
            "La versión esencial fue justo lo que necesitaba para perder el miedo a hornear saludable. ¡Las recetas son increíbles!"
          </p>
          <p className="mt-4 font-bold text-gray-900 text-sm">— Laura S., Cliente Satisfecha</p>
        </section>

        {/* 5. Comparación */}
        <section className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 text-sm font-bold text-gray-400 uppercase">❌ No incluye</th>
                <th className="p-4 text-sm font-bold text-[#52C27B] uppercase">✅ SÍ incluye</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">Video Masterclasses</td>
                <td className="p-4 font-semibold text-gray-800">Recetario PDF HD</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/30">
                <td className="p-4 text-gray-500">Calculadora Automática</td>
                <td className="p-4 font-semibold text-gray-800">25 Rellenos Premium</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">Comunidad VIP</td>
                <td className="p-4 font-semibold text-gray-800">Soporte por Email</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 6. Garantía */}
        <section className="flex items-center justify-center gap-3 text-gray-500 text-sm">
          <ShieldCheck className="w-5 h-5" />
          <span>7 días de garantía incondicional</span>
        </section>

        {/* 7. CTAs Equilibrados */}
        <section className="flex flex-col gap-4">
          <button 
            onClick={onAccept}
            className="w-full bg-[#52C27B] hover:bg-[#43a868] text-white font-montserrat font-bold text-lg py-5 px-8 rounded-xl shadow-lg transform transition-all flex items-center justify-center gap-3"
          >
            SÍ, QUIERO VERSIÓN ESENCIAL $4.99
            <ChevronRight />
          </button>
          
          <button 
            onClick={onDecline}
            className="w-full bg-white border-2 border-gray-200 text-gray-400 font-montserrat font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all"
          >
            Mejor lo pienso después
          </button>
        </section>
      </main>
    </div>
  );
};

export default DownsellPage;
