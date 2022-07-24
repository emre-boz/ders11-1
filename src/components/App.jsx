import { useState } from "react";
import Anasayfa from "./Anasayfa";
import './App.css';
import BaglantiBilgi from './BaglantiBilgi';

function App() {
    const [baglantiDurumu, baglantiDurumDegistir] = useState( window.navigator.onLine );

    /* TODO aşağıdaki evet listernerlar, bu component her render olduğunda browsera kayıt oluyor, bu düzeltilecek. */
    window.addEventListener("offline", () => {
        console.log("Bağlantı gitti..");
        baglantiDurumDegistir(false);
    });

    /* TODO aşağıdaki evet listernerlar, bu component her render olduğunda browsera kayıt oluyor, bu düzeltilecek. */
    window.addEventListener("online", () => {
        console.log("Bağlantı geldi..");
        baglantiDurumDegistir(true);
    });

    return (
        <>
            <BaglantiBilgi baglantiDurumu={baglantiDurumu} />
            { baglantiDurumu && <Anasayfa /> }
        </>
    )
}

export default App;