
import React from 'react';
import { CheckCircle, Download, PartyPopper } from 'lucide-react';

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      <h1 className="text-4xl font-montserrat font-black text-gray-900 mb-4 flex items-center gap-3">
        ¡FELICIDADES! <PartyPopper className="text-[#F39C12]" />
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        Tu pedido ha sido procesado con éxito. Hemos enviado los accesos a tu correo electrónico.
      </p>
      
      <div className="bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-gray-200 w-full max-w-md">
        <h3 className="font-bold text-lg mb-4">Tu Resumen de Compra:</h3>
        <ul className="text-left space-y-3 mb-6">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>La Biblia de las Tortas Sin Culpa</span>
          </li>
          <li className="flex items-center gap-2 font-bold text-[#2ECC71]">
            <CheckCircle className="w-4 h-4" />
            <span>Upgrade Kit Maestro Activado</span>
          </li>
        </ul>
        <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors">
          <Download className="w-5 h-5" />
          DESCARGAR AHORA
        </button>
      </div>
      
      <p className="mt-8 text-gray-400 text-sm">
        ¿Necesitas ayuda? Escríbenos a soporte@tortassinculpa.com
      </p>
    </div>
  );
};

export default SuccessPage;
