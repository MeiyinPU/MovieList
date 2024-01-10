/* eslint-disable react/prop-types */

import { useEffect } from "react";

const Exo = ({count, setCount})=> {


useEffect(()=> {
console.log("COUNT vient d'être modifié");
}, [count]);


return (
<>
<p>test</p>
<button onClick={()=>{setCount(count+1)}}>Ajouter 1 {count}</button>

</>

)


};

export default Exo