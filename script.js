let inpBox = document.getElementById('inpBox');
let rangeValue = document.querySelector("#value");
const rangeInput = document.querySelector("#pi_input");

rangeValue.innerText = rangeInput.value;

rangeInput.addEventListener("input", (event) => {
    rangeValue.innerText = event.target.value;
});

function genratePassword(e) {
    let length = Number(rangeValue.innerText);
    let password = '';
    let str = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-`[]{}?';

    for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random() * str.length + 1);
        password += str.charAt(num);
    }
    inpBox.value = password;
}

function copy(e) {
    inpBox.select();
    document.execCommand("copy");
}
