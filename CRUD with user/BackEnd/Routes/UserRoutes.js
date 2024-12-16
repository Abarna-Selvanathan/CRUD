const express = require('express');
const router = express.Router();
const User = require('../Models/User');
router.post('/User', async (req, res) => {
    try {
        console.log(req.body);
        const USer = new User(req.body);
        const savedUser = await User.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/User', async (req, res) => {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/User/:id', async (req, res) => {
    try {
        const User = await User.findById(req.params.id);
        if (!User) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.put('/User/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.delete('/User/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;












