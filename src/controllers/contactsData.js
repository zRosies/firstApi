
const mongodb = require("../db/connection");
const { ObjectId } = require('mongodb'); // another object I know nothing about it ;--;

const getAllData = async (req, res, next)=>{

    const result= await mongodb.getDb().db().collection("contacts").find().toArray();

    try{
        if(result.length === 0){
            res.status(404).json({message : "no data found"})
        }
        else{
            res.setHeader("Content-Type","application/json");
            res.status(200).json(result) // it's supposed to display everything since I haven't chosen an array index
        }
    }
    
    catch(error){
        console.log("Error querying the database:" , error);
        res.status(500).json({message: "internal server error"});

    }
}

const getSingleData = async (req, res, next)=>{
    try {
        const userId = new ObjectId(req.params.id); // Convert the parameter to ObjectId
        const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId }).toArray();
    
        if (result.length === 0) {
          res.status(404).json({ message: "No data found" });
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(result); // Return the first document in the array
        }
      } catch (error) {
        console.error("Error querying the database:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    
   
}

module.exports={
    getAllData,
    getSingleData
}