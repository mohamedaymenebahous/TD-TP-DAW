let rouge = document.getElementById('rouge').style.color = "#FF0000";
let vert0 = document.getElementById('vert0').style.color = "#00FF00";
let vert1 = document.getElementById('vert1').style.color = "#00FF00";
let balise = document.getElementsByTagName("b");

for(let i = 0; i < 8; i++)
{
    if(i % 2 == 0)
    {
        balise[i].style.color = "#0000FF"
    }
}