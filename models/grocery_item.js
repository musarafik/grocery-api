const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;

const GroceryItemSchema = new Schema({
    "name": {
        type: String,
        index: true,
        required: true,
    },
    "quantity": {
        type: Number,
        required: true
    },
    "isReoccurring": {
        type: Boolean,
        required: true
    }
});

module.exports.GroceryItem = mongoose.model("GroceryItem", GroceryItemSchema);