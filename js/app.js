// Start Email validation
let form = document.getElementById('form');
let eVEmail = document.getElementById('eVEmail').value;
let emailVT = document.getElementById('emailVT');
let pattern = /^[^ ] + @[^ ]+\.[a-z]{2,3}$/;

if (eVEmail.match(pattern)){
    form.classList.add('valid');
    emailVT.innerHTML = 'Your Email Address s Valid.'
}

else{
    form.classList.remove('valid');
    emailVT.innerHTML = 'Please Enter Valid Email'
}
// End of Email validation