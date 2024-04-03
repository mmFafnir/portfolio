import { FC } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { TWork } from "../../types/work";

interface IProps {
  card: TWork;
  classes?: string[];
}
const Card: FC<IProps> = ({ card, classes }) => {
  const location = useLocation();

  return (
    <div
      className={`portfolio-card __anim-item ${
        classes ? classes.join(" ") : ""
      }`}
      id={card.id}
    >
      <div className="portfolio-card__left">
        <div className="portfolio-card__tape tape">
          <p>{card.type}</p>
        </div>
        <h3 className="anim-show_left">{card.title}</h3>
        <div className="portfolio-card__text anim-show_left delay_02s">
          <p>{card.description}</p>
          <p>Инструменты используемые при работе:</p>
          <ul>
            {card.list.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
        <div className="portfolio-card__links ">
          <div className="anim-show_left delay_06s">
            <a href={card.url} target="_blank" className="link">
              <span>перейти</span>
            </a>
          </div>
          {card.urlGit && location.pathname !== "/" ? (
            <div className="anim-show_left delay_06s">
              <a href={card.urlGit} target="_blank" className="link">
                <span>GitHub</span>
              </a>
            </div>
          ) : null}

          {location.pathname === "/" ? (
            <div className="anim-show_left delay_08s">
              <Link to="/works" className="link ">
                <span>больше</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      <div className="portfolio-card__right">
        <div className="portfolio-card__img anim-show delay_08s">
          <img src={card.img} alt="bouncy" />
        </div>
      </div>
    </div>
  );
};

export default Card;
