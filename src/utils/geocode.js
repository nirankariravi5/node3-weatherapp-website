const request=require('request')

const geocode=(address,callback)=>{
    const uri='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmlyYW5rYXJpcmF2aTUiLCJhIjoiY2s1amlzZWZxMDNqbDNqcWk4b29leW05NiJ9.3spkECdPLjokLB98KIP8qA'
request({uri,json:true},(error,{body})=>{
if(error){
    callback('unable to get the services',undefined)
}else if (body.features.length===0){
       callback('unable to locate the place',undefined)
    } 
     else {
         callback(undefined,{
                 latitude:body.features[4].center[0],
                 longitude:body.features[4].center[1],
                 address:address
                }
         )
    //forecast(latitude,longitude)
}
    // console.log('latitude: '+response.body.features[4].geometry.coordinates[0])
    // console.log('longitude: '+response.body.features[4].geometry.coordinates[1])
}
)}

module.exports=geocode
