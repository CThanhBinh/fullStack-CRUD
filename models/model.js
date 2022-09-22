const dbConfig = require('../app/config/config.js')

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const Tutorial = sequelize.define('Tutorial',{
  title: {
   type: DataTypes.TEXT,
    allowNull: false
  },
  description: DataTypes.TEXT,
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
},{
  tableName: 'tutorials',
  timestamps: false
})

const db = {
  sequelize: sequelize, 
  Tutorial: Tutorial
}

module.exports = db;
