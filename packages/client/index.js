const express = require('express');

const app = express();

const printContent = (data)=>{
    console.log(`i'm from client ans data is ${data}`);
}

module.exports = printContent;