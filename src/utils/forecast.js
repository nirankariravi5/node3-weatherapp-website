const request=require('request')
const forecast=(latitude,longitude,address,callback)=>{
     const url= 'https://api.darksky.net/forecast/166285ec1b310fcb9490ea46c7d81507/'+longitude+','+latitude+'?units=si&lang=en'
     request({url,json:true},(error,{body})=>{
        
         if(error){
            callback('unable to get service',undefined)
        }
      else if(body.error) {
          callback({error:body.error},undefined)
      }else {
     callback(undefined,{summary:body.daily.data[0].summary,
        temperature:body.currently.temperature,
        rain:body.currently.precipIntensity,
    location:address
    })
         } })
}
module.exports=forecast