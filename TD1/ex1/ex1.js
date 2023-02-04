let colorInput = document.getElementById("Couleur");

function changeColor() 
{
    let color = colorInput.value;
    document.getElementById("body").style.backgroundColor = color;
}

let members = document.getElementById("NomMembres");

let result;

function calculSub()
{
    let membersVal = members.value;
    result = membersVal * 3;
    document.getElementById("SubMax").innerHTML = result;
}

let subvDes = document.getElementById("SubvDes");

function validationCheck()
{
    let subvDesVal = subvDes.value;
    if(subvDesVal > result)
    {
        alert("Subvention desiree superieure a la subvention max");
    }
}