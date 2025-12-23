const express = require("express");
const { createOrder, getAllOrders, updateOrderStatus, getMyOrders } = require("../controllers/orderController");


const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);       // user
router.get("/", protect, adminOnly, getAllOrders); // admin
router.put("/:id", protect, adminOnly, updateOrderStatus);
router.get("/my", protect, getMyOrders);



module.exports = router;
