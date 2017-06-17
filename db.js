const pg = require('pg');

const pool = new pg.Pool({
    host: 'ec2-54-225-68-71.compute-1.amazonaws.com',
    port: 5432,
    database: 'd4qrhr5sa3u7i9',
    user: 'tdmlbrzpddgdep',
    password: '684998fbbbe5f697ad876b385122ace24ad3bd0fd295dbe0ffb1a85561d644a1',
    max: 100,
    idleTimeoutMillis: 1000,
    ssl: true
});

function queryDB(sql, arrValue) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrValue, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

module.exports = queryDB;
