const form = document.querySelector("#fighterForm");
const counter = document.querySelector("#aliveCounter");
const nameInput = document.querySelector("#fighterName");
const attackInput = document.querySelector("#fighterAttack");
const allBtn = document.querySelector("#showAll");
const aliveBtn = document.querySelector("#showAlive");
const deadBtn = document.querySelector("#showDead");
const fightRoundBtn = document.querySelector("#fightRound");
const resetArenaBtn = document.querySelector("#resetArena");
const fighterList = document.querySelector("#fighterList");


let fighters = [];


function addFighter (name, power) {

    const fighter = {

        id: Date.now(),
        name,
        power,
        hp: 100,
        dead: false
    }

    fighters.push(fighter);
}

function renderFighters() {

    fighterList.innerHTML = "";

    for (const f of fighters) {

        let li = document.createElement("li");
        let status = f.dead ? "Dead" : "Alive";
        li.textContent = `${f.name} // HP: ${f.hp} // ${status}`;

        fighterList.appendChild(li);
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = nameInput.value.trim();
    let power = Number(attackInput.value);

    addFighter(name, power)
    renderFighters();
    
    form.reset()
    nameInput.focus()
});

renderFighters();