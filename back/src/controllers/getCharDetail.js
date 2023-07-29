const URL = 'https://rickandmortyapo.com/api/character/';
const KEY= '7b3900ebf212.09a5fbfae83932ed306d';
const URL_BASE= 'https://be-a-rym.up.railway.app/api';
const axios = require('axios');

const getCharDetail = (req, res) =>{
    const {id} = req.params;
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response =>{
        const {id, name, species, image, gender, origin} = response.data;
            res.status(200).json({id, name, species, image, gender, origin});
    }).catch((error)=>{
        res.status(500).json({error: error.message})
    })
}

module.exports = getCharDetail;