import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
  return res.json({ msg: 'this is mohan koli created by using github action' });
})

app.listen(PORT,()=>{
    console.log('Server is running');
},)
