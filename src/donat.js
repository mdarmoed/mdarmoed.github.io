import React from 'react';
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
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    const fullname = event.target.fullname.value.trim();
    const email = event.target.email.value.trim();
    const phone = event.target.phone.value.trim();
    const donation = event.target.donation.value;
    const cardNumber = event.target.cardNumber.value.trim();
    const cardExpiry = event.target.cardExpiry.value.trim();
    const cardCVV = event.target.cardCVV.value.trim();


    if (!fullname || !email || !phone || !donation || !cardNumber || !cardExpiry || !cardCVV) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }


    alert("Благодарим за ваш вклад!");

    event.target.reset();
  };

  return (
    <>
      <section className='donation-section'>
        <div className='container'>
          <div className='content-cont'>
            <h1>Помогите котяткам</h1>
            <div className='big-text'>
              <p>Содержать около 300 животных — дело затратное и непростое, но с вашей помощью мы справимся! :)</p>
            </div>
            <div className='coontainer'>
            <div className='form-container'>
              <div className="donation-form">
                <h2><b>Пожертвования для кошачьего приюта</b></h2>
                <form onSubmit={handleSubmit}>
                  <p>Введите ваши ФИО*</p>
                  <input className='inp-dnt' type="text" id="fullname" name="fullname" placeholder="🤷 ФИО" required />

                  <p>Введите ваш E-mail*</p>
                  <input className='inp-dnt' type="email" id="email" name="email" placeholder="📧 Email" required />

                  <p>Введите ваш номер телефона*</p>
                  <input className='inp-dnt' type="tel" id="phone" name="phone" placeholder="☎ Телефон" required />

                  <p>Выберите сумму пожертвования*</p>
                  <div className="donate-buttons">
                    <input type="radio" id="option1" name="donation" value="10000" required />
                    <label htmlFor="option1">10 000 ₽</label>

                    <input type="radio" id="option2" name="donation" value="100000" />
                    <label htmlFor="option2">100 000 ₽</label>

                    <input type="radio" id="option3" name="donation" value="1000000" />
                    <label htmlFor="option3">1 000 000 ₽</label>

                    <input type="radio" id="option4" name="donation" value="10000000" />
                    <label htmlFor="option4">10 000 000 ₽</label>
                  </div>

                  <p>Введите данные вашей карты*</p>
                  <input className='krd-dnt' type="text" id="cardNumber" name="cardNumber" placeholder="💳 Номер карты" required />
                  <input className='krd-dnt' type="text" id="cardExpiry" name="cardExpiry" placeholder=" 📅 Срок действия" required />
                  <input className='krd-dnt' type="text" id="cardCVV" name="cardCVV" placeholder="🔐 CVV" required />

                  <p>Сообщение</p>
                  <textarea className='txt-dnt' id="message" name="message" placeholder="Пожелания приюту/котятам"></textarea>
                  
                  <button className='btn-dnt' type="submit">Отправить</button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donat;
