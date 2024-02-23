import { useState } from 'react';
import '../App.css';
import DeliveryButton from '../components/button/botao';
import Icone from "../assets/viking_logo.png";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3><DeliveryButton titulo="Déh Livery" className="home" /></h3>

      <div>
        <DeliveryButton titulo="Cervejas" />       
      </div>

      <div className="card">
        <DeliveryButton className="produto" titulo="Brahma" />
        <DeliveryButton className="produto" titulo="Lata" onClick={() => setCount(count + 1)} />
        <DeliveryButton className="produto" titulo="Long" onClick={() => setCount(count + 1)} />
      </div>

      <div className="card">
        <DeliveryButton titulo="Budweiser"/>
        <DeliveryButton titulo="Lata" onClick={() => setCount(count + 1)} />
        <DeliveryButton titulo="Long" onClick={() => setCount(count + 1)} />
      </div>

      <div className="card">
        <DeliveryButton titulo="Heineken" /> 
        <DeliveryButton titulo="Lata" onClick={() => setCount(count + 1)} />
        <DeliveryButton titulo="Long" onClick={() => setCount(count + 1)} />
      </div>
      <div>
         <DeliveryButton titulo="Refrigerantes" /> 
      </div>
      <div className="card">
        <DeliveryButton titulo="Guarana" />
        <DeliveryButton titulo="Lata" onClick={() => setCount(count + 1)} />
        <DeliveryButton titulo="2L" onClick={() => setCount(count + 1)} />
      </div>

      <div className="card">
        <DeliveryButton titulo="Coca-cola Zero"/>
        <DeliveryButton titulo="Lata" onClick={() => setCount(count + 1)} />
        <DeliveryButton titulo="2L" onClick={() => setCount(count + 1)} />
      </div>

      <div className="card">
        <DeliveryButton titulo="Coca-cola" /> 
        <DeliveryButton titulo="Lata" onClick={() => setCount(count + 1)} />
        <DeliveryButton titulo="2L" onClick={() => setCount(count + 1)} />
      </div>
      <img className="icone-central" src={Icone} alt="Icone" />    
    </div>
  );
}

export default Home;
