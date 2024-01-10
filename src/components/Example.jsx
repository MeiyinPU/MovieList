/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import '../../src/App.css'

const Example=({count,setCount})=>{
const [count2, setCount2] = useState(10)
const [data, setData]= useState()


//1er cas: pas de second paramètre => déclenchement à chaque rendu ou rerender après déclenchement d'un setState
useEffect(()=>{
console.log('step1 : Je me lance à chaque rendu et à chaque rerender', count, data);
})

// 2er cas: un tableau vide ensecond paramètre, pour déclencher l'effet de bord uniquement quand le composant est monté
useEffect(()=>{
console.log('step 2: Je me lance uniquement quand le composant est initialement monté', count)

// lancer un call API
const apiData = {id:5, name:"Toto"};
console.log("step 3: before setData")
//en lançant un setState, on déclienche en effet de bord le premier useEffect qui n'a pas de tableau et qui donc se déclenche à chaque rerender
setData(apiData);
console.log("step 3: after setData")
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
// 在上面的範例中，我們將 [count] 作為第二個參數傳遞。這是什麼意思？如果 count 是 5，然後我們的 component 重新 render，count 仍然等於 5，React 將比對前一個 render 的 [5] 和下一個 render 的 [5]。因為 array 中的每一項都相同（5 === 5），所以 React 將忽略這個 effect。那就是我們的最佳化。

//3er cas: on a un tableau de dépondance avec une varialbe dedans => ce useEffet va se déclencher à chque fois que la variable en question est modifiée
useEffect(()=>{
console.log(`step 4: COUNT vient d'être modifié ${count}` );
},[count]);


return (
  <>
  {console.log(`chrome 1 ${count}`)}
  <button onClick={()=>setCount(count+1)}>{count}</button>
  {console.log(`chrome 2 ${count}`)}
  <button  onClick={()=>setCount2(count2+1)}>{count}</button>
  </>
);
}

export default Example