let GroceryItem = require("../models/grocery_item");

const createErrorMessage = (err) => {
    return {
        "error": err,
        "status code": 400
    };
}

const getGroceryItemByName = (req, res) => {
    const nameToFind = req.params.name;
    GroceryItem.findOne({name: nameToFind}, (err, groceryItem) => {
        console.log(groceryItem);
        if(err){
            createErrorMessage(err);
        }
        else{
            res.send({
                "grocery item": groceryItem,
                "status code": 200
            });
        }
    });
}

const getAllGroceryItems = (req, res) => {
    GroceryItem.find((err, groceryItems) => {
        if(err){
            res.send(createErrorMessage(err));
        }
        else{
            res.send({
                "grocery items": groceryItems,
                "status code": 200
            });
        }
    });
}

const deleteGroceryItemByName = (req, res) => {
    console.log(req.params.id);
}

const updateGroceryItemByName = (req, res) => {
    console.log(req.params.id);
}

const addGroceryItem = (req, res) => {
    let newGroceryItem = new GroceryItem(req.body);
    newGroceryItem.save((err) => {
        if(err){
            res.send(createErrorMessage(err));
        }
        else{
            console.log(`Saved ${newGroceryItem.quantity} of ${newGroceryItem.name} which is reoccurring ${newGroceryItem.isReoccurring}`);
            res.sendStatus(201);
        }
    });
}

module.exports = {
    getAllGroceryItems,
    getGroceryItemByName,
    deleteGroceryItemByName,
    updateGroceryItemByName,
    addGroceryItem
}