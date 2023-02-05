let login = document.getElementById('login');
let alert = document.getElementById('alert');
let loginValue = login.value;

if(loginValue.length < 5)
{
    login.addEventListener('blur', (event) => alert.innerHTML = "Login minimum length is 5 characters");
    
} 
else if(loginValue.length >= 5)
{
    login.addEventListener('blur', (event) => alert.style.display = "none");
}