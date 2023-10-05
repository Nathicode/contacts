

document.querySelector('.body').innerHTML = localStorage.getItem("ht");
document.querySelector('#add').onclick = () => {
    window.scrollTo("255", "700");
    let userName = document.querySelector('#user').value;
    let phone = document.querySelector('#phone').value;
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${phone}`;
    let card = `<div id='card'><img src='${api}' id='qr'><div id='info'><p id='user'>${userName}</p><p id='phone'>${phone}</p></div></div>`;
    let cards = document.querySelector(".cards");
    cards.innerHTML += card;
    localStorage.setItem("ht", document.querySelector('.body').innerHTML);
}

document.querySelector('#searchin').oninput = function() {
    let srv = document.querySelector("#searchin").value;
    let div = document.querySelectorAll("#card");

    console.log();
      document.querySelector('.input').style.display = "none";
    if (srv == '') {
        document.querySelector('.input').style.display = "flex";
    }
   
for(i = 0; i < div.length; i++){
    if (!div[i].innerHTML.toUpperCase().includes(srv.toUpperCase())) {
        div[i].style.display = "none";
       
    }
    else {
        div[i].style.display = "flex"
    }
    document.querySelector('#back').onclick = () => {
        document.querySelector('.button').style.display = "none";
 
    }
}

}
let card = document.querySelectorAll('#card');
card.forEach(card => {
    card.onclick = () => {
        card.remove()
    }
})