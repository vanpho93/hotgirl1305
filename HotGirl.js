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
        if (result.rows.length === 0) throw new Error('Khong tim thay duong dan');
        return result.rows[0];
    }

    async hitLike() {
        const sql = 'UPDATE public."HotGirl" SET "like"= "like" + 1 WHERE id = $1;';
        await queryDB(sql, [this.id]);
    }
}

module.exports = HotGirl;

// const a = new HotGirl(1);
// a.hitLike();
// .then(info => console.log(info))
// .catch(err => console.log(err));
