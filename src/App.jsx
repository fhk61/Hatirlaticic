import React, { useState } from "react";
import Data from './data'
import Liste from './Liste'

function App() {
  
  const[kisiler, setKisiler] = useState(Data);

  const sifirla = () => {
    setKisiler([]);
  }

  return (
    <main>
      <section className="container">
        <h4>Bugun {kisiler.length} kişinin dogum gunu bulunmakta</h4>
        <br />
        <Liste kisiler={kisiler} />
        <button onClick={sifirla} >Temizle</button>
      </section>
    </main>
  );
}

export default App;
