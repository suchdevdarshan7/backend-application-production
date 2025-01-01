const { Schema, model, Types } = require('mongoose');


const VendorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },

        // uuid: {
        //     type: String,
        //     required: true,
        // },
        categories: [
            {
                category_name: {
                    type: String,

                },
                sub_services: [
                    {
                        sub_service_name: {
                            type: [String],

                        },
                        packages: {
                            basic: {
                                price: {
                                    type: Number,
                                },
                                includes: {
                                    type: [String],

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
        },
        prefered_customer_location: {
            type: [String],
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
                },
                link: {
                    type: String,
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
