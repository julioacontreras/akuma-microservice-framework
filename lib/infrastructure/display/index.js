"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printError = exports.printAction = exports.printStartService = exports.printStartServer = void 0;
var chalk = require('chalk');
var printStartServer = function (serverName) {
    console.info(' ');
    console.info(' ' + chalk.hex('#DEADED')(serverName));
    console.info(' ' + chalk.hex('#DEADED')('--------------------------------'));
};
exports.printStartServer = printStartServer;
var printStartService = function (title, description) {
    console.info(" " + title + ": " + description);
};
exports.printStartService = printStartService;
var printAction = function (title, description) {
    console.info(" " + title + ": " + chalk.hex('#DEADED')(description));
};
exports.printAction = printAction;
var printError = function (title, details) {
    console.info(" " + chalk.red(title) + ": " + details);
};
exports.printError = printError;
