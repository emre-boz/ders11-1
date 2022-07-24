import React from 'react';
import ReactDOM from 'react-dom/client';
import C1 from "./components/C1";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <C1 ad="Hasan" soyad="Tokatlı" ugurluSayilar={[3,6,7]}/>
);
