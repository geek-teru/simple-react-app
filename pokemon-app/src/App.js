import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemon } from "./utils/pokemon";
import Card from './components/Card';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = React.useState(true); // ローディングの状態を管理
  const [PokemonData, setPokemonData] = React.useState([]); // ポケモンのデータを管理

  // useEffectはコンポーネントがマウントされた後に実行される(リロード時に実行される)
  useEffect(() => {
    // 非同期処理はasync/awaitを使う
    const fetchPokemonData = async () => {
      //すべてのポケモンのデータを取得
      let res = await getAllPokemons(initialURL);

      // 各ポケモンの詳細データを取得
      await loadPokemon(res.results);
    };

    fetchPokemonData();
    setLoading(false); // ローディングが終了
  }, []);

  const loadPokemon = async (data) => {
    let _PokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url)
        return pokemonRecord;
      })
    );
    setPokemonData(_PokemonData);
  };

  //console.log(PokemonData);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='pokemonCardContainer'>
          {PokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;//Cardコンポーネントにpokemonデータを渡す
          })}
        </div>
      )
      }
    </div>
  );
}

export default App;
