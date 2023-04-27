const express = require('express')
const app = express()
const path = require('path')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '451a6efd8c8d4f41bf77006732325cda',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())

const students = ['Jimmy', 'Timothy', 'Jimothy']

rollbar.log('site has been deployed')

app.get('/', (req, res) => {
    rollbar.log("site has been visited")
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/students', (req, res) => {
    rollbar.info("list of students sent")
    res.status(200).send(students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body

   const index = students.findIndex(student => {
       return student === name
   })

   try {
       if (index === -1 && name !== '') {
           students.push(name)
           res.status(200).send(students)
       } else if (name === '') {
           rollbar.error("attempted blank name")
           res.status(400).send('You must enter a name.')
       } else {
           rollbar.error("attempted duplicate name")
           res.status(400).send('That student already exists.')
       }
   } catch (err) {
       console.log(err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
