const { Schema, model, Types } = require('mongoose');

const VendorSchema = new Schema(
    {
        user_id: {
            type: Types.ObjectId,
            required: true,
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
                                    type: String,
                                    required: true,
                                },
                            },
                            standard: {
                                price: {
                                    type: Number,
                                },
                                includes: {
                                    type: String,
                                },
                            },
                            premium: {
                                price: {
                                    type: Number,
                                },
                                includes: {
                                    type: String,
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
        about: {
            type: String,
        },
        location: {
            type: String,
        },
        verified: {
            type: Boolean,
            default: false,
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
            total_reviews: {
                type: Number,
                default: 0,
            },
            avg_rating: {
                type: Number,
                default: 0.0,
            },
            stars: {
                5: { type: Number, default: 0 },
                4: { type: Number, default: 0 },
                3: { type: Number, default: 0 },
                2: { type: Number, default: 0 },
                1: { type: Number, default: 0 },
            },
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
