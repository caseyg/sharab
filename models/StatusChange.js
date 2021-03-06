'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var StatusChangeSchema = new Schema({
  source: ObjectID,
  name: String,
  from: String,
  to: String,
}, {timestamps: true});

module.exports = mongoose.model('StatusChange', StatusChangeSchema);
 