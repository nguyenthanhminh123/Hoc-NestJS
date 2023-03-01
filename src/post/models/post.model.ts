import { Schema } from 'mongoose';

const PostSchema = new Schema(
    {
        title: String,
        description: String,
        content: String
    }
)