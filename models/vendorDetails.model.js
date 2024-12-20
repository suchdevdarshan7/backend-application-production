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
        default: [
            'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
            'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
            'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam',
            'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram',
            'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur',
            'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur',
            'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore',
            'Viluppuram', 'Virudhunagar',
        ],
    }
})

module.exports = new model('Roles', RoleSchema);