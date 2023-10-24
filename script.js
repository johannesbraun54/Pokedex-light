let baseStatName = [];
let baseStatValue = [];
let urlList = [];
let nameList = [];
let loadedPokemons = [];
let actuallyLength = 0
let nextChunk = 30
let currentPokemon;



let isLoading = false
/**
 * renders a list ob pokemons
 */
async function loadAllPokemons(){

    if(!isLoading){
        isLoading = true
       await renderAllPokemons();
        isLoading = false
     
    }
}
/**
 * loads onclick at a button next twenty pokemons
 */
async function loadMore(){
    if(!isLoading){
        isLoading = true
        await loadTemplate();
        isLoading = false
     
    }
}

/**
 * renders a choosed pokemon into a dialog window
 * @param {integer} i 
 */

async function loadPokemon(i){
    
        let url = `https://pokeapi.co/api/v2/pokemon/${nameList[i]}`
        let response = await fetch(url);
        currentPokemon = await response.json();
        renderPokemonInfo();
      
        document.getElementById('pokemonInfoCard').classList.remove('d-none')
        document.getElementById('pokemonInfoCard').classList.add('z-index')
}

/**
 * renders the default info of the pokemon
 */
function renderPokemonInfo(){
    let getPokemonInfo =  document.getElementById('pokemonInfo')

    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['dream_world']['front_default']; 

    getPokemonInfo.innerHTML = '';
            
    getPokemonInfo.innerHTML +=`<ul><li><b>Height:</b> ${currentPokemon['height']}</li></ul>
                                <ul><li><b>Weight:</b> ${currentPokemon['weight']}</li></ul>
                                <ul><li><b>Base Experience:</b> ${currentPokemon['base_experience']}</li></ul>`

}
/**
 * loads the moves from the current pokemon
 */
function renderPokemonMoves(){

    let getPokemonInfo =  document.getElementById('pokemonInfo')
    let moves = currentPokemon['moves']

    getPokemonInfo.innerHTML = '';

        for (let j = 0; j < moves.length; j++) {
            const move = moves[j]['move']['name'];
        
            getPokemonInfo.innerHTML += `<ul><li>${move}</li></ul>`
        }
}
/**
 * renders a chart with the info from the base stats into a chart
 */
function renderBaseStats(){
    let getPokemonInfo =  document.getElementById('pokemonInfo')
    let stats = currentPokemon['stats']
   
    getPokemonInfo.innerHTML = '';
    getPokemonInfo.innerHTML = `<div>
                                    <canvas id="myChart"></canvas>
                                </div>`
    if(baseStatName.length > 0){
        baseStatName.splice(6)
        baseStatValue.splice(6)
        renderChart(baseStatName,baseStatValue)
    } else{
        renderStats(stats)
        renderChart(baseStatName,baseStatValue)
    }
}

/**
 * renders the chart to show the base stats an their value
 * @param {array} baseStatName 
 * @param {integer} baseStatValue 
 */
function renderChart(baseStatName,baseStatValue){
    chartStatements(baseStatName,baseStatValue)
}
/**
 * closes the dialog window from the current pokemon
 */
function removeInfo(){
    document.getElementById('pokemonInfoCard').classList.add('d-none');
}
/**
 * This function stopps the click-event at the dialog-window
 * @param {PointerEvent} event 
 */
function doNotClose(event){
    event.stopPropagation();
}






