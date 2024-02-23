import React, { useState } from 'react';
import '../App.css';
import DeliveryButton from '../components/button/botao';

function CarrinhoCompra() {
  // Criando um array de estados para os counts de cada item
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]); // Inicializa todos os counts como 0

  // Função para incrementar o count de um item específico
  const handleIncrement = (index) => {
    const newCounts = [...counts]; // Cria uma cópia do array de counts
    newCounts[index] += 1; // Incrementa o count do item específico
    setCounts(newCounts); // Atualiza o estado
  };

  // Função para decrementar o count de um item específico
  const handleDecrement = (index) => {
    if (counts[index] > 0) { // Verifica se o count é maior que 0 para evitar números negativos
      const newCounts = [...counts]; // Cria uma cópia do array de counts
      newCounts[index] -= 1; // Decrementa o count do item específico
      setCounts(newCounts); // Atualiza o estado
    }
  };

  return (
    <div className="top-container">
      <DeliveryButton titulo="Déh Livery" className="home" />

      <div className="card">
        <DeliveryButton titulo="Carrinho" />
      </div>

      <div className="card">
         <input type="text" placeholder="Itens" readOnly />
         <input type="text" placeholder="Quantidade" readOnly />
         <input type="text" placeholder="Total" readOnly />
      </div>
      
      <div className="card">
        <DeliveryButton titulo="Brahma" />
        <button onClick={() => handleIncrement(0)}>+</button>
        <button onClick={() => handleDecrement(0)}>-</button>
        <span>{counts[0]}</span>
      </div>

      <div className="card">
        <DeliveryButton titulo="Coca-Cola" />
        <button onClick={() => handleIncrement(1)}>+</button>
        <button onClick={() => handleDecrement(1)}>-</button>
        <span>{counts[1]}</span>
      </div>

      <div className="card">
        <DeliveryButton titulo="Heineken" />
        <button onClick={() => handleIncrement(2)}>+</button>
        <button onClick={() => handleDecrement(2)}>-</button>
        <span>{counts[2]}</span>
      </div>

      <div className="card">
        <DeliveryButton titulo="Budweiser" />
        <button onClick={() => handleIncrement(3)}>+</button>
        <button onClick={() => handleDecrement(3)}>-</button>
        <span>{counts[3]}</span>
      </div>

      <div className="card">
        <DeliveryButton titulo="Guarana" />
        <button onClick={() => handleIncrement(4)}>+</button>
        <button onClick={() => handleDecrement(4)}>-</button>
        <span>{counts[4]}</span>
      </div>
        <div className='bottom-container'>
        <div className='card'>
        <DeliveryButton titulo="Cartão" />
        <DeliveryButton titulo="Pix" />
        <DeliveryButton titulo="Dinheiro" />
        <DeliveryButton titulo="Continuar para Entrega" />
        </div>
        </div>
    </div>
  );
}

export default CarrinhoCompra;
