import './App.css';
import './contactstyle.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';

function Contact() {
  return (
    <>
      <Header />
      <main>
        <Contactp />
      </main>
      <Footer /> 
    </>
  );
}



function Contactp() {
  // Состояние для хранения значений полей формы
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Обработчик изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка на правильность заполнения формы
    if (formData.fullName && formData.email && formData.phoneNumber && formData.message) {
      // Если форма заполнена правильно, выводим алерт
      alert("Благодарим за обратную связь! Мы свяжемся с вами в течение часа.");
      // Очищаем поля формы
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } else {
      // Если форма заполнена неправильно, выводим сообщение об ошибке
      alert("Пожалуйста, заполните все поля формы.");
    }
  };

  return (
    <>
      <title>Contacts</title>

      <section className=''>
        <div className='container'>
          <div className='content-cont'>
            <h1>Контакты</h1>
            <div className='contact-in'>

              <div className='contact-map'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8010.715414348246!2d30.254381394328625!3d59.87107850984346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963a88a892c897%3A0xd1d26499026549a2!2z0JDQstGC0L7QstGB0LrQsNGPINGD0LsuLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsw!5e0!3m2!1sru!2sru!4v1713611534330!5m2!1sru!2sru"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
              <div className='contact-information'>
                <p>
                  <br />
                  Адрес: 196247, Россия, Санкт-Петербург, ул. Автовская, д. 333 , лит.И (м. Кировский завод) <br />
                  Предварительная запись: 8 (800) 555-33-10 <br />
                  E-mail: meow.palace.spb@gmail.com</p>

              </div>

              <div className='contact-form'>
                <b><h2>Свяжитесь с нами</h2></b>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='fullName'
                    placeholder='ФИО'
                    className='contact-form-txt'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    className='contact-form-txt'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type='tel'
                    name='phoneNumber'
                    placeholder='Номер телефона'
                    className='contact-form-txt'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />

                  <textarea
                    name='message'
                    placeholder='Сообщение'
                    className='contact-form-textarea'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <input
                    type='submit'
                    name='submit'
                    className='contact-form-btn'
                  />
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;