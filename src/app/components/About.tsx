import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__content">
          <div className="portfolio__content title">
            <p>Portfolio</p>
            <h2>Our Lastest Work</h2>
          </div>
          <div className="portfolio__content inner">
            <div className="portfolio__item portfolio__item1 wow animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <img src="./images/pic1_2.jpg" />
              <div className="portfolio__overlay">
                <div className="portfolio__icon">
                  <a data-thumb="./img/pic1_2.jpg" data-fancybox="gallery" href="./images/pic1_2.jpg" data-caption="Hình ảnh 1">
                    <i className="la la-plus" />
                  </a>
                </div>
                <div className="portfolio__text">
                  <h3>Software Landing</h3>
                  <p>By Jhone Doe</p>
                </div>
              </div>
            </div>
            <div className="portfolio__item portfolio__item2 wow animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <img src="./images/pic2_1.jpg" />
              <div className="portfolio__overlay">
                <div className="portfolio__icon">
                  <a data-thumb="./images/pic2_1.jpg" data-fancybox="gallery" href="./images/pic2_1.jpg" data-caption="Hình ảnh 2">
                    <i className="la la-plus" />
                  </a>
                </div>
                <div className="portfolio__text">
                  <h3>Software Landing</h3>
                  <p>By Jhone Doe</p>
                </div>
              </div>
            </div>
            <div className="portfolio__item portfolio__item3 wow animate__animated animate__fadeInUp animate__delay-1s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <img src="./images/pic3_1.jpg" />
              <div className="portfolio__overlay">
                <div className="portfolio__icon">
                  <a data-thumb="./images/pic3_1.jpg" data-fancybox="gallery" href="./images/pic3_1.jpg" data-caption="Hình ảnh 3">
                    <i className="la la-plus" />
                  </a>
                </div>
                <div className="portfolio__text">
                  <h3>Software Landing</h3>
                  <p>By Jhone Doe</p>
                </div>
              </div>
            </div>
            <div className="portfolio__item portfolio__item4 wow animate__animated animate__fadeInUp animate__delay-1s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <img src="./images/pic4.jpg" />
              <div className="portfolio__overlay">
                <div className="portfolio__icon">
                  <a data-thumb="./images/pic4.jpg" data-fancybox="gallery" href="./images/pic4.jpg" data-caption="Hình ảnh 4">
                    <i className="la la-plus" />
                  </a>
                </div>
                <div className="portfolio__text">
                  <h3>Software Landing</h3>
                  <p>By Jhone Doe</p>
                </div>
              </div>
            </div>
            <div className="portfolio__item portfolio__item5 wow animate__animated animate__fadeInUp animate__delay-2s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <img src="./images/pic5.jpg" />
              <div className="portfolio__overlay">
                <div className="portfolio__icon">
                  <a data-thumb="./images/pic5.jpg" data-fancybox="gallery" href="./images/pic5.jpg" data-caption="Hình ảnh 5">
                    <i className="la la-plus" />
                  </a>
                </div>
                <div className="portfolio__text">
                  <h3>Software Landing</h3>
                  <p>By Jhone Doe</p>
                </div>
              </div>
            </div>
            <div className="portfolio__item portfolio__item6 wow animate__animated animate__fadeInUp animate__delay-1s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <img src="./images/pic6.jpg" />
              <div className="portfolio__overlay">
                <div className="portfolio__icon">
                  <a href="./images/pic6.jpg" data-fancybox="gallery" data-caption="Hình ảnh 6">
                    <i className="la la-plus" />
                  </a>
                </div>
                <div className="portfolio__text">
                  <h3>Software Landing</h3>
                  <p>By Jhone Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
