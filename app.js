
import express from 'express'
import bodyParser from 'body-parser'
import userrouter from './api/routes/usersRouter'
import studentrouter from './api/routes/studentRouter'
import * as auth from './api/Middleware/auth'

var app = express()
const port = 3000
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/login', auth.getToken)
app.use('/api/v1/user', userrouter)
app.use('/api/v1/student/', studentrouter)

app.get('/', (req, res) => res.send('welocme to Admission Processing App'))
app.listen(port, () => console.log(` server is runing  on port ${port}!`))
export default app

// model:generate --name User --attributes userName:string,email:string,password:string
// sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p
