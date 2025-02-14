import React from 'react'

//rafce + tabで関数コンポーネントのテンプレートが作成される


// Cardコンポーネント
// Reactコンポーネントに渡されるデータ（引数）(プロップス)を受け取る
const Card = ({ pokemon }) => {
    console.log({ pokemon })
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <h3 className='card-name'>{pokemon.name}</h3>
            <div className='card-types'>
                <div>タイプ</div>
                {pokemon.types.map((type, i) => {
                    return <div>
                        <span className='type-name'>{type.type.name}</span>
                    </div>;
                })}
            </div>
            <div className='card-info'>
                <div className='card-data'>
                    <p className='title'>重さ</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className='card-data'>
                    <p className='title'>高さ</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className='card-data'>
                    <p className='title'>特性</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
};
export default Card