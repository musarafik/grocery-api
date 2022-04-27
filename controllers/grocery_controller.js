let GroceryItem = require("../models/grocery_item");

const errorMessage = (err) => {
    return {
        "error": err,
        "status code": 400
    };
}

const getGroceryItemById = (req, res) => {
    console.log(req.params.id);
}

const getAllGroceryItems = (req, res) => {
    GroceryItem.find((err, groceryItems) => {
        if(err){
            res.send(errorMessage(err));
        }
        else{
            res.send({
                "grocery items": groceryItems,
                "status code": 200
            });
        }
    });
}

const deleteGroceryItemById = (req, res) => {
    console.log(req.params.id);
}

const updateGroceryItemById = (req, res) => {
    console.log(req.params.id);
}

const addGroceryItem = (req, res) => {
    let newGroceryItem = new GroceryItem(req.body);
    newGroceryItem.save((err) => {
        if(err){
            res.send(errorMessage(err));
        }
        else{
            console.log(`Saved ${newGroceryItem.quantity} of ${newGroceryItem.name} which is reoccurring ${newGroceryItem.isReoccurring}`);
            res.sendStatus(201);
        }
    });
}

module.exports = {
    getAllGroceryItems,
    getGroceryItemById,
    deleteGroceryItemById,
    updateGroceryItemById,
    addGroceryItem
}