import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
  return res.json({ msg: 'This is mohan koli' });
})

app.listen(PORT,()=>{
    console.log('Server is running');
},)
