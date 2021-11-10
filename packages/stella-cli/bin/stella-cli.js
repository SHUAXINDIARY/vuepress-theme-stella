#!/usr/bin/env node
const path = require('path')
const process = require('process')
const commander = require('commander')
const program = new commander.Command()
const package = require('../package.json')
const chalk = require('chalk')

const command = {
  i: 'initTemplate',
  git: 'git'
}

const commandMap = {
  // 生成模板
  [command.i]: initTemplate,
  [command.git]: addGitignore
}

const _exit = process.exit
const _argv = process.argv

program
  .name(chalk.bgBlue(chalk.white('stella')))
  .description(chalk.bgBlue(chalk.white('vuepress2.x theme cli')))
  .version(package.version)
  .option(`-i,   --${command.i}`,
    chalk.bgMagenta(chalk.white(
      'generator a vuepress using Stella theme directory')))
  .option(`-git, --${command.git}`, chalk.bgGreen(chalk.white(
    'add .gitignore')))
  .parse(_argv)

if (!_exit.exited) {
  main()
}

function main() {
  const opts = program.opts()
  const shellOpts = Object.keys(opts)
  if (shellOpts.length) {
    start(shellOpts)
  } else {
    program.outputHelp()
  }
}

function start(opts) {
  opts.forEach(opt => {
    commandMap[opt]()
  })
}

function initTemplate() {
  const destinationPath = program.args.shift() || '.'
  const docName = createAppName(destinationPath) || 'hello-stella'
  console.log('初始化模板', docName)
}

function addGitignore() {
  console.log('添加gitignore')
}

function createAppName(pathName) {
  return path.basename(pathName)
    .replace(/[^A-Za-z0-9.-]+/g, '-')
    .replace(/^[-_.]+|-+$/g, '')
    .toLowerCase()
}
