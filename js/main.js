$(document).ready(function() {

const button = document.querySelector('.talk')
const content = document.querySelector('.content')
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const SpeechRecognition = window.SpeechRecognition

const abu = 'abu'

if ('SpeechRecognition' in window) {
    // speech recognition API supported
    console.log('radi')
} else {
// speech recognition API not supported
console.log('ne radi')
}

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('start talking')
}

recognition.onresult = function(event){
    const current = event.resultIndex
    
    const transcript = event.results[current][0].transcript
    content.textContent = transcript

    readOutLoud(transcript)
}

$('.talk').click(function(){
    recognition.start()
})

/* button.addEventListener('click', () => {
    recognition.start()
}) */

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()

    if(message.includes('how')){
        const final = abu
        speech.text = final
        console.log('abu')
    }else{
        console.log('ostalo')
        speech.text = message
    }

    
    speech.volume = 1
    speech.rate = 0.8

    window.speechSynthesis.speak(speech)
}


})