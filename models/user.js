/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      name: DataTypes.TEXT,
      password: DataTypes.TEXT,
  }, {
  });
  return User;
};