const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)
console.log(validator.isURL('https://ss.io'))
console.log(chalk.green.inverse.bold('Success!'))