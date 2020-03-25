const connection = require('../database/connection'); // importando conexão com database
const crypto = require('crypto'); //gerador de caracteres aleatórios

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*'); 
         
        return response.json(ongs);
       },

    async create ( request, response) {
        
        const {name, email, whatsapp, city, uf}= request.body;
        const id = crypto.randomBytes(4).toString('HEX'); //Gerando random id

        //aguardar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        

        return response.json({ id });
        }  
    };