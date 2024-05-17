import { Link } from "react-router-dom";

function Footer() {
  return (
/*Footer*/
    <>
    <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">
        <a href="#" className="nav__logo" id="footer__logo">

        <div className="footer-logo"><svg
        version="1.1"
        id="background-logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: "\n       \n           .st0{fill:#000000;}\n       \n       "
          }}
        />
        <g>
          <path
            className="st1"
            d="M481.875,299.344L512,292.219l-4.656-19.641l-24.25,5.734c0-0.328,0.016-0.641,0.016-0.969
          c0-38.078-10.531-72.781-28.969-102.359c15.438-53.938-13.438-124.547-13.438-124.547S387.813,73,357.719,100.297
          C327.109,91.063,292.578,88.094,256,88.094c-36.766,0-71.484,2.563-102.203,11.781c-30.156-27.109-82.5-49.438-82.5-49.438
          S42.406,121.063,57.859,175c-18.422,29.578-28.984,64.281-28.984,102.344c0,0.328,0.031,0.641,0.031,0.969l-24.25-5.734L0,292.219
          l30.109,7.125c2.672,23.578,9.672,44.75,20.234,63.422L12.875,377.75l7.484,18.75l41.203-16.484
          c39.797,53.141,111.969,81.547,194.438,81.547c82.453,0,154.641-28.406,194.438-81.547l41.203,16.484l7.484-18.75l-37.469-14.984
          C472.219,344.094,479.219,322.922,481.875,299.344z"
          />
        </g>
      </svg>
    </div>
    <div className="fantasy">
          <h1>Meow-palace</h1>
          </div>
        </a>
        <p className="footer__number">8 (800) 555-33-10</p>
      </div>
      <div className="footer-container">
      <div className="footer__links">
        <h3 className="footer__title">компания</h3>
        <ul>
          <li className="footer__list">
          <Link to={`/we`}>О нас</Link>
          </li>
          <li className="footer__list">
          <Link to={`/donats`}>Поддержать</Link>

          </li>
        </ul>
      </div>
      <div className="footer__links">
        <h3 className="footer__title">полезное</h3>
        <ul>
          <li className="footer__list">
            <a href="https://catsroom24.com/useful_tips">Советы новоиспечённым хозяевам</a>
          </li>
          <li className="footer__list">
            <a href="https://expertology.ru/9-luchshikh-zoomagazinov-v-spb/">Топ зоомагазинов</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="footer__credit">© 2024 Meow Palace</div>
    </div>
  </footer>
  
</>
  )
}

export default Footer;
