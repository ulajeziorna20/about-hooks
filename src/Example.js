import react, { useState } from "react";



function Example() {

    const [count, setCount] = useState(0);




    return(
        <div>
            <p>Naciśnieto {count} razy</p>
            <button onClick={() => {setCount(count + 1)}}>Nacisnij mnie</button>
        </div>
    );


}



export default Example;