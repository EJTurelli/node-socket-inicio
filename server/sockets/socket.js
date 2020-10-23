const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Conectado a Client');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta App'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // Escuchar al Cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         mensaje: 'Recibido ' + data.usuario
        //     });
        // } else {
        //     callback({
        //         mensaje: 'Error con Data '
        //     });
        // }

    });

});