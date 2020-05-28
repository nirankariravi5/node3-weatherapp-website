




 console.log('client side script is loaded')

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message1')
const messagetwo=document.querySelector('#message2')


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageone.textContent='weather forecast '
    messagetwo.textContent='data loading....'
    fetch('http://localhost:3000/weather?address='+search.value+'').then((response)=>{
  response.json().then((data)=>{
      if(data.error){
         messagetwo.textContent=data.error
      }else{
        messagetwo.textContent='Summary:  '+data.summary+'Temperature:  '+data.temperature+' degree celsius  Rain chances:  '+data.rain+'% Location:  '+data.location
       
    }
  })
})
   
})