import React from 'react';

function DeliveryButton(props) {
  return (
    <button className="justify-center px-5 py-3 text-3xl font-medium text-amber-900 whitespace-nowrap bg-orange-400 rounded-2xl">
      {props.titulo}
    </button>
  );
}

export default DeliveryButton;