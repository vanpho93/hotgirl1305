const express = require('express');
const HotGirl = require('./HotGirl');

const app = express();
app.listen(process.env.PORT || 3000, () => console.log('Server started'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('a'));

app.get('/show/:id', async (req, res) => {
    const { id } = req.params; 
    const hotGirl = new HotGirl(id);
    try {
        const info = await hotGirl.getInfo();
        res.render('home', info);
    } catch (err) {
        res.send(err.toString());
    }
});

app.get('/like/:id', async (req, res) => {
    const { id } = req.params;
    const hotGirl = new HotGirl(id);
    const like = await hotGirl.hitLike();
    res.send(like + '');
});
