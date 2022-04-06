const syotettyNimi = document.querySelector("#nimi");
const virheilmo = document.querySelector(".virhe");
const nimetLista = document.querySelector("#nimet");
let laskuri =1;

document.getElementById("form").addEventListener("submit", listalleArray);

function listalleArray(event) {
    event.preventDefault();

    //Kenttä tyhjä vai ei. Jos ei niin lisää arrayyn
    if (nimi.value === "") {
        virhe.classList.add("virhe");
        virhe.innerHTML = "Kenttä tyhjä";
        setTimeout(() => virhe.remove(), 3000);
    } else {
        // const li = document.createElement("li");
        // li.appendChild(document.createTextNode(`${nimi.value}`));

        // nimetLista.appendChild(li);


        let i=1;
        if (i==10) {
            nimetLista.push(syotettyNimi);
            i++;
            console.log(i);
        }


        let txt="<ol>";
        nimetLista.forEach(tulosta);
        txt += "</ol>"

        

        //tyhjennys
        syotettyNimi.value = "";
    

        function myFunction(value) {
            text += "<li>" + value + "</li>";
        }
    }
}