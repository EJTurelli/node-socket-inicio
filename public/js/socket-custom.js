var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al Server');
});

socket.on('disconnect', function() {
    console.log('Desconectado del Server');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Teto',
    mensaje: 'Hola Mundo'
}, function(data) {
    console.log('Llegó al Server', data);
});

socket.on('enviarMensaje', function(data) {
    console.log('Server', data);
});