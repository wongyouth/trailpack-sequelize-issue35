'use strict'

const Model = require('trails/model')

/**
 * @module User
 * @description TODO document Model
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema (app, Sequelize) {
    return {
      login: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }
    }
  }
}
