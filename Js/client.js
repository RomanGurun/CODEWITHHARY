const socket=io('http://localhost:8000');
const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp')
// INORDER PTO PUT THE MESSAGE IN THE CONTAINER BOX BELOW CODE IS WRITTTEN.
const messageContainer = document.querySelector(".container")
var audio=new Audio('fb_messenger_hd.mp3')
const append=(message,position)=>{
    const messageElement= document.createElement('div');
    messageElement.innerText=message;
    messsageElement.classList.add('message')
    messsageElement.classList.add(position)
    // position is left right byharry.
    messageContainer.append(messageElement);

    if(position =='left'){
        
        audio.play();
    }

}





// USer joingarepaxi EMIT garne code 

const name=prompt("Enter your name to join.");
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'right')
})
// Hence socket connect with nodejs and function of socket is call and both client.js above 
// function and index.js works on server helping each other. 
// mathi ko function lya index.js ko socket.on("new-user-joined,name=>---function call back garxa")
socket.on('receive',data=>{
    append(`${data.name}:${data.message} `,'left')
})

socket.on('left',name=>{
    append(`${name} left the chat `,'right')
})


form.addEventListener('submit',(e)=>{
e.preventDefault();
// Through this function the website wouldnot reload.
const message= messageInput.value;
append(`You:${message}`,'right');
// It is about template literals.Is it really on CWH CHANNNEL?
// I think ${variable} is a template literals.
socket.emit('send',message);
messageInput.value='';

})