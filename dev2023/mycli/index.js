#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list')
const contacts = require('./commands/contacts')

program
    .command('list')
    .description('List all the available modules to interact with')
    .action(list);
program
    .command('contacts')
    .description('Output the test function from neighbor module.')
    .action(contacts);

program.parse();

