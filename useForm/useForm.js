import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
       
    const [values, setValues] = useState(initialState); //se puede agregar params
    // por ejemplo se pueden agregar las validaciones
    const reset =() =>{
        setValues(initialState);
    }

    const handleInputChange = ( {target} ) => {
        setValues({
            ...values,
            [ target.name ]: target.value  
        });
    }
    //objeto o arreglo
    return [values, handleInputChange, reset];
}
