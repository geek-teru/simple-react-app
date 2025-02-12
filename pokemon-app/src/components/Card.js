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
            <div className='card-name'>
                {pokemon.name}
            </div>
        </div>
    )
}

export default Card