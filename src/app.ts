import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import starwarsRoutes from './routes/starwars.routes'

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors());


//starwars API
app.use('/starwars', starwarsRoutes)

export default app;