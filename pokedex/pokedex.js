const pokedexURL = "https://pokeapi.co/api/v2/pokemon/";

const pdxEntry = document.querySelector('.pdxEntry');
// let newDiv = document.createElement("div");
let newDiv;
let promiseArr = [];
for(let i=1; i <15; i++){
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
    let newP = document.createElement("p");
    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "media-body");
    newDiv.setAttribute("class","row border border-dark");
    newDiv2.setAttribute("class", "media");
    newImg.setAttribute("class", "align-self-center mr-3" );
    newH5.setAttribute("class", "mt-0");
    newP.innerHTML = `${(res.data.name)} is a ${res.data.types[0].type.name} type. It weighs ${(res.data.weight*.1*2.20462).toFixed(2)} lbs. It is ${(res.data.height*.1*3.280839895).toFixed(2)} ft tall`;
    // newImg.setAttribute("src", `${res.data.results[i].sprites.front_default}` );
    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(newImg);
    newDiv3.appendChild(newH5);
    newH5.innerHTML = res.data.name;
    newImg.src = res.data.sprites.front_default;
    newDiv3.appendChild(newP);
    newDiv2.appendChild(newDiv3);
    pdxEntry.appendChild(newDiv);
  }
})
  // axios.get("https://pokeapi.co/api/v2/pokemon/1").then(res => console.log(res))
/* <div class="media">
  <img class="align-self-center mr-3" src=".../64x64" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Center-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div> */
