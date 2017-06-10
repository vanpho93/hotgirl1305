const express = require('express');
const HotGirl = require('./HotGirl');

const app = express();
app.listen(3000, () => console.log('Server started'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

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
    await hotGirl.hitLike();
    res.redirect('/show/' + id);
});
