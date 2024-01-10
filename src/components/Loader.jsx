import { useEffect, useState } from "react";  

const Loader = ()=> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState ({name:"", age:0});
  const [count, setCount] = useState(0);

const simulateFetch=(count)=>{
  setTimeout(()=> {
  console.log(`3 after simulateFetch: count= ${count}`);
  setLoading(false);

if(count ===0){
  setData({name: "Toto", age:32});
}else {
  setData({name: "Toto", age: 32, count});
}}
, 3000)}

useEffect(()=>{
  // setLoading(false)
  console.log(`2-1 useEffect: count= ${count}`);
  setLoading(true);
  simulateFetch(count);
  console.log(`2-2 useEffect: count= ${count}`);
  },[count]);

return(
  <>
  {console.log(`1 render browser: count=${count}`)}
  {loading? ( <>
   <p>Chargement...</p>
   <button onClick={()=> setCount(count+1)}>init button {count} </button>
   </>
   ) : (<>
  <p>
    nom: {data.name}, age:{data.age} {data.count && `, count: ${count}`}
  </p>
    <button onClick={()=> setCount(count+1)}>update button {count} </button> 
      </>
      )}
 </>
)}

export default Loader;