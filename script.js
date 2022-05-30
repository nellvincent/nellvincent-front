let reference_items = document.querySelector("#reference__items")

let up_button = document.querySelector('.icon-arrow-up2')
let down_button = document.querySelector('.icon-arrow-down2')

down_button.addEventListener("click", () => {reference_items.scrollTop += 30})
up_button.addEventListener("click", () => {reference_items.scrollTop -= 30})

reference_items.addEventListener("scroll", () => {
    up_button.disabled = (reference_items.scrollTop == 0) ? true : false;
    down_button.disabled = (reference_items.scrollHeight - reference_items.clientHeight == reference_items.scrollTop) ? true : false;
})

function createItemReference(data){
    let arr = []; data.contacts.forEach(object => {
        arr.push(`<a href="${object.url}" class="${object.icon} icon-15pt"></a>`)
    })

    return `<div class="item _${String(data.id)}">
    <div class="profession__fullname">${data.fullname.first_name} ${data.fullname.last_name}</div>
    <div class="profession__description">${data.about_me}</div>
    <div class="studying__time">Опыт с ${data.studying_time}</div>
    <div class="contacts">${arr.join('')}</div></div>`
}

reference_items.innerHTML = createItemReference({
    "fullname": {
        "first_name": "Даниил",
        "last_name": "Гросс"
    },
    "about_me": "Специалист по обеспечению информационной безопасности.",
    "studying_time": "2018",
    "proffession": "ИБ",
    "id": 1,
    "contacts": [
        {
            "url": "https://vk.com/katerfire",
            "icon": "icon-vk"
        },
        {
            "url": "https://t.me/damir_gerc",
            "icon": "icon-telegram"
        },
        {
            "url": "https://wa.me/79109934634",
            "icon": "icon-whatsapp"
        },
        {
            "url": "mailto: example@email.com",
            "icon": "icon-mail"
}]})

let sentData = () => { 

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type':   "application/json",
            "Access-Control-Allow-Origin": "devfox.ru"
        },
        mode:"cors",
        body: {
            language: "ru"
        }
    };

    fetch("http://127.0.0.1:3000/", 
        requestOptions) 
    .then(response => {console.log(response)})
    .then(result => {
        console.log("result", result) 
    })
    .catch(error => console.error('error', error));
}
sentData()
