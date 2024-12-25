const { Schema, model } = require('mongoose');

const RoleSchema = new Schema({
    name: {
        type: [String],
        required: true,
    },
    imageUrl: {
        type: [String],
        required: true,

    },
    eventsOffered: {
        type: [String],
        required: true,

    },
    location: {
        type: [String],
        required: true,
        unique: true,
    }
})

module.exports = new model('Roles', RoleSchema);