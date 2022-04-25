const express = require("express");
const router = express.Router();

const {
    getGroceryItemById,
    getAllGroceryItems,
    addGroceryItem,
    deleteGroceryItemById,
    updateGroceryItemById
} = require("../controllers/grocery_controller");

router.get("/groceryitems/:id", getGroceryItemById);

router.get("/groceryitems", getAllGroceryItems);

router.post("/groceryitems", addGroceryItem);

router.delete("/groceryitems/:id", deleteGroceryItemById);

router.put("/groceryitems/:id", updateGroceryItemById);

module.exports = router;