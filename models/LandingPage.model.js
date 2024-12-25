const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});


const ParentSchema = new Schema({
    items: [ItemSchema],
});


const ParentModel = model('Parent', ParentSchema);

module.exports = ParentModel;
