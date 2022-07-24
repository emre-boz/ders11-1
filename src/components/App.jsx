import { useState } from "react";
import Card from "./Card";

function App() {
    const [urunler, urunleriGuncelle] = useState([]);

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(urunler=>urunleriGuncelle(urunler))

    if ( urunler.length > 0 ) {
        return (
            urunler.map((urun)=>{
                return <Card baslik={urun.title} gorselUrl={urun.image} />
            })
        )
    }

    return (
        <p>Hiç ürün yok..</p>
    )
}

export default App;