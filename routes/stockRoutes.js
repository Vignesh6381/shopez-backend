const express = require("express");
const {
  createStock,
  updateStock,
  deleteStock,
  getStocks,
  getStockById
} = require("../controllers/stockController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// PUBLIC
router.get("/", protect, getStocks);
router.get("/:id", protect, getStockById);

// ADMIN
router.post("/", protect, adminOnly, createStock);
router.put("/:id", protect, adminOnly, updateStock);
router.delete("/:id", protect, adminOnly, deleteStock);

module.exports = router;
