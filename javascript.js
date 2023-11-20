function subscribe() {
    var email = document.getElementById('email').value;

    if (validateEmail(email)) {
        
        var subscribeButton = document.getElementById('subscribeButton');
        subscribeButton.innerHTML = 'Subscribed';
        subscribeButton.disabled = true;
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


