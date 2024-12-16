const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');
router.post('/Product', async (req, res) => {
    try {
        console.log(req.body);
        const Product = new Product(req.body);
        const savedProduct = await Product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/Product', async (req, res) => {
    try {
        const Product = await Product.find();
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/Product/:id', async (req, res) => {
    try {
        const Product = await Product.findById(req.params.id);
        if (!Product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.put('/Product/:id', async (req, res) => {
    try {
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.delete('/Product/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;












