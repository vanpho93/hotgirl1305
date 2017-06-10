const queryDB = require('./db');

class HotGirl {
    constructor(id, name, image, like, dislike) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.like = like;
        this.dislike = dislike;
    }

    async getInfo() {
        const sql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        const result = await queryDB(sql, [this.id]);
        return result.rows[0];
    }
}

module.exports = HotGirl;

// const a = new HotGirl(1);
// a.getInfo()
// .then(info => console.log(info))
// .catch(err => console.log(err));
