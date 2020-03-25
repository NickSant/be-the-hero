const express = require('express'); //pacote
const routes = require('./routes'); // arquivo
const cors = require('cors');

const app = express();

//app entender que irá receber json
app.use(cors);
app.use(express.json());
app.use(routes);



//ouvir a porta 3333
app.listen(3333);

