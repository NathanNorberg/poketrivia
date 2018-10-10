const pokedexURL = "https://pokeapi.co/api/v2/pokemon/";
const answersContainer = document.querySelector('.answers-container');
const spriteContainer = document.querySelector('.img1');
const pokemonBio = document.querySelector('.pokemon-bio');


// let spriteImage;
// let randomAnswer;
let randomAnswerRow;
let pokeBio;


// for(let i = 0; i < 2; i++){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*Math.floor(152))}`).then(results => {
  // let j = (Math.floor(Math.random()*(152)))
  console.log(results)
  // let res = results[i];
  let spriteImage = document.createElement("img");
  spriteImage.src = results.data.sprites.front_default;
  spriteContainer.appendChild(spriteImage);

  let randomAnswer = document.createElement("p");
  randomAnswer.innerHTML = "It's " + results.data.name +"!";

  let randomAnswerRow = document.createElement("div");
  randomAnswerRow.setAttribute("class", "row");
  answersContainer.appendChild(randomAnswerRow);
  randomAnswerRow.appendChild(randomAnswer);

  let pokeBio = document.createElement('p');
  if(results.data.name === 'bulbasaur'){
  pokeBio.innerHTML = 'Is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras. It also has pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.';
} else {
  pokeBio.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
  pokemonBio.appendChild(pokeBio);


});

for(let i=0; i < 3; i++){
axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*Math.floor(152))}`).then(results => {

  let randomAnswer = document.createElement("p");
  randomAnswer.innerHTML = "It's " + results.data.name +"!";

  let randomAnswerRow = document.createElement("div");
  randomAnswerRow.setAttribute("class", "row");
  answersContainer.appendChild(randomAnswerRow);
  randomAnswerRow.appendChild(randomAnswer);
})
};
