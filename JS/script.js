const gPlay = document.getElementById('g-play');
gPlay.classList.add('play-button');

const aStore = document.getElementById('a-store');
aStore.classList.add('app-store');

// free price list
document.getElementById('free-trial').addEventListener('click', function(){
    alert('Are you willing to choose our free version?');
});
document.getElementById('free-trial').addEventListener('click', function(){
    alert('Thank You');
});

// business price list
document.getElementById('business-link').addEventListener('click', function () {
    alert('If you choose this, you need to add card details for payment.');
    
});

// developer price list
document.getElementById('developer.price').addEventListener('click', function(){
    alert('Add card details for payment.')
})

// button send message
document.getElementById('send-message').classList.add('send-mess-button');

document.getElementById('send-message').addEventListener('click', function(){
    let inputField = document.getElementsByClassName('show-value');
    let inputText = inputField.value;
    
    let showList = document.getElementById('show-info-list');
    let p = document.createElement('p');
    p.innerText = inputText;
    showList.appendChild('p');
})
