import express from 'express'
import navigate from './routes/userRouter.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5007',
    credentials:true
}))
app.use('/',navigate)

const port = 5007

app.listen(port, () => {
    console.log('http://localhost:'+port); 
})