const aiService = require('./ai.service') ; 

const getResponse = async (req , res) => {

    const code = req.body.code ; 
    const no = req.body.no ; 
    const flag = req.body.flag ; 
    const diff = req.body.diff ; 

    if(!code){
        return res.status(400).send("Input is required") ; 
    }

    const response = await aiService(code , no , flag  , diff ) ; 

    res.send(response) ; 

}


module.exports = getResponse ; 