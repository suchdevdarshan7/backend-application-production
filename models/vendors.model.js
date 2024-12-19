const { Schema, model, Types } = require('mongoose')

const VendorSchema = new Schema(
    {
        user_id: {
            type: Types.ObjectId,
            // required: true,
            unique: true,
            ref: 'User',
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
                        type: {
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
                                type: Boolean,
                                default: false,
                            },
                        },
                    },
                ],
            },
        ],
        analytics: [
            {
                impression: {
                    type: Number,
                    default: 0,
                },
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
        service_opted: {
            type: [String],
            required: true,
        },
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
        text_recent_enquires: {
            type: [Object],
        },
        call_recent_enquires: {
            type: [Object],
        },
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
        reviews: {
            review_message: {
                type: String,
            },
            review_score: {
                type: Number,
            },
        },
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

module.exports = new model('Vendor', VendorSchema);
