

function validateForm() {
    const fio = document.getElementById("fio").value;
    const numberph = document.getElementById("number").value;

    const errorMessage = document.getElementById("errorMessage");

    const regexFio = /^[а-яА-Я]+ [а-яА-Я]+ [а-яА-Я]+$/;
    const regexPhone = /\(8|\+7([0-9]{10})/;

    if (!regexFio.test(fio)) {
        errorMessage.innerHTML = "Введите корректные ФИО";
        return false;
    }

    if (!regexPhone.test(numberph)) {
        errorMessage.innerHTML = "Введите корректный номер телефона";
        return false;
    }
    

    alert("Спасибо! Данные успешно отправлены!");
    errorMessage.innerHTML = "";
    return true;
}