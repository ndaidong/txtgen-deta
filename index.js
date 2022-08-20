const express = require('express')
const cors = require('cors')

const { sentence, paragraph, article } = require('txtgen/dist/cjs/txtgen.js')

const app = express()

app.use(cors())

app.get('/sentence', (req, res) => {
  const result = {
    sentence: sentence()
  }
  return res.json(result)
})

app.get('/paragraph', (req, res) => {
  const result = {
    paragraph: paragraph()
  }
  return res.json(result)
})

app.get('/article', (req, res) => {
  const result = {
    article: article()
  }
  return res.json(result)
})

app.get('/', (req, res) => {
  const baseUrl = 'https://txtgen.deta.dev'
  return res.json({
    endpoints: {
      sentence: `${baseUrl}/sentence`,
      paragraph: `${baseUrl}/paragraph`,
      article: `${baseUrl}/article`
    }
  })
})

module.exports = app
