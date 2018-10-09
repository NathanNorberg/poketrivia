const pokedexURL = "https://pokeapi.co/api/v2/pokemon/";

const pdxEntry = document.querySelector('.pdxEntry');
// let newDiv = document.createElement("div");
let newDiv;

axios.get(pokedexURL).then(res => {
  for(let i =0; i< 151; i++){
  // console.log(res.data.results[i].name);
  newDiv = document.createElement('div')
  let newP = document.createElement("P");
  newDiv.setAttribute("class","row border border-dark");
  newDiv.appendChild(newP);
  newP.innerHTML = res.data.results[i].name;
  pdxEntry.appendChild(newDiv);
  }
});
