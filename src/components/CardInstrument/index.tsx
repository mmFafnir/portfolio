import { FC } from "react";
import { TInstrument } from "../../types/instrument";

interface IState {
  item: TInstrument;
}

const CardInstruments: FC<IState> = ({ item }) => {
  return (
    <div className="instruments-card anim-show delay_02s">
      <div className="instruments-card__img">
        <img
          className="img_contain"
          src={`/static/img/instruments/${item.img}`}
          alt={item.name}
        />
      </div>
      <div className="instruments-card__text">
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default CardInstruments;
