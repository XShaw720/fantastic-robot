import 'dotenv/config'
import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error){
        console.error('MongoDb connection error:', error)
    }
}

export default connectDB;
