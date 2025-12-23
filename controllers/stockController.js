const Stock = require("../models/Stock");

// ADMIN: Add Stock
exports.createStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    res.status(201).json(stock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ADMIN: Update Stock
exports.updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(stock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ADMIN: Delete Stock
exports.deleteStock = async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.json({ message: "Stock removed" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// USER: Get All Stocks
exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// USER: Get Single Stock
exports.getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    res.json(stock);
  } catch (error) {
    res.status(404).json({ message: "Stock not found" });
  }
};
