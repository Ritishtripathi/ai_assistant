let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice =document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12 ){
        speak("Good Morinig Buddy")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Buddy")
    }
     else{
        speak("Good Evening Buddy")
     }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()

recognition.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript    
content.innerText=transcript
takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="block"
     voice.style.display="none"
if(message.includes("hello")|| message.includes("hey")){
    speak("hello sir,what can i help you?")
}
else if(message.includes("who are you")){
    speak("i am virtual asistant ,created by Ritish Sir")
}
else if(message.includes("open youtube")){
   speak("opening youtube..")
   window.open("https://www.youtube.com/","_blank")
}
else if(message.includes("open facebook")){
    speak("opening facebook..")
    window.open("https://www.facebook.com/","_blank")
 }
 else if(message.includes("open google")){
    speak("opening google..")
    window.open("https://www.google.com/","_blank")
 }
 else if(message.includes("open instagram")){
    speak("opening instagram..")
    window.open("https://www.instagram.com/","_blank")
 }
 else if(message.includes("open whatsapp")){
    speak("opening whatsapp..")
    window.open("whatsapp://")
 }
 else if(message.includes("open calculator")){
    speak("opening calculator..")
    window.open("calculator://")
 }
 else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}

else if(message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
} 

 else if(message.includes("ritesh tripathi")){
    speak("this is about ritish")
    window.open("https://www.google.com/search?q=ritish+tripathi&sca_esv=c3a47625bef97c86&sca_upv=1&sxsrf=ADLYWIKERnMOII_EjUaftR4HSj8Oni4XLQ%3A1727536907181&ei=Cx_4ZsfhCuKB1e8PleaigAc&ved=0ahUKEwiHk8G9-OWIAxXiQPUHHRWzCHAQ4dUDCA8&uact=5&oq=ritish+tripathi&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3JpdGlzaCB0cmlwYXRoaTIKECMYgAQYJxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESNwQUKoBWLcOcAF4AJABAJgB1gGgAaoDqgEDMi0yuAEDyAEA-AEBmAIDoALrA8ICDRAAGIAEGLADGEMYigXCAggQABiABBiwA8ICCRAAGLADGAgYHsICDhAAGIAEGLADGIYDGIoFwgILEAAYgAQYsAMYogTCAgcQIxiwAhgnwgIHEAAYgAQYDcICCBAAGAgYDRgemAMAiAYBkAYKkgcFMS4wLjKgB5IQ&sclient=gws-wiz-serp","_blank")
 }
else{
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
}
}