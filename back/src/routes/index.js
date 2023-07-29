const {Router} = require ('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getChars = require ('../controllers/getChars.js');
const routerFavs = require ('./routerFavs');

const router = Router();

router.get('/', (req, res)=>{
    res.status(200).json({hola: true})
})

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)

router.get('/characters', getChars)

router.post('/characters/fav', (req, res)=>{
    console.log(req.body);
})
router.post('/characters', (req, res)=>{
    console.log(req.body);
})

router.use('/rickandmorty/favs', routerFavs)

module.exports = router;