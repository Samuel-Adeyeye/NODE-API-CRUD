const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const dotenv = require("dotenv")
dotenv.config()
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get('/', (req, res) => {
    res.send('Hello Node API');
});

/* GET ALL PRODUCTS */
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

/* GET ONE PRODUCT */
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error.message });
    }
});

/* GET PRODUCTS */
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


/* UPDATE A PRODUCT */

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // We cannot find the product in the database
        if (!product) {
            return res.status(400).json({ message: `Cannot find any product with ID ${id}` });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

/* DELETE A PRODUCT */
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose.
    connect(`${process.env.MONGODB_URI}`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Node API app is running on port 3000');
        });
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log(error);
    });