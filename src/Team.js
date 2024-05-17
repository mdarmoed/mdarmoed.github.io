import './teamstyle.css';

function Team() {
  return (
    <>
  <section style={{ textAlign: "center" }}>
  <br/>

    <h1>Наши сотрудники</h1>


    <div className='container'>
      <div className='ourTeam'>
      <div className='myTxt'>
    <p>Приюту "Meow-Palace" удалось создать уникальное учреждение, 
      в котором действует отлаженная система волонтерства — добровольной, 
      безвозмездной помощи. Это не разовые акции, а планомерная работа: волонтеры помогают 
      ухаживать за животными, участвуют в выставках и выездных мероприятиях, адаптируют новичков, 
      выгуливают собак, расчесывают питомцев, фотографируют, тех, кто уже готов уехать домой, но пока не 
      встретил своего человека. Если хотите стать волонтером приюта – напишите нам, помощь нужна всегда.</p>
      </div>
        <br />

      <div className="row">
        <div className="column">
            <div className="card">
              <img src="https://tn.fishki.net/20/upload/post/2019/05/16/2980148/gallery/Br1UtH-hDOZ.jpg" alt="Snoop" style={{ width: "100%" }} />
              <div className="txt-container">
                <h2>Скала</h2>
                <p className="title">Младший ассистент</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="https://i.pinimg.com/736x/c6/7b/41/c67b417873dc283bad22e5340135a8e9.jpg" alt="Din" style={{  width: "100%" }} />
              <div className="txt-container">
                <h2>Дин Винчестер</h2>
                <p className="title">Главный бухгалтер &amp; Хороший человек</p>
              </div>
            </div>
          </div>
          
          <div className="column">
            <div className="card">
              <img src="https://avatars.mds.yandex.net/i?id=c2bb31ed6bbebd1904a9bc221d8db8f5a8ebb125-9266608-images-thumbs&n=13" alt="Snoop" style={{ width: "100%" }} />
              <div className="txt-container">
                <h2>Снуп Догг</h2>
                <p className="title">Волонтёр</p>
              </div>
            </div>
          </div>



          <div className="column">
            <div className="card">
              <img src="https://i.pinimg.com/736x/27/41/26/2741260b45cfccded6d037d1f2cfbee8.jpg" alt="who are you" style={{ width: "100%" }} />
              <div className="txt-container">
                <h2>Тирион </h2>
                <p className="title">Ветеринар</p>
                </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="https://image2.thematicnews.com/uploads/images/68/22/64/02021/04/20/8cd6784fb5.jpg" alt="a" style={{ width: "100%" }} />
              <div className="txt-container">
                <h2>Квокка</h2>
                <p className="title">Генеральный директор</p>
                
 
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}


export default Team;

