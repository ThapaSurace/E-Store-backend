import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/e-store')
    } catch (error) {
        console.log(error)
    }
}