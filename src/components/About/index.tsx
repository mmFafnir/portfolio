const About = () => {
  return (
    <section className="about-me __anim-item">
      <div className="about-me__wrapper">
        <div className="about-me__content" id="about">
          <div className="about-me__img">
            <img
              src="https://cdn-edge.kwork.ru/files/avatar/large/48/9782062-11.jpg"
              alt="davron"
            />
          </div>
          <div className="about-me__text">
            <h2 className="anim-show delay_02s">Обо мне</h2>
            <p className="anim-show delay_04s">
              Как меня зовут и чем я занимаюсь, думаю, стало уже понятно.
              Перейду, пожалуй, срузу к сути.
            </p>
            <p className="anim-show delay_06s">
              Начну с того, что предоставляю гарантию при окончании работы, т.е
              в течении недели, после передачи архивов, бесплатно исправляю все
              ошибки(никто не застрахован от них, человеческий фактор никто не
              отменял), которые были не замечены в течении работы. На связи в
              любой день недели от 10:00 до 22:00 по Москве, оплата производится
              после окончания работы.
            </p>
          </div>
          <div className="about-me__link anim-show delay_08s"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
