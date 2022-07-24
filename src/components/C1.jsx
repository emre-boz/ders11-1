import { useState } from "react";

function C1(ozellikler) {
    // const meyve="Elma";
    const [meyve, meyveyiGuncelle]=useState("Elma");

    //meyveyiGuncelle("Portakal"); //gövdeye konulursa tekrar tekrar çalışır listener ya time ile ilgili olmalı

    console.log("C1 tekrar çalıştı")

    return <div>
        Ben C1, merhaba {ozellikler.ad}. Bu günün meyvesi: {meyve}
        <button onClick={()=>{ meyveyiGuncelle("Armut") }}>Meyve Güncelle</button>
        </div>
}

export default C1;