const path = require('path');
const router = require('express').Router();

// Since we have a two-page application, the expected behavior is for /notes to open the notes.html
// For all other requests, the user will be on the index.html homepage
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;