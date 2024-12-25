const { Schema, model, models } = require('mongoose');

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
    location: {
        type: String,
        enums: [
            'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
            'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
            'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam',
            'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram',
            'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur',
            'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur',
            'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore',
            'Viluppuram', 'Virudhunagar'
        ]
    },
    roleSubCategory: {
        type: RoleSubCategorySchema,
        required: true,
    },
});

const Roles = models.Roles || model('roles', RoleSchema);

module.exports = Roles;
