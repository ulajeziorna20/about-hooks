import React, { useState, useEffect } from "react";




function ExampleUseEffect() {

    const [count, setCount] = useState(0);



    // Podobnie do metod componentDidMount i componentDidUpdate:
    useEffect(() => {
        // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
        document.title = `Kliknięto ${count} razy`;
    });



    return (
        <div>
            <p>Naciśnieto {count} razy</p>
            <button onClick={() => { setCount(count + 1) }}>Nacisnij mnie</button>
        </div>
    );


}



export default ExampleUseEffect;