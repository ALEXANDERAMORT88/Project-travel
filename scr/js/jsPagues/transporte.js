const chairs = {
    rows: 10,
    seats: 4,
    location: ["A", "B", "C", "D", "F", "G", "H", "I", "J", "k"],
};

const DB = [];
generateRows();

function generateRows() {
    let travellers = document.querySelector(".container-row-travel");
    const img = document.getElementById("img");
    
    for (let lettersRow = 0; lettersRow < chairs.rows; lettersRow++) {
        
        travellers.innerHTML += `<div class="d-flex justify-content-around ${chairs.location[lettersRow]}">
        <div class="seats">${chairs.location[lettersRow]}</div>`;
        for (let seats = 1; seats <= chairs.seats; seats++) {
            document.querySelector(
                `.${chairs.location[lettersRow]}`).innerHTML += `<button class="btnPasajero rounded" type="button" class="btn btn-light"><div class="seats"><img class="img" src="../../img/silla-de-oficina.png" width="20" height="20" alt=""><div class="seats" onclick="selectSeat('${chairs.location[lettersRow]}',${seats})">${seats}</div></div>
                </button>`;
        }
        travellers.innerHTML += `</div>`;
    }
}

function selectSeat (letter, numberSeat){
    document.querySelector(".title-form").innerHTML = `La silla Seleccionada es: ${letter + numberSeat}`;   
    document.querySelector(".container-btn-envio").innerHTML = `<button class="containerBtnEnviar rounded" type="submit" class="btn btn-light" onclick="select('${letter}', ${numberSeat})">Enviar</button>`;
}

function select(letter, numberSeat) {
    const person = document.querySelector("#name1").value;
    const surname = document.querySelector("#surname1").value;
    const chairSelect = letter + numberSeat;

    console.log(person, " ", surname, " ", chairSelect);
    DB.push({person, surname, chairSelect });
    console.log(DB);

//     // showTble();
}

