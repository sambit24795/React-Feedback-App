const mongoose = require("mongoose");

const RecipientSchema = "./recipient";

const { Schema } = mongoose;

const surverySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = mongoose.model("Survey", surverySchema);
