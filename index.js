const express = require('express')
const {application} = require("express");
const app = express()

app.get('/hello',(req, res) => {
    res.send('ga')
})

app.listen(3000, () => console.log('サーバ＝を起動しました'))