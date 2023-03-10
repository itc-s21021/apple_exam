const express = require('express')
const {application} = require("express");
const app = express()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
module.exports = prisma

const session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET
}))

app.use(express.json())

const authRouter = require('./routes/auth')



app.use(authRouter)


app.listen(3000, () => console.log('サーバ＝を起動しました'))