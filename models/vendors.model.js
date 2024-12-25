const { Schema, model, Types } = require('mongoose');


const VendorSchema = new Schema(
    {
        user_id: {
            type: Types.ObjectId,
            unique: true,
            ref: 'Users',
            required: true,
        },
        categories: [
            {
                category_name: {
                    type: String,
                    required: true,
                },
                sub_services: [
                    {
                        sub_service_name: {
                            type: String,
                            required: true,
                        },
                        packages: {
                            basic: {
                                price: {
                                    type: Number,
                                    required: true,
                                },
                                includes: {
                                    type: [String],
                                    required: true,
                                },
                            },
                            standard: {
                                price: {
                                    type: Number,
                                },
                                includes: {
                                    type: [String],
                                },
                            },
                            premium: {
                                price: {
                                    type: Number,
                                },
                                includes: {
                                    type: [String],
                                },
                            },
                            description: {
                                type: String,
                            },
                            images: {
                                type: [String],
                            },
                            published: {
                                type: Date,
                            },
                        },
                    },
                ],
            },
        ],
        analytics: [
            {
                clicks: {
                    type: Number,
                    default: 0,
                },
                overall_rating: {
                    type: Number,
                    default: 0,
                },
                inquires: {
                    type: Number,
                    default: 0,
                },
            },
        ],
        about: {
            type: String,
        },
        location: {
            type: String,
            required: true,
            enum: [
                'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
                'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
                'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam',
                'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram',
                'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur',
                'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur',
                'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore',
                'Viluppuram', 'Virudhunagar',
            ],
        },
        prefered_customer_location: {
            type: [String],
            required: true,
            default: function () {
                return [this.location];
            },
        },
        verified: {
            type: Boolean,
            default: false,
        },
        call_recent_enquires: [
            {
                user: {
                    type: Types.ObjectId,
                    ref: 'Users',
                },
                date: {
                    type: Date,
                },
                time: {
                    type: Date,
                },
                phoneNumber: {
                    type: String,
                },
            },
        ],
        text_recent_enquires: [
            {
                user: {
                    type: Types.ObjectId,
                    ref: 'Users',
                },
                date: {
                    type: Date,
                },
                time: {
                    type: Date,
                },
                phoneNumber: {
                    type: String,
                },
                location: {
                    type: String,
                },
                eventDate: {
                    type: Date,
                },
            },
        ],
        work_proof: [
            {
                type: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                    required: true,
                },
            },
        ],
        reviews: [
            {
                review_message: {
                    type: String,
                },
                review_score: {
                    type: Number,
                },
            },
        ],
        total_reviews: {
            type: Number,
            default: 0,
        },
        avg_rating: {
            type: Number,
            default: 0.0,
        },
        availability: {
            unavailable_dates: {
                type: [Date],
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('Vendor', VendorSchema);
