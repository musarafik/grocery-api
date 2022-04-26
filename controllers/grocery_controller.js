let GroceryItem = require("../models/grocery_item");

const getGroceryItemById = (req, res) => {
    console.log(req.params.id);
}

const getAllGroceryItems = (req, res) => {
    console.log("need to implement");
}

const deleteGroceryItemById = (req, res) => {
    console.log(req.params.id);
}

const updateGroceryItemById = (req, res) => {
    console.log(req.params.id);
}

const addGroceryItem = (req, res) => {
    console.log(req.body);
    // let newGroceryItem = new GroceryItem.GroceryItem({
    //     name: req.body.name,
    //     quantity: req.body.quantity,
    //     isReoccurring: req.body.isReoccurring,
        
    // });
    let newGroceryItem = new GroceryItem.GroceryItem(req.body);
    newGroceryItem.save((err) => {
        if(err){
            console.error(err);
            res.send({
                "error": err,
                "status code": 400
            });
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