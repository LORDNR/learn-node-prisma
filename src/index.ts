import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'

import config from './config'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello World! test webhook!',
    })
})

app.listen(config.environments.port, () =>
    console.log(`http://localhost:${config.environments.port}`)
)
