import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemon } from "./utils/pokemon";

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = React.useState(true); // ローディングの状態を管理

  // useEffectはコンポーネントがマウントされた後に実行される(リロード時に実行される)
  useEffect(() => {
    // 非同期処理はasync/awaitを使う
    const fetchPokemonData = async () => {
      //すべてのポケモンのデータを取得
      let res = await getAllPokemons(initialURL);

      // 各ポケモンの詳細データを取得
      loadPokemon(res.results);

      setLoading(false); // ローディングが終了
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _PokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url)
      })
    );
  };

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Data loaded</h1>
      )
      }
    </div>
  );
}

export default App;
