const path = require('path');
const router = require('express');

router.length('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.length('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;