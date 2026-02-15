
import React, { useState } from 'react';
import UpsellPage from './components/UpsellPage.tsx';
import DownsellPage from './components/DownsellPage.tsx';
import SuccessPage from './components/SuccessPage.tsx';

export type ViewState = 'upsell' | 'downsell' | 'success';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('upsell');

  const handleUpsellAccept = () => setView('success');
  const handleUpsellDecline = () => setView('downsell');
  const handleDownsellAccept = () => setView('success');
  const handleDownsellDecline = () => {
    alert("¡Pedido finalizado con el ebook básico!");
  };

  return (
    <div className="min-h-screen">
      {view === 'upsell' && (
        <UpsellPage 
          onAccept={handleUpsellAccept} 
          onDecline={handleUpsellDecline} 
        />
      )}
      {view === 'downsell' && (
        <DownsellPage 
          onAccept={handleDownsellAccept} 
          onDecline={handleDownsellDecline} 
        />
      )}
      {view === 'success' && (
        <SuccessPage />
      )}
    </div>
  );
};

export default App;
