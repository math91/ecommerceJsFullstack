import http from "../PokemonAPI"

const getCharacterDitto = () => {
    return http.get('/pokemon/ditto')
}

const searchCharacter = (pokemonName: string) => {
    return http.get('pokemon/' + pokemonName)
}

export default {
    getCharacterDitto,
    searchCharacter
}