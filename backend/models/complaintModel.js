// models/complaintModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');

const Complaint = sequelize.define('Complaint', {
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
});

module.exports = Complaint;
