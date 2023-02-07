import express from "express";
import cartRoutes from "./routes/cart.js";
import productRoutes from "./routes/product.js";

const app = express();
const PORT = 8080;

// Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT,() => {
    console.log("Server up and running in port: " + PORT );
});