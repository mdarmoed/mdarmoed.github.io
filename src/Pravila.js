import './pravstyle.css';

function Pravila() {
  return (
    <>
      <section className="">
        <div className='container'>
          
        <div className='txt-pravila'>
    <h1><b>Путь к домашней жизни</b></h1>
    <div className="hill text-center">
        <div className="row-narrow">
            <ul className="mt40">
                <li className="rama">
                    <img src="rescue.svg" alt="Спасение" />
                    <p>Спасение</p>
                </li>
                <li className="rama">
                    <img src="vaccination.svg" alt="Вакцинация" />
                    <p>Вакцинация</p>
                </li>
                <li className="rama">
                    <img src="sterilization.svg" alt="Стерилизация" />
                    <p>Стерилизация</p>
                </li>
                <li className="rama">
                    <img src="homesearch.svg" alt="Поиск дома" />
                    <p>Поиск дома</p>
                </li>
            </ul>
        </div>
    </div>
</div>

  
       </div>
      </section>
     

      <section className=''>
      <div className='txt-facts' style={{ textAlign: "center" }}>
      <h1>Интересные факты о кошках</h1>
        <div className='container'>

        <div className='uzhos'>
      <div className="containeer">
  <div className="imagecat">
    <img src="https://www.fonstola.ru/images/201502/fonstola.ru_161626.jpg" id="fl1" alt="Кошка" />
  </div>
  <div className="facts">
    <ul>
      <li>1. Кошки обладают лечебными способностями. В народной медицине даже есть специальная 
        фелинотерапия – метод профилактики и лечения различных заболеваний при помощи контактов с кошками.</li>
      <li>
      2. Считается, что у владельцев кошек на 30% снижается вероятность инфаркта или инсульта.
      </li>
      <li>
      3. Любовь к коробкам у кошек научно обоснована - это дает им чувство защиты
        и спокойствия.
      </li>
      <li>
      4. Кошки подвергались инквизиции. Папа Иннокентий VIII считал их проводниками между ведьмами и силами зла. 
      Истребив кошек в Европе, люди получили нашествие крыс и эпидемию чумы.
      </li>
      <li>5. Домашние кошки становятся похожими на своих хозяев. Ученые выяснили, что характер
         и образ жизни хозяев влияет не только на собак, но и на кошек.
         </li>
      <li>6. Самой долгоживущей кошкой считается Крим Пафф, прожившая 38 лет и 3 дня
         (1967-2005). Она была включена в Книгу рекордов Гиннесса.
      </li>

    </ul>
  </div>
  </div>
  </div>
</div>
</div>

      </section>

    </>
  );
}


export default Pravila;

