const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')
const yargs = require('yargs')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing the note!')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list all the note',
    handler: function(){
        console.log('listing all the note!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('reading the note!')
    }
})

console.log(yargs.argv)