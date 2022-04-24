//Schema defines the rules that your db can accept.
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: "Please Enter your first name",
    },
    lastName: {
        type: String,
        required: "Please Enter your last name",
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})