import { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { UseAnimateProps, useAnimate } from "../../hooks/useAnimate";
import Card from "../Card";
import { TWork } from "../../types/work";

interface IProps {
  title?: string;
  cards: TWork[];
}

const stylesAnim: UseAnimateProps = {
  mount: {
    style: {
      // opacity: 1,
    },
    delay: 400,
  },
  unMount: {
    style: {
      opacity: 0,
    },
    delay: 400,
  },
};

const Portfolio: FC<IProps> = ({ title, cards }) => {
  const location = useLocation();

  const { style, handleClose } = useAnimate(stylesAnim);

  useEffect(() => {
    return () => {
      handleClose(() => null);
    };
  }, []);
  console.log(cards);
  return (
    <section className="portfolio">
      <div
        className={`title __anim-item ${
          location.pathname === "/" ? "title_main" : "title_pd "
        }`}
      >
        {location.pathname === "/" ? (
          <div style={style} className="title__content">
            <div className="title__img"></div>
            <div className="title__text">
              <h1 className="anim-show_right">Акрамов Даврон</h1>
              <p className="anim-show_right delay_04s">Front-end разработчик</p>
            </div>
          </div>
        ) : (
          <div style={style} className="title__text">
            <h2 className="anim-show_right">{title}</h2>
          </div>
        )}
      </div>
      <div className="portfolio__content  portfolio_child-center">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
