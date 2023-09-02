
import { FC } from 'react';

const Socials:FC = () => {
    return (
        <div className="social __anim-item __active">
            <div className="social__item">
                <a className="social__link tg" href="https://tlgg.ru/@ak_dav01"><i className="fab fa-telegram-plane"></i></a>
            </div>
            <div className="social__item">
                <a className="social__link github" href="https://github.com/mmFafnir"><i className="fab fa-github"></i></a>
            </div>
            <div className="social__item">
                <a className="social__link weblancer" href="https://www.weblancer.net/users/mmFafnir/"><span>W</span></a>
            </div>
            <div className="social__item">
                <a className="social__link whatsapp" href="https://wa.me/79375453538"><i className="fab fa-whatsapp"></i></a>
            </div>

        </div>
    );
};

export default Socials;