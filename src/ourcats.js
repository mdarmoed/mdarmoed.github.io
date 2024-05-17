// src/App.js
import React from 'react';
import './App.css';
import './catscss.css';
import Header from './Header';
import Footer from './Footer';
import CatCard from './components/CatCard';

const cats = [
    { id: 1, name: 'Нори', age: '2 месяца', description: 'Маленькая серо-зеленая кошечка с игривым характером, обожает играть со всеми игрушками.', image: 'https://i.redd.it/25o6v1z2cd371.jpg' },
    { id: 2, name: 'Педро', age: '1 месяц', description: 'Веселый и игривый котенок, который будет верным другом и компаньоном во всех ваших приключениях.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeL6qypoImU9zMNl5RJUCtxDd--9wHQanroVTz9FWTUg&s' },
    { id: 3, name: 'Мистер Вискерс', age: '1 год', description: 'Котик, любящий праздники и веселье. Совсем недавно справил свой 1 день рождения и очень рад этому.', image: 'https://sun9-83.userapi.com/impg/yWjrwrwufAq1nyZ0Ln9CAEPv2eprf-Ww_IWqGw/fGuoOAEcO0s.jpg?size=735x727&quality=95&sign=d6c6e316fde5c923befa11dd4c3333b1&c_uniq_tag=k_F1p03KExW7zDAxpayZIzTGDP6s9yTjjbyLGsJVKwA&type=album' },
    { id: 4, name: 'Мила', age: '4 месяца', description: 'Котенок с нежным окрасом и добрым сердцем, ищет дом, где будет любима и ухожена.', image: 'https://i.pinimg.com/736x/8c/1d/16/8c1d160f588fb71696263c9036e64523.jpg' },
    { id: 5, name: 'Жаннет', age: '1,5 года', description: 'Красивая кошка, познавшая "радости" материнства и мечтающая о стерилизации.', image: 'https://i.pinimg.com/736x/9e/44/01/9e440158ad7bd4470f02890fcb386b20.jpg' },
    { id: 6, name: 'Дарвин', age: '0,5 месяцев', description: 'Сын Жаннет. Любит наггетсы.', image: 'https://i.pinimg.com/736x/07/9f/f3/079ff36e332723af8ef02780709ea035.jpg' },
    { id: 7, name: 'Лялька', age: '0,5 месяцев', description: 'Дочь Жаннет и сестра Дарвина. Любит спать, кушать и снова спать.', image: 'https://i.pinimg.com/736x/a0/08/f7/a008f7bb01c1f4ae7d826f38c2718a6e.jpg' },
    { id: 8, name: 'Пушок', age: '2 года', description: 'Отец котят Жаннет. Подозревает её в измене.', image: 'https://i.pinimg.com/736x/0f/57/57/0f5757a358fa9b9e73d2cb4537bf3e73--tiger.jpg' },
    { id: 9, name: 'Чичи', age: '2 месяца', description: 'Единственная, кто готов к лету.', image: 'https://i.pinimg.com/736x/4f/f0/39/4ff039750003448f1a33aefc4e7cb4f1.jpg' },
    { id: 10, name: 'Рыжик', age: '2 года', description: 'Отличный парень и просто хороший кот. (Настоящий отец котят Жаннет)', image: 'https://otvet.imgsmail.ru/download/274816565_1ef44785f225689b884f5e185e219247_800.png' },
    { id: 11, name: 'Тони', age: '3 года', description: 'Гений, миллиардер, плейбой, филантроп(утверждает, что он настоящий Тони Старк).', image: 'https://i.pinimg.com/736x/0f/d9/ae/0fd9ae3e52964a760f8e740794563597.jpg' },
    { id: 12, name: 'Тайсон', age: '1 день', description: 'Сильный, мускулистый и самодостаточный кот, обожающий игры с мячом и выезды на прогулки.', image: 'https://i.pinimg.com/736x/37/38/27/37382741873ab6dc6313f4c2a537d76c.jpg' }
];

function Galerka() {
  return (
    <>
      <Header />
      <main>
        <Galerkap />
      </main>
      <Footer /> 
    </>
  );
}

function Galerkap() {
  return (
    <div className="container">
      <div className='content-cont'> 
        <div className='kotyata'>
          <h1>Наши котики</h1>
          <div className="galleri">
            {cats.map(cat => (
              <CatCard 
                key={cat.id}
                name={cat.name}
                age={cat.age}
                description={cat.description}
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galerka;
