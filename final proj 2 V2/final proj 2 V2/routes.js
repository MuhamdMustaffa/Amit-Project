const express = require('express');
const router = express.Router();
const Booking = require('./bookingmodels');
const User = require('./usermodels'); 
// Book a table by username
router.post('/bookings/:username', (req, res) => {

  const { date } = req.body;
  const { username } = req.params;
  console.log('Username:', username);  
  User.findOne({ name: username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

    const booking = new Booking({ userId: user.id, date });

      booking.save()
        .then(savedBooking =>{
            user.bookings.push(savedBooking);
            user.save().then(() => res.json(savedBooking));
        }).catch(error => {
            console.error('Booking save error:', error);
            res.status(500).json({ error: 'Failed to book a table' });
          });
    })
    .catch(error => {
        console.error('User find error:', error); // Log the error
        res.status(500).json({ error: 'Failed to find user' });
      });
});

// Get bookings for a user
router.get('/bookings/:username', (req, res) => {

  const { username } = req.params; 
  User.findOne({ name: username })
    .populate('bookings') 
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user.bookings);
    })
    .catch(error => res.status(500).json({ error: 'Failed to find user' }));
});

// view user profile
router.put('/profile', (req, res) => {
  
    const { name, email } = req.body;
  
    User.findOne({ name: name })
        .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        user.name = name || user.name;
        user.email = email || user.email;
  
        user.save()
          .then(updatedUser => {
            res.json({ message: 'Profile updated successfully', user: updatedUser });
          })
          .catch(error => {
            res.status(500).json({ error: 'Failed to update profile' });
          });
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to find user' });
      });
  });

module.exports = router;