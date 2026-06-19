import mongoose from "mongoose";

const DBconnect =  async () => {
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoDB connected !! ${db.connection.host}`)
    }catch{
        console.log("error connectiong mongo db")
        process.exit(1)

    }

}

export default DBconnect;