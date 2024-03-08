function submitForm() {
    const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');
const country = document.getElementById('country');

const userData = {
    name : name.value,
    email : email.value,
    number : number.value,
    address : address.value,
    country : country.value
}

fetch('http://localhost:3000/api/user/', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json',
    },
    body : JSON.stringify(userData)
})
.then(res => res.json())
.then(data => {
    console.log("data saved : ", data);
})
.catch(error => {
    console.log({message : error.message});
})
}