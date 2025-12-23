const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")


dotenv.config();
connectDB();


const app = express();
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json())


app.get("/", (req, res) => {
    res.send("API is running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


const stockRoutes = require("./routes/stockRoutes");

app.use("/api/stocks", stockRoutes);


const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);
