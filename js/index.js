const refs = {
    form: document.querySelector('.main-form'),
    nameInput: document.querySelector('#name'),
    emailInput: document.querySelector('#email'),
    numberInput: document.querySelector('#number'),
    countryInput: document.querySelector('#country'),
    passwordInput: document.querySelector('#password'),
    repeatPasswordInput: document.querySelector('#repeat-password'),
};

function onSubmit(e) {
    e.preventDefault();

    const isEqualPassword = refs.passwordInput.value === refs.repeatPasswordInput.value;
    const isEmptyInput = !refs.emailInput.value || !refs.numberInput.value 
                        || !refs.nameInput.value || !refs.countryInput.value 
                        || !refs.passwordInput.value || !refs.repeatPasswordInput.value;
    
    if ((Number(refs.nameInput.value) || !refs.nameInput.value)) {
        refs.nameInput.value = '';
        alert('Введите корректное значение поля "ФИО"');

        return;
    }

    if (isEmptyInput) {
        alert('Заполите поля со звездочкой *');
        
        return;
    }

    if ((Number(refs.countryInput.value) || !refs.countryInput.value)) {
        refs.countryInput.value = '';
        alert('Введите корректное значение поля "Страна"');

        return;
    }

    if (!isEqualPassword) {
        refs.passwordInput.value = '';
        refs.repeatPasswordInput.value = '';
        alert('Пароли не совпадают');

        return;
    }

    return true;
}

refs.form.addEventListener('submit', onSubmit);