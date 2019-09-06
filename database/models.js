const db = require('./index.js');

db
    .query(
        'CREATE TABLE IF NOT EXISTS classes(\
        school VARCHAR(20),\
        subject VARCHAR(5),\
        courseNum VARCHAR(5),\
        title VARCHAR(30),\
        description VARCHAR(1000),\
        units SMALLINT,\
        termType VARCHAR(10),\
        price VARCHAR(5),\
        startDate date,\
        endDate DATE)'
    )
    .then(() => {
        console.log('CLASS TABLE CREATED');
        db.end();
    })
    .catch((err) => {
        console.log('There was an error: ' + err);
        db.end()
    })