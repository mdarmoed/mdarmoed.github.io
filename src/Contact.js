import './App.css';
import './contactstyle.css';
import Header from './Header';
import Footer from './Footer';


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
  return (
    <>
    <title>Contacts</title>
    
      <section className=''>
        <div className='container'>
          <div className='content-cont'> 
          <h1>Контакты</h1>
            <div className='contact-in'> 

              <div className='contact-map' > 
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
                <br/>
                Адрес: 196247, Россия, Санкт-Петербург, ул. Автовская, д. 333 , лит.И (м. Кировский завод) <br/>
                Предварительная запись: 8 (800) 555-33-10 <br/>
                E-mail: meow.palace.spb@gmail.com</p>

              </div>

              <div className='contact-form'>
                <b><h2>Свяжитесь с нами</h2></b>
                <form>
                  <input type='text' placeholder='ФИО' className='contact-form-txt' />
                  <input type='email' placeholder='E-mail' className='contact-form-txt' />
                  <input type='tel' placeholder='Номер телефона' className='contact-form-txt' />

                  <textarea placeholder='Сообщение' className='contact-form-textarea' > </textarea>
                  <input type='submit' name='submit' className='contact-form-btn'  />
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
