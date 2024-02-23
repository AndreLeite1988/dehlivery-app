import React, { useState } from 'react';
import '../App.css';
import DeliveryButton from '../components/button/botao';

function Envio() {
    return (
        <>
            <div className="top-container">
                <DeliveryButton titulo="Déh Livery" className="home" />

                <div className="card">
                    <DeliveryButton titulo="Envio" />
                </div>
                <div className="card">
                    <DeliveryButton titulo="Brahma" />
                </div>

                <div className="card">
                    <DeliveryButton titulo="Coca-Cola" />
                </div>

                <div className="card">
                    <DeliveryButton titulo="Guarana" />
                </div>
            </div>
            <div className='bottom-container'>
                <div className='card'>
                    <DeliveryButton titulo="Nome" />
                    <DeliveryButton titulo="CPF" />
                    <DeliveryButton titulo="CEP" />
                    <DeliveryButton titulo="Confirmar Envio" />
                </div>
            </div>
        </>
    );
}

export default Envio;
