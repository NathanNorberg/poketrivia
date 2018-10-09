const pokedexURL = "https://pokeapi.co/api/v2/pokemon/";

const pdxEntry = document.querySelector('.pdxEntry');
let newDiv = document.createElement("div");
let newP = document.createElement("P");

axios.get(pokedexURL).then(res => {
  // for(let i =0; i< 151; i++){
  console.log(res.data.results[0].name);
  newDiv.setAttribute("class","col");
  newP.innerHTML = res.data.results[0].name;
  pdxEntry.appendChild(newDiv.appendChild(newP));
  // }
});
