const express = require('express')
const cors=require('cors')
const {MongoClient} = require('mongodb')

const app=express()
app.use(cors())
app.use(express.json())

const client= new MongoClient('mongodb+srv://admin:<admin>@cluster0.ra2vsgd.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling')
const col =db.collection('register')
col.insertOne({'student':"495"})

app.get('/', (req, res)=>{
    res.send('HELLO KLUIANS </h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1><centre> Welcome to About page </centre> </h1>')
})
app.get('/contact', (req,res)=>{
        res.send('<h1> this is contact  page </h1>')
})

app.post('/home', (req,res)=>{
    res.send('<h1> this is home  page </h1>')

})

app.listen(8080, ()=>{console.log('express server is runnig')})