import express from 'express'
import cors from 'cors'
import ConnectDB from './config/db.js'
import enrollRoutes from './routes/enroll.route.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

ConnectDB();
app.use("/course",enrollRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});