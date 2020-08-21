import { useState} from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter]= useState(initialState)
    //3 funciones
    // const increment = ( factor =1 ) => {
    //     setState( state + factor );
    // }
    // const decrement = ( factor =1 ) => {
    //     setState( state - factor );
    // }
    // const reset = () =>{
    //     setState (initialState);
    // }
    const increment = ( ) => {
        setCounter( counter + 1 );
    }
    const decrement = () => {
        setCounter( counter - 1 );
    }
    const reset = () =>{
        setCounter (initialState);
    }
    //retornamos un obj o un arreglo
    return {
        counter,
        increment,
        decrement,
        reset
    };
}
