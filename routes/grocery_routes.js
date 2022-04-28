const express = require("express");
const router = express.Router();

const {
    getGroceryItemByName,
    getAllGroceryItems,
    addGroceryItem,
    deleteGroceryItemByName,
    updateGroceryItemByName
} = require("../controllers/grocery_controller");

router.get("/groceryitems/:name", getGroceryItemByName);

router.get("/groceryitems", getAllGroceryItems);

router.post("/groceryitems", addGroceryItem);

router.delete("/groceryitems/:name", deleteGroceryItemByName);

router.put("/groceryitems/:name", updateGroceryItemByName);

module.exports = router;