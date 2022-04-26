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
    },
    "frequency": {
        type: Number,
        required: function () {return this.isReoccurring}
    },
    "source": {
        type: String,
        required: true,
        enum: ["Kroger", "HEB", "Walmart", "Trader Joe's", "Meijer", "Whole Foods", "Target", "Other"]
    },
    "dateSubmitted": {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports.GroceryItem = mongoose.model("GroceryItem", GroceryItemSchema);