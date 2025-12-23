const Order = require("../models/Order");

// USER: Create order
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      items: req.body.items,
      totalAmount: req.body.totalAmount
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ADMIN: Get all orders
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// ADMIN: Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// USER: Get my orders
exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
};
