import Fastify from "fastify";

const app = Fastify();


app.get('/', () => {
    return 'Olá Mundo! Sapup3 na área!';
});

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP: Servidor rodando...");
});











/*function mostraIdadeUsuario(usuario){
    return usuario.idade;
}


const usuario = {
    name: 'Sapup3',
    idade: 23
}

mostraIdadeUsuario(usuario);*/

//console.log('Olá Mundo! Sapup3 na Área!...');