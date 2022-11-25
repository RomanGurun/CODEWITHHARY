// send recive ,new-user-joined is a custom or self created variables 
// Node Server which will handle socket io connections
const io= require('socket.io') (8000)
// socket.io server is a instance of http which is attached
// to http instance and when it runs,it  will listen the incoming events 
const users={};

// io.on is a socket.io instance which will listen a several sockets connection like
// harry connect,sam connect,ram connect.

io.on('connection',socket =>{
//   new-userjoined is a event
// and inside socket.on('fist params') first params ma new-user-joined bayek aru name lekhna pni milxa 

socket.on('new-user-joined',name=>{
// socket is a particular connection.
// socket.on ko particular connection ma kehi huda feri particular connection ma hune 
// kura socket.on lya handle garxa.

// console.log("New Users",name);

// socket.on user joined event pathayerako xa bhane k garna DO THIS.
users[socket.id]= name;
// socket.on is acceptiong the data and whenever it gets user joined events then
// it will set name in a user and user ma socket.id=name append hunxa. 

socket.broadcast.emit('user-joined',name);
// this function lya chai jun manxya lya joined gareko xa tyo bayek sabai lai emit
// send garxa.(IMP)

    });
    // whenever someone is sending chat messages for eg.Rohan:Hello How are you? mesasge etc then 
socket.on('send', message=>{
    socket.broadcast.emit('receive', {message:message ,name: users[socket.id]})
    //this function is telling that emit gara or tell everybody that message receive gara 
});

socket.on('disconnect',message=>{
socket.broadcast.emit('left',users[socket.id]);
delete users[socket.id];

});


})
// This function tells that jasya he connection aunxa teti belamai  arrow function run gara
