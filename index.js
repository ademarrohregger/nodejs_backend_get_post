const express = require('express');

const app = express();

app.use(express.json()); // para o express entender JSON

// Parameters types
// Query Params: request.query (filtros, ordenacao, paginacao,...)
// Route Params: request.params (identifica um recurso na alteracao/remocao)
// Body Params: request.body (Dados p criacao e alteracao de registro)
//query
/*  
app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello World again' });
});

*/

// route
/*
app.delete('/users/:id', (request, response) => {
    console.log(request.params.id);
    return response.json({ message: 'Hello World again' });
});
*/
// body

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World again' });
});





app.listen(3333);