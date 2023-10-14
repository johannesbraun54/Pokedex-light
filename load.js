async function loadTemplate(){
    
    
   
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    let response = await fetch(url);
    let pokemonList = await response.json();
    let pokeBody = document.getElementById('pokeBody');

    for (let i = actuallyLength; i < nextChunk; i++) {

        const link = pokemonList['results'][i]['url']
        const name = pokemonList['results'][i]['name']  
        urlList.push(link);
        nameList.push(name);

        let singleUrl = `https://pokeapi.co/api/v2/pokemon/${nameList[i]}`
        let responseSingleLink = await fetch(singleUrl);
        currentPokemon = await responseSingleLink.json();

        loadedPokemons.push(currentPokemon)
        let pokeProfil =  loadedPokemons[i]['sprites']['other']['dream_world']['front_default']; 

        let search = document.getElementById('search').value 
        search = search.toLowerCase();
    
        if(name.toLowerCase().includes(search)){
                
            pokeBody.innerHTML += /*html*/ `
                <div class="pokemonCard" id="pokemonCard${i}" onclick="loadPokemon(${i})">
                    <img id="pokeImg${i}" src="">
                   <h3>${name}</h3> 
                </div>`

            document.getElementById(`pokeImg${i}`).src = `${pokeProfil}`
        }
    }
    actuallyLength = nameList.length
    nextChunk = nameList.length + 30
}