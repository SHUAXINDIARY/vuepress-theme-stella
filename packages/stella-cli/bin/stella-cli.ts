#!/usr/bin/env node

const path = require("path");
// @ts-ignore
const process = require("process");
const readline = require("readline");
const fs = require("fs");
const { createCommand } = require("commander");
const program = createCommand();
const package = require("../package.json");
const chalk = require("chalk");
const mkdirp = require("mkdirp");

// 命令映射
const command = {
  i: "initTemplate",
  git: "git",
};

// 命令函数映射
const commandMap = {
  // 生成模板
  [command.i]: initTemplate,
  [command.git]: addGitignore,
};

const _exit = process.exit;
const _argv = process.argv;

// 命令行交互
program
  .name(chalk.bgBlue(chalk.white("stella")))
  .description(chalk.bgBlue(chalk.white("vuepress2.x theme cli")))
  .version(package.version)
  .option(
    `-i,   --${command.i}`,
    chalk.bgMagenta(
      chalk.white("generator a vuepress using Stella theme directory")
    )
  )
  .option(
    `-git, --${command.git}`,
    chalk.bgGreen(chalk.white("add .gitignore"))
  )
  .parse(_argv);

if (!_exit.exited) {
  main();
}

// 执行入口
function main() {
  const opts = program.opts();
  const shellOpts = Object.keys(opts);
  if (shellOpts.length) {
    start(shellOpts);
  } else {
    program.outputHelp();
  }
}

// 根据命令执行对应函数
function start(opts) {
  opts.forEach(opt => {
    commandMap[opt]();
  });
}

function initTemplate() {
  const destinationPath = program.args.shift() || ".";
  const docName = createAppName(destinationPath) || "hello-stella";
  emptyDirectory(destinationPath, function (empty) {
    if (empty || program.force) {
      createApplication(docName, destinationPath);
    } else {
      confirm("destination is not empty, continue? [y/N] ", function (ok) {
        if (ok) {
          process.stdin.destroy();
          createApplication(docName, destinationPath);
        } else {
          console.error("aborting");
        }
      });
    }
  });
}

function addGitignore() {
  console.log("添加gitignore");
}

// 格式化目录名
function createAppName(pathName) {
  return path
    .basename(pathName)
    .replace(/[^A-Za-z0-9.-]+/g, "-")
    .replace(/^[-_.]+|-+$/g, "")
    .toLowerCase();
}

// 创建模板
function createApplication(appName, dir) {
  console.log("初始化模板");
  console.log(appName);
  console.log(dir);
  const pkg = {
    name: appName,
    version: "0.0.0",
    private: true,
    dependencies: {
      vuepress: "2.0.0-beta.26",
      "vuepress-theme-stella": "^1.0.5",
    },
  };
  mkdirp.sync(appName, parseInt("0755", 8));
}

// 判断是否为空目录
function emptyDirectory(dir, fn) {
  fs.readdir(dir, function (err, files) {
    if (err && err.code !== "ENOENT") throw err;
    fn(!files || !files.length);
  });
}

function confirm(msg, callback) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(msg, function (input) {
    rl.close();
    callback(/^y|yes|ok|true$/i.test(input));
  });
}
