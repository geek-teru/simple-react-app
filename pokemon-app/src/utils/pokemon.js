export const getAllPokemons = (url) => {
    // Promiseオブジェクト（PromiseChainを作成するためのオブジェクト）を返す
    // Promiseオブジェクトは非同期処理の完了または失敗を表す
    return new Promise((resolve, reject) => {
        fetch(url)  // リクエストを送信
            .then((res) => res.json()) // レスポンスをJSON形式に変換
            .then((data) => resolve(data)) // JSONデータを返す
    });
}