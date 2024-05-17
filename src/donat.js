import './App.css';
import './donatstyle.css';
import Header from './Header';
import Footer from './Footer';

function Donat() {
  return (
    <>
      <Header />
      <main>
        <Donatp />
      </main>
      <Footer />
    </>
  );
}

function Donatp() {
  return (
    <>
      <section className=''>
      <div className='container'>

        <div className='content-cont'>
          <h1>Помогите котяткам</h1>
          <div className='big-text'>
            <p>Содержать около 300 животных — дело затратное и непростое, но с вашей помощью мы справимся! :)</p>
          </div>
            <div className='coontainer'>
              <div className="donation-form">
                <h2><b>Пожертвования для кошачьего приюта</b></h2>
                <form action="#" method="post">
                  <p>Введите ваши ФИО*</p>
                  <input className='inp-dnt' type="text" id="fullname" name="fullname" placeholder="🤷 ФИО" required="" />
                  <p>Введите ваш E-mail*</p>
                  <input className='inp-dnt' type="email" id="email" name="email" placeholder="📧 Email" required="" />
                  <p>Введите ваш номер телефона*</p>
                  <input className='inp-dnt' type="tel" id="phone" name="phone" placeholder="☎ Телефон" />
                  <p>Выберите сумму пожертвования*</p>
                  <div className="donate-buttons">
                    <input type="radio" id="option1" name="donation" defaultValue={10000} />
                    <label htmlFor="option1">10 000 ₽</label>
                    <input type="radio" id="option2" name="donation" defaultValue={100000} />
                    <label htmlFor="option2">100 000 ₽</label>
                    <input type="radio" id="option3" name="donation" defaultValue={1000000} />
                    <label htmlFor="option3">1 000 000 ₽</label>
                    <input type="radio" id="option4" name="donation" defaultValue={10000000} />
                    <label htmlFor="option4">10 000 000 ₽</label>
                  </div>
                  <p>Введите данные вашей карты*</p>
                  <input className='krd-dnt' type="text" placeholder="💳 Номер карты" required="" />
                  <input className='krd-dnt' type="text" placeholder=" 📅 Срок действия" required="" />
                  <input className='krd-dnt' type="text" placeholder="🔐 CVV" required="" />
                  <p>Сообщение</p>
                  <textarea className='txt-dnt' id="message" name="message" placeholder="Пожелания приюту/котятам" defaultValue={""} />
                  <button className='btn-dnt' type="submit">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donat;
