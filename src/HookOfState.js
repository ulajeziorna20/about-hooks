// Linia 2: Importujemy hooka useState z biblioteki React. Pozwala nam to na używanie lokalnego stanu w komponencie funkcyjnym.
import React from "react";





// Co zwraca wywołanie useState? Zwraca ono parę wartości: aktualną wartość stanu i funkcję, która pozwala go aktualizować. Dlatego stosujemy zapis const [count, setCount] = useState().

function Example() {


    // Linia 13: Wewnątrz komponentu Example, poprzez wywołanie hooka useState, deklarujemy nową zmienną stanu. Wywołanie zwraca parę wartości, którym nadajemy nazwy. Naszą zmienną nazywamy count (pol. licznik), ponieważ przechowuje ona liczbę naciśnięć przycisku. Inicjalizujemy ją z domyślną wartością, poprzez przekazanie 0 jako jedynego argumentu do funkcji useState. Jako druga zwrócona jest funkcja, która pozwala aktualizować wartość count, więc nazwiemy ją setCount (pol. ustawić licznik).
    const [count, setCount] = useState(0);




    return(
        <div>
            <p>Naciśnieto {count} razy</p>


            {/* Linia 25: Kiedy użytkownik naciska przycisk wywołujemy funkcję setCount z nową wartością. React wyrenderuje ponownie komponent Example, przekazując do niego nową wartość zmiennej count. */}
            <button onClick={() => {setCount(count + 1)}}>Nacisnij mnie</button>
        </div>
    );


}



// export default Example;