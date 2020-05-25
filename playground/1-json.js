const fs = require('fs')
// const book = {
//     title : 'Adadadad',
//     author: 'Ador'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// console.log(JSON.parse(bookJSON).author)

// fs.writeFileSync('1-jason.json', bookJSON)

// const file = fs.readFileSync('1-jason.json')
// console.log(file.toString())

const dataJSON = fs.readFileSync('1-jason.json').toString()
const user = JSON.parse(dataJSON)

user.name = 'nines'
user.age = 26

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-jason.json',userJSON)