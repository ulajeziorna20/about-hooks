import react, { useState } from "react";





// Używana dokumentacja: https://pl.reactjs.org/docs/hooks-overview.html


// // #example #one #state
function Example() {

    const [count, setCount] = useState(0);




    return (
        <div>
            <p>Naciśnieto {count} razy</p>
            <button onClick={() => { setCount(count + 1) }}>Nacisnij mnie</button>
        </div>
    );


}



// export default Example;












// #example #many #states


function ExampleWithManyStates() {


    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState({ text: 'Learn Hooks' });
    // W powyższym komponencie, mamy lokalne zmienne age, fruit i todos i możemy każdą z nich zaktualizować z osobna.



    function handleFruitClick() {
        // Similar to this.setState({ fruit: 'orange' })

        let fruits = [`banana`, `apple`, `orange`, `strawberry`, `rasberry`];

        let randomFruit = Math.floor(Math.random() * (fruits.length - 0) + 0);


        setFruit(fruits[randomFruit]);
    }










    return (


        <div>
            <p>Ula has {age} years old</p>
            <button onClick={() => { setAge(age + 1) }}>Set age (add)</button>
            <button onClick={() => { setAge(age - 1) }}>Set age (subtract)</button>
            <p>and she likes a {fruit}</p>
            <button onClick={handleFruitClick}>choose fruit!</button>
        </div>
    )
}


export default ExampleWithManyStates;