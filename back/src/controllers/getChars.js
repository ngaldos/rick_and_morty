const axios = require('axios');
const KEY= '7b3900ebf212.09a5fbfae83932ed306d';
const URL_BASE= 'https://be-a-rym.up.railway.app/api';

const getChars = async (req, res)=>{
        await axios.get (`${URL_BASE}/character/?key=${KEY}`)
        .then((response)=>{
            res.status(200, {characters: response}).json();
        }).catch(res.status(409).json({error: 'La cagueee'}));
            

}

module.exports = getChars;