import {useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
   const isMounted = useRef(true);//para resolver error del desmonte del componente
   const [state, setState] = useState( {data: null, loading : true, error: null });
   
   useEffect( () => {
       return() => {
           isMounted.current= false;
       }  
   }, []) //que se ejecute la primera vez
    
   useEffect( () =>{
      
       //esta constante nos dirá si el componente sigue montado
       setState ({ data: null, loading: true, error: false} );
       fetch( url )
       .then( resp => resp.json ())
       .then ( data => {

         //setTimeout( ()=>{ //al ralentizar la llamada da error de componenete desmontada con sucesivos Show/Hide
            // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
            // in MultipleCustomHooks (at RealExampleRef.js:14)
            // se define isMounted para resolver el problema
          if( isMounted.current ) {
            setState({
                loading: false,
                error: null,
                data
            });
           } 
        //    else {
        //        console.log('Desmontado!!!, SetState no se llamó');
        //    }

         //}, 3000 );
       })
       .catch( () => {
           setState({ 
             data: null,
             loading: false,
             error: 'No se pudo cargar la data.'

           })
       })   

   },[ url ]) 
   return state;
}
