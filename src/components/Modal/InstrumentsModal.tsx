import React from "react";

import instruments from "../../json/instrument.json";

const InstrumentsModal = () => {
  return (
    <>
      {instruments.map((item) => (
        <div key={item.name} className="modal__item">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img src={`/static/img/instruments/${item.img}`} alt={item.name} />
          </a>
        </div>
      ))}
    </>
  );
};

export default InstrumentsModal;
