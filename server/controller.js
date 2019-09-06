const db = require('../database/index.js');

module.exports = {
    get: (req, res) => {
        db
            .query(`
            SELECT * FROM classes
            ORDER BY random()
            LIMIT 50
            `)
            .then(data => {
                res.status(200).send(data.rows);
            })
            .catch(err => res.status(404).send(err));
    }
}