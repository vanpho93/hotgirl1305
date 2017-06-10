const queryDB = require('./db');

class HotGirl {
    constructor(id, name, image, like, dislike) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.like = like;
        this.dislike = dislike;
    }

    getInfo() {
        const sql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        return queryDB(sql, [this.id]);
    }
}

const a = new HotGirl(1);
a.getInfo()
.then(result => console.log(result.rows[0]))
.catch(err => console.log(err));
