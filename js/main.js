let input = document.querySelector("input");
document.querySelector("button").addEventListener("click", getIndividualData);

async function getIndividualData() {
  const name = input.value.toLowerCase();
  const res = await fetch(`/api/${name}`);
  const data = await res.json();
  console.log(data);
  const apiData = new PresidentInfo(data.name, data.birthLocation, data.died, data.inOffice, data.born, data.politicalParty, data.portrait, data.presidentNumber, data.restingPlace, data.vicePresident)
  apiData.showData()
}

async function getNamesByParty(party) {
    const res = await fetch(`/api/party/${party}`);
    const data = await res.json();
    console.log(data);
    const presParty = new PresidentInfo(data.name)
    presParty.clear()
    data.map(names => {
        presParty.displayNamesByParty(names.name)
    })
  }

let partyButton = document.querySelectorAll('.btn')

partyButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        getNamesByParty(e.target.innerText)
        document.querySelector('.partyExample').innerText = e.target.innerText
    });
});

class PresidentInfo{
    constructor(name, birthLocation, died, timeInOffice, birthday, party, portrait, number, restingPlace, vp){
        this.name = name
        this.birthLocation = birthLocation
        this.died = died
        this.timeInOffice = timeInOffice
        this.birthday = birthday
        this.party = party
        this.portrait = portrait
        this.number = number
        this.restingPlace = restingPlace
        this.vp = vp
    }
    showData(){
        document.querySelector(".born").innerText = this.birthday;
        document.querySelector(".birthLocation").innerText = this.birthLocation;
        document.querySelector(".died").innerText = this.died;
        document.querySelector(".served").innerText = this.timeInOffice;
        document.querySelector(".name").innerText = this.name;
        document.querySelector(".party").innerText = this.party;
        document.querySelector(".url").innerText = this.portrait;
        document.querySelector(".number").innerText = this.number;
        document.querySelector(".restingPlace").innerText = this.restingPlace;
        document.querySelector(".vicePresident").innerText = this.vp;
    }
    clear(){
        const section = document.querySelector('.presNames')
        while(section.firstChild){
            section.removeChild(section.firstChild)
        }
    }
    displayNamesByParty(names){
        const li = document.createElement('li')
        li.innerHTML = `
            ${names}
        `
        document.querySelector('.presNames').appendChild(li)
    }
}






