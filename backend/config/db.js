import { MONGODB_URL } from './envvars.js';
import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const con = await mongoose.connect(MONGODB_URL);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error){
        console.error('MongoDb connection error:', error)
    }
}

export default connectDB;
