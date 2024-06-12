import "../App.css"

function PokemonCard({myPokemon}) {
    
  
    return(
        <figure className="imageNamePkm">
            {myPokemon.imgSrc ?(<img className="imagePkm"src={myPokemon.imgSrc} />) : (<p>???</p>)}
            <figcaption class="namePkm">{myPokemon.name}</figcaption>
        </figure>
    )
}
export default PokemonCard
