let login = document.getElementById('login');
let alert = document.getElementById('alert');
let loginValue = login.value;

login.addEventListener('blur', verif);

function verif()
{
    if(loginValue.length < 5)
    {
        alert.innerHTML = "Login minimum length is 5 characters";
    }
    else if(loginValue.length >= 5)
    {
        alert.style.display = "none";
    }
}