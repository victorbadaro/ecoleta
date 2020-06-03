import express, { json } from 'express'

const app = express()

app.use(express.json())



const users = [
    'Diego',   // 0
    'Cleiton', // 1 
    'Robson',  // 2
    'Daniel'   // 3
]

app.get('/users', (request, response) => {
    const search = String(request.query.search)
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users

    // JSON
    response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)

    return response.json(users[id])
})

app.post('/users', (request, response) => {
    const data = request.body
    
    const user = {
        name: data.name,
        email: data.email
    }

    // Para retornar uma resposta para o front-end pode executado o response.methodName('someThingHere').
    // Mas é sempre bom colocar um return nessa linha. Assim o processamento da nossa requisição para forçadamente nessa linha.
    // Ou seja, caso não for colocado o return, os códigos após o response.methodName(...) continuarão sendo executados.
    return response.json(user)
})

app.listen(3333)