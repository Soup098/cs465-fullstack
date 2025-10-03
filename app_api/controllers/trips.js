const mongoose = require('mongoose')
const Trip = require('../models/travlr') //register model
const Model = mongoose.model('trips')

//GET: /trips - lists all the trips
//regardless of outcome, response must include HTML status code
//and JSON message to the requesting client
const tripsList = async(req,res) => {
    const q = await Model
        .find({}) //no filter, return all records
        .exec()

        //uncommont the following line to show query results
        //console.log(q)
    
        if(!q){//Database4 returned no data
            return res
                .status(404)
                .json(err)
        }else{//return resulting trips list
            return res
                .status(200)
                .json(q)
        }
}

const tripsFindByCode = async(req,res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) //return single record
        .exec()

        //uncommont the following line to show query results
        //console.log(q)
    
        if(!q){//Database4 returned no data
            return res
                .status(404)
                .json(err)
        }else{//return resulting trips list
            return res
                .status(200)
                .json(q)
        }
}

module.exports = {
    tripsList,
    tripsFindByCode
}