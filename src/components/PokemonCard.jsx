function PokemonCard() {

    const pokemon = pokemonList[1]

    return(
        <figure>
            {pokemon.imgSrc ?(<img src={pokemon.imgSrc} />) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}
export default PokemonCard

const pokemonList = [
    {
      name: "Lugia",
      imgSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/249.png",
    },
    {
      name: "Ramboum",
    },
    {
      name: "Groudon",
      imgSrc:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/383.png"

    }
  ];