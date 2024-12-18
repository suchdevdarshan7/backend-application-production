const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
        },
        categories: {
            type: [String], // Fixed: Use array of strings for categories
            default: [], // Optional: Default to an empty array
        },
        events_conducted: { // Fixed: Missing colon after key
            type: [String], // Ensures it's an array of strings
            required: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required!'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required!'],
        },
        phone: {
            type: String,
            unique: true,
            sparse: true,
        },
        role: {
            type: String,
            required: [true, 'Role is required!'],
            enum: ['vendor', 'customer'], // Enforces specific role values
        },
        location: {
            type: String,
            default: '',
        },
        verified: {
            type: Boolean,
            default: false,
        },
        profile_image: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('User', UserSchema);
