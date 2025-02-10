import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import { getAllPokemons } from "./utils/pokemon";

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  // useEffectはコンポーネントがマウントされた後に実行される(リロード時に実行される)
  useEffect(() => {
    // 非同期処理はasync/awaitを使う
    const fetchPokemonData = async () => {
      //すべてのポケモンのデータを取得
      let res = await getAllPokemons(initialURL);
      console.log(res);
    };
    fetchPokemonData();
  }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
