const path=require('path')
const express=require('express')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 3000
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
app.set('view engine','hbs')
const publicdirectory=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.use(express.static(publicdirectory))
app.set('views',viewpath)
hbs.registerPartials(partialpath)
app
app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        name:'Ravi'
    })
})
app.get('/about',(req,res)=>{
  res.render('about',{
       title:'ravi',
       name:'ravi pratap singh'
})
})
app.get('/help',(req,res)=>{
    res.render('help',{
        msg:'this is helping message',
        title:'helping page',
        name:'Ravi Pratap Singh'

    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide a address'
        })
    }
    const address=req.query.address
    geocode(address,(error,{latitude,longitude,address}={})=>{
        if(error){
            return res.send({error:error})}
            else{
                forecast(latitude,longitude,address,(error,data)=>{
                if(error){
                    return res.send({error:error})}
                    
                else{
                    return res.send(data)}
                         })}
    
            })
      
   
})
app.get('*',(req,res)=>{
    res.render('404',{
        msg:'404 page not found',
        title:'404',
        name:'Ravi Pratap Singh'
    })
})
app.listen(port,()=>{
    console.log('server is on at port'+ port)
})