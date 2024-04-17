import express from 'express'
import cors from 'cors'
import ConnectDB from './config/db.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

ConnectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
