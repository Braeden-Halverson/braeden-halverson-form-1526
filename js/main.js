let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let sub = document.getElementById('submit-button');

function validateForm(e) {
    e.preventDefault();
    
    let data = {};
    let errors = [];
    
    if (fn.value) {
        data.fullname = fn.value;
    } else {
        errors.push('First name is missing'); 
    }
    if (em.value) {
        if (pattern.test(em.value)) {
            data.em = em.value;
        } else {
            errors.push('Invalid Email');
        } 
    } else {
            errors.push('Email is missing')
    }
    
    if (msg.value) {
        data.msg = msg.value;
    } else {
        errors.push('Message is missing');
    }
    
    if (errors.length === 0) {
        console.log(data);
        document.getElementById("htmlForm").reset();
    } else {
        console.log(errors);
    }
    
}

sub.addEventListener('click', validateForm);