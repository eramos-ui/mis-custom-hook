# useFetch

regresa un state un objeto con la data, loading para indicar si se cargo y error para
señalar si ocurrió o no uno.
Ejemplo:

```
 const url =endpoint de una api';
 const { data: null, loading: true, error: false} = useFetch(url);
       
```

