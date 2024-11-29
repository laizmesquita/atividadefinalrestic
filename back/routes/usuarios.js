const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

// Get all users
router.get('/', (req, res) => {
  res.json({ usuarios: usuarioRepository.findAll() });
});

// Get user by id
router.get('/:id', (req, res) => {
  const user = usuarioRepository.findById(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create a new user
router.post('/', (req, res) => {
  const user = usuarioRepository.create(req.body);
  res.json({ user });
});

// Update a user
router.put('/:id', (req, res) => {
  const user = usuarioRepository.update(req.params.id, req.body);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  const user = usuarioRepository.remove(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
