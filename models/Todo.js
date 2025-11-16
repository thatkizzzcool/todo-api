import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const todoSchema = new mongoose.Schema({
    ID: {
        type: String, 
        unique: true,
        default: () => `T-${uuidv4().slice(0, 8).toUpperCase()}`
    },
    profession: { type: String, required: true, trim: true },
    day: { type: String, required: true },
    plan: { type: String, required: true },
    completed: { type: Boolean, default: false }
}, { timestamp: true });

export default mongoose.model("Todo", todoSchema);