/* eslint-env es6,node */
/* global module */

const readFileSync = require("fs").readFileSync
const yaml = require("js-yaml")

module.exports = yaml.safeLoad(readFileSync("./config.yml")) || {}
