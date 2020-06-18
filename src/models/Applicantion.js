/**
 * Created by ex90rts on 6/5/16.
 */
'use strict';

const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Application = new Schema({
    customerName: { type: String, index: { unique: true, dropDups: true } },
    customerEmail: { type: String },
    taxId: { type: Number },
    TIN: { type: Number },
    belongsTo: { type: String },
    address: { type: String },
    owner: { type: String },
    telephone: { type: String },
    contactPerson: { type: String },
    contactPhone: { type: String },
    machineCount: { type: Number },
    startDate: { type: Date },
    transportType: { type: String },
    einvoiceType: { type: String },
    applicationAt: { type: Date, default: Date.now },
    applicationAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now, index: true },
    updatedAt: { type: Date, default: Date.now, index: true },
});

Application.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

//创建模型
const model = mongoose.model('Application', Application);

module.exports = model;
