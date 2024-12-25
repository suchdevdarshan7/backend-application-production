const { Schema, model } = require('mongoose');


const RoleSubCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    multiSelect: {
        type: Boolean,
        required: true,
    },
    categories: [{
        type: String,
        required: true,
    }],
});


const RoleSchema = new Schema({
    roleName: {
        type: String,
        required: true,
    },
    roleImage: {
        type: String,
        required: true,
    },
    roleSubCategory: {
        type: RoleSubCategorySchema,
        required: true,
    },
});

const Roles = model('Roles', RoleSchema);

module.exports = Roles;
