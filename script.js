/* Dec */

const galeria =document.getElementById('Galeria')
const modal = document.getElementById('pokemonModal')
const modalContent = document.getElementById('pokemon-detail')
const closeModal = document.querySelector('.close')
const serachInput = document.getElementById('search-input')
const serachButton = document.getElementById('search-botton')

//ASYNC - AWAIT 

async function fetchPokemons(){
    for(let id = 1; id<=3;id++){
        await fetchPokemonsByIdOrName(id);

    }
}

async function fetchPokemonsByIdOrName(identifier){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
        if (!response.ok){
            alert('pokemon no encontrado');
            return;
                }
                const data= await response.json();
                createPokemonCard(data);
    }catch(error){
        console.error('Error obteniendo pokemon', error)

    }
}


function createPokemonCard (pokemon){
    const imageUrl1 = pokemon.sprites.other.home.front_default;
    const pokemonName = pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1);
    console.log(pokemonName)

    //Car pokemon 
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img')
    img.src = imageUrl1;
    img.alt = pokemonName

    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content');

    const title = document.createElement('h2');
    title.textContent = pokemonName;

    cardContent.appendChild(title)
    card.appendChild(img)
    card.appendChild(cardContent)
console.log(card)
    galeria.appendChild(card)
}

fetchPokemons();