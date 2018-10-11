const pokedexURL = "https://pokeapi.co/api/v2/pokemon/";

const pdxEntry = document.querySelector('.pdxEntry');
// let newDiv = document.createElement("div");
let newDiv;
let promiseArr = [];
for(let i=101; i <152; i++){
  promiseArr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
};

Promise.all(promiseArr).then((results)=>{
  console.log(results)
  for(let i = 0; i<results.length; i++){
    let res = results[i];
    newDiv = document.createElement('div');
    newDiv2 = document.createElement('div')
    let newH5 = document.createElement("h5");
    let newImg = document.createElement("img");
    let newImg2 = document.createElement("img");
    let newP = document.createElement("p");
    let newDiv3 = document.createElement("div");
    let newDiv4 = document.createElement('div')
    newDiv4.setAttribute("class", "media")
    newDiv3.setAttribute("class", "media-body");
    newDiv.setAttribute("class","row border border-dark d-flex justify-content-center mt-2");
    newDiv2.setAttribute("class", "media");
    newImg.setAttribute("class", "align-self-center mr-3" );
    newImg2.setAttribute("class", "align-self-center ml-3");
    newH5.setAttribute("class", "mt-0");
    newP.innerHTML = `${(res.data.name)} holds pokedex id #${res.data.id}. It is a ${res.data.types[0].type.name} type pokemon that weighs ${(res.data.weight*.1*2.20462).toFixed(2)} lbs and is ${(res.data.height*.1*3.280839895).toFixed(2)} ft tall.`;
    // newImg.setAttribute("src", `${res.data.results[i].sprites.front_default}` );
    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(newImg);
    newDiv3.appendChild(newH5);
    newDiv4.appendChild(newImg2);
    newH5.innerHTML = res.data.name;
    newImg.src = res.data.sprites.front_default;
    newImg2.src = res.data.sprites.back_default;
    newDiv3.appendChild(newP);
    newDiv2.appendChild(newDiv3);
    pdxEntry.appendChild(newDiv);
    newDiv2.appendChild(newDiv4);
  }
})
