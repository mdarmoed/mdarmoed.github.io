import './App.css';
import './we.css';
import Header from './Header';
import Footer from './Footer';


function We() {
  return (
    <>
      <Header />
      <main>
      <WeAre />

      </main>
      <Footer /> 
    </>
  );
}

function  WeAre() {
  return (
    <>
<div className="container">
<div className='content-cont'> 
<h1>О нас</h1>

<div className="about-us-cats">
  <p>
    Добро пожаловать в наш кошачий приют! Мы занимаемся спасением и уходом за
    бездомными кошками уже более 10 лет. Наша история началась с того, что в
    нашем городе был острый дефицит приюта для животных, и мы решили открыть
    свой собственный приют.
  </p>
 
  <div className="photo-gallery-cats">
    <img
      src="https://www.timeout.ru/img/Марина/Город/Юна/6.jpg"
      alt="Кошка 1"
    />
    </div>
    <p>
    Мы заботимся о более чем 100 кошках каждый день. У нас есть команда
    волонтеров, ветеринаров и сотрудников, которые делают все возможное, чтобы
    наши пушистые друзья были здоровы и счастливы. Мы стремимся найти каждой
    кошке любящий дом и заботливых хозяев.
  </p>
  <div className="photo-gallery-cats">

    <img
      src="https://img-fotki.yandex.ru/get/65661/37340964.113/0_f25b0_80044407_orig.jpg"
      alt="Кошка 2"
    />
    <img
      src="https://static.wixstatic.com/media/11062b_b2f6c56226b348ddb5dbad6ca0df11c0~mv2.jpeg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/11062b_b2f6c56226b348ddb5dbad6ca0df11c0~mv2.jpeg"
      alt="Кошка 3"
    />
  </div>
  <p>
    Если вы хотите помочь нам в нашей миссии, вы можете стать волонтером,
    пожертвовать нам корм или средства, или просто прийти в гости и провести
    время с нашими кошками. Спасибо, что поддерживаете нас!
  </p>
</div>

</div>

</div>
    </>
  );
}


export default We;
