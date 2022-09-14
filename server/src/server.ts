import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 1,
      name: 'Valorant'
    },
    {
      id: 2,
      name: 'Counter-Strike'
    },
    {
      id: 3,
      name: 'Dota 2'
    },
    {
      id: 4,
      name: 'League of Legends'
    }
  ])
})

app.listen(3333)