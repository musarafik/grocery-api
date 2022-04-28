let GroceryItem = require("../models/grocery_item");

const getGroceryItemByName = (req, res) => {
    const nameToFind = req.params.name;
    GroceryItem.findOne({name: nameToFind}, (err, groceryItem) => {
        console.log(groceryItem);
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send("Got grocery item");
        }
    });
}

const getAllGroceryItems = (req, res) => {
    GroceryItem.find((err, groceryItems) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send("Got all grocery items");
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
            res.status(400).send(err);
        }
        else{
            res.status(201).send("Saved grocery item");
        }
    });
}

const deleteAllGroceryItems = (req, res) => {
    GroceryItem.deleteMany({}, (err) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send("Deleted all grocery items");
        }
    });
}

module.exports = {
    getAllGroceryItems,
    getGroceryItemByName,
    deleteGroceryItemByName,
    updateGroceryItemByName,
    addGroceryItem,
    deleteAllGroceryItems
}