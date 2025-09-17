//creating the floating particles
function createParticles(){
    const particlesContainer = document.getElementById('particles'); 
    const particleCount = 50; 

    for(let i = 0; i < particleCount; i++){
        const particle = document.createElement('div'); 
        particle.className = 'particle'; // add this class to give each particle the css properties as defined in style.css
        particle.style.left = Math.random() * 100 + '%'; //make each particles postion random 
       
        particle.style.animationDelay = Math.random() * 20 + 's';//defining how long the particles show thier animation after the website loads 
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's'; //for how long the animation lasts
        particlesContainer.appendChild(particle); //just add the particle divs to the container div
    }
} 

//starting chat 
function startChat(){
    document.getElementById('landingPage').classList.add("hidden"); 
    document.getElementById('chatContainer').classList.add('active'); 
    updateWelcomeTime(); 
}

//the button for returning to landing page
function goBack(){
    document.getElementById('chatContainer').classList.remove('active'); 
    document.getElementById('landingPage').classList.remove('hidden'); 
}

//update welcome message time 
function updateWelcomeTime(){
    const now = new Date(); 
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); 
    document.getElementById('welcomTime').textContent = timeString; 
}

//resizing the textarea
function autoResize(textarea){
    textarea.style.height = 'auto'; 
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'; 
}


//hadnle enter keypress to submit or other things 
function handleKeyPress(event){
    if(event.key === 'Enter' && !event.shiftKey){//the second condition is used to chek if the shift key is being pressed while pressing the enter key 
        event.preventDefault(); //for the browser not to interrupt by doing it's actions
        sendMessage(); //continue to sending the message
    }
}

//sending the quick templated messages 
function sendQuickMessage(message){
    document.getElementById('messageInput').value = message; 
    sendMessage(); 
}

//the function to sending the messages to the chatbot
function sendMessage(){
    const input = document.getElementById('messageInput'); 
    const message = input.value.trim(); //to trim for spaces 

    if(message === '') return; 

    //adding user message 
    addMessage(message, 'user');// send the message using the addMessage function
    input.value = '';//after sending the messages change the textarea to null string as a new
    input.style.height = 'auto'; //return back to the prev height of the textarea

    //now show the typing indicators(the three dots)
    showTypingIndicator(); 

    //now simulate the bot responding
    setTimeout(()=>{
        hideTypingIndicator();// hide the three dots before sending the response of the bot
        const responses = [
            "That's a great question! Let me think about that...",
            "I understand what you're asking. Here's my perspective...",
            "Interesting! I'd be happy to help you with that.",
            "That's a fascinating topic. Let me break it down for you...",
            "Great point! Here's what I think about that...",
            "I love discussing this kind of thing! Here's my take...",
            "That's exactly the kind of question I enjoy answering!",
            "Perfect! I have some thoughts on that topic..."
        ]; 
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]; 
        addMessage(randomResponse, 'bot'); 
    }, 1500 + Math.random() * 1000); 
}

//add message to chat (or just make the messages show up in the chat area)
function addMessage(text, sender){
    const messagesContainer = document.getElementById('chatMessages'); 
    const messageDiv = document.createElement('div'); 
    messageDiv.className = `message ${sender}`; 

    const now = new Date(); 
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); 

    messageDiv.innerHTML =`
        <div>${text}</div>
        <div class="message-time">${timeString}</div>`

    messagesContainer.appendChild(messageDiv); 
    messagesContainer.scrollTop = messagesContainer.scrollHeight; 
}

//showing the three dots
function showTypingIndicator(){
    const indicator = document.getElementById('typingIndicator'); 
    const messagesContainer = document.getElementById('chatMessages'); 
    indicator.style.display = 'block'; 
    messagesContainer.appendChild(indicator); 
    messagesContainer.scrollTop = messagesContainer.scrollHeight; 
}

//make them invisible 
function hideTypingIndicator(){
    const indicator = document.getElementById('typingIndicator'); 
    indicator.style.display = 'none'; 
}

//initialize particles when page loads 
window.addEventListener('load', ()=>{
    createParticles(); 
    updateWelcomeTime(); 
}); 

document.addEventListener('DOMContentLoaded', function(){
    const featureCards = documentElement.querySelectorAll('.card'); 
    featureCards.forEach(card =>{
        card.addEventListener('mouseenter', function(){
            this.style.transform = 'translateY(-10px) scale(1.05)';
        }); 
        card.addEventListener('mouseleave', function(){
            this.style.transform = 'translateY(0) scale(1)';
        }); 
    }); 
}); 