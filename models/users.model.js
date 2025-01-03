const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
        },
        categories: {
            type: [String],
            default: [],
        },
        events_conducted: {
            type: [String],
            required: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required!'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            unique: true,
            sparse: true,
        },
        role: {
            type: String,
            required: [true, 'Role is required!'],
            enum: ['vendor', 'customer'],
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
        prefered_settings: {
            type: [Object],
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = new model('User', UserSchema);
