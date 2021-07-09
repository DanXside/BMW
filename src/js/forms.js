/* Forms */

const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);
    request.addEventListener('readystatechange', () => {
        if (request.readystate !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callBack(request.id);
        } else {
            falseCallBack(request.status);
            throw new Error(request.status);
        };
    });
    request.send(data);
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    const smallElem = document.createElement('small');
    form.append(smallElem);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};

        for (const {name, value} of form.elements) {
            if (name) {
                data[name] = value
            }
        };

        sendData(JSON.stringify(data), 
        (id) => {
            smallElem.innerHTML = 'Ваша заявка №' + id +'!<br> В ближайшее время с вами свяжемся!';
            smallElem.style.color = 'green';   
        },
        (err) => {
            smallElem.textContent = 'К сожалению технические неполадки, попробуйте отправить заново';
            smallElem.style.color = 'red';
        });
        form.reset();
    });
};

formElems.forEach(formHandler);


/* const dataTest = {
    name: 'Daniil',
    phone: '+8902938459'
};

sendData(JSON.stringify(dataTest), 
(id) => {
    alert('Ваша заявка №' + id + '! \nВ ближайшее время с вами свяжемся!');
    console.log(id);
}, 
(err) => {
    alert('Ошибка' + err);
}); */