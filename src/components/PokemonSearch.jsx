import { useState } from "react";

export default function PokemonSearch() {
    const [pokemon, setPokemon] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const catchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((res) => res.json())
            .then((pokemon) => setPokemon(pokemon));
    };

    console.log(pokemon);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={catchPokemon}>Catch</button>
            {pokemon !== null && (
                <div>
                    Name: {pokemon.name}
                    <br />
                </div>
            )}
        </>
    );
}

// TODO
// // This function is used as a callback prop for the `TextInput`,
// // so we can pass the `TextInput`'s value back to its parent, this component.
// const onInput = (value) => {
//     console.log(value);
// };
//         // <TextInput onInput={onInput} />
