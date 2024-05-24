import './App.css';
import { Link } from "react-router-dom";

function MainBlock() {
  return (

    <>

      
      <section className="">
        <div className='container'>
          <div className='dich' id='mimg'>
            <img src="kitten.jpg" className="image" id='kimg' />
            <div className='containerr'>
              <h1>
                Meow-palace 
              </h1>
              <p>
                Это приют, где бездомные животные находят заботу, уход, безопасность и надежду на новый дом.
                <br/>
                Наш приют осуществляет свою деятельность на благотворительные пожертвования людей из разных 
                уголков нашей страны. Благодаря этой поддержке мы оплачиваем аренду помещения, закупаем корма и 
                необходимые лекарственные препараты, оплачиваем операции, а также организуем и проводим благотворительные акции и 
                просветительские мероприятия.
                <br/>
                Каждый из вас может помочь нашим подопечным и подарить им немного заботы, любви и теплоты.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=''>
      <h1 style={{ textAlign: "center" }}>Наши котики</h1>
      <div className='sltext'>

        <div className='myTxt'>
  
          <p>В приюте проживают более 100 животных, с разной судьбой и разного возраста. Большинство животных отданы  добрыми людьми или бывшими хозяевами. У каждой кошки свой характер — кто-то ласковый, кто-то пугливый,  игривый или стеснительный, грустный, своенравный или веселый. В приют попадают и обычные полосатики и породистые шотландцы, каждая кошка красива по-своему. <br/>
          Пока они живут в приюте, мы их единственная надежда! Все кошки, что живут в приюте, оказались на улице не по своей воле. Кроме нас с вами им никто не поможет. Если бы они умели говорить, то наверняка бы сказали, что им тоже хочется жить в тепле и заботе. </p>
        </div>
        </div>
        <br />
        <div className='container'>

          <div className='img-blocks'>



          <div className="slider">
          <div className="card">
            <img src="https://vignette.wikia.nocookie.net/55ab9f05-67b2-435b-8b96-0b69d2abb966" alt="Kitten 1" />
            <h4>Наполеон</h4>
          </div>
          <div className="card">
            <img src="https://wallbox.ru/resize/1024x1024/wallpapers/main/201303/55a739dd670b8bb.jpg" alt="Kitten 2" />
            <h4>Гараций</h4>
          </div>
          <div className="card">
            <img src="https://img.goodfon.ru/original/1024x1024/8/d3/kot-kotyara-usy-lapy-hvost-2399.jpg" alt="Kitten 3" />
            <h4>Фрида</h4>
          </div>
          <div className="card">
            <img src="https://demotivation.ru/wp-content/uploads/2020/07/f1sZgMDH1fpaO4U4840vs4Lg49ZJe31HxH2zdDXUu4tUytNVaXmQP_3B_tDYkCgCZ5KXAr2L2dY3IYvFNJWAmM_LOBW0t_G_XmqkyEbsf6Mn5SaTHQ7t97Q8k2R0UVrQ-1024x1024.jpg" alt="Kitten 3" />
            <h4>Мёльнир</h4>
          </div>
          <div className="card">
            <img src="https://i.artfile.me/wallpaper/12-02-2015/1024x1024/zhivotnye-koty-glaza-morda-kot-britanec--907326.jpg" alt="Kitten 3" />
            <h4>Роза</h4>
          </div>
          <div className="card">
            <img src="https://pic.rutubelist.ru/user/b9/59/b95971fe4e5c28fab34d79258f6e91e3.jpg" alt="Kitten 3" />
            <h4>Миссис Ы</h4>
          </div>
          <div className="card">
            <img src="https://sun9-81.userapi.com/impg/VK3fnLRrB2u2hHNKY3bXLRPvWign__a7-AScmg/hNFmqSsgSlo.jpg?size=1024x1024&quality=96&sign=07e0d2bb9848801abe3c786dc1ad6b24&c_uniq_tag=jZtwACnhoET_I03eQJBMtjHZqJt7x-b3GTK5mAiELRw&type=album" alt="Kitten 3" />
            <h4>Адольф</h4>
          </div>
          <div className="card">
            <img src="https://avatars.mds.yandex.net/get-znatoki/1520215/2a00000170fd654b5943e546a19badb976e8/w1200" alt="Kitten 3" />
            <h4>Лаура</h4>
          </div>
          
        </div>


        <div className="clearfix" />
          <button className= "btn-help" id= 'btn-help'>
          <Link to={`/ourcats`}>ВЫБРАТЬ КОТИКА</Link>
          </button>
          </div> 
 

        </div>
    </section>

    <section className=''>
      <div className='container'>
    
      </div>
    </section>


    </>
  );
}


export default MainBlock;

