let first = document.getElementById("list");

let li1 = document.createElement("li");
li1.appendChild(document.createTextNode("Riz"));
li1.setAttribute("class", "nothot1");
li1.setAttribute("id", "riz");
list.prepend(li1);

let li0 = document.createElement("li");
li0.appendChild(document.createTextNode("COMMANDES"));
li0.setAttribute("class", "nothot");
li0.setAttribute("id", "commandes");
list.prepend(li0);

let li2 = document.createElement("li");
li2.appendChild(document.createTextNode("Lait"));
li2.setAttribute("class", "nothot1");
li2.setAttribute("id", "lait");
list.appendChild(li2);

let all = first.querySelectorAll(".nothot1");
let nb = all.length;
for(let i = 0; i < nb; i++)
{
    all[i].setAttribute("class", "hot");
    console.log(all[i]);
}

let commandes = document.getElementById("commandes")
commandes.innerHTML += "<span class='hot' id='number'>" + nb + " </span>";