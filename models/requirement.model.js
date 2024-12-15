const { Schema, model, Types } = require('mongoose');

const RequirementSchema = new Schema(
    {
        customer_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'User',
        },
        category_name: {
            type: String,
            required: true,
        },
        sub_service_name: {
            type: String,
            required: true,
        },
        event_date: {
            type: Date,
            required: true,
        },
        event_location: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
        },
        custom_description: {
            type: String,
        },
        proposals: [
            {
                vendor_id: {
                    type: Types.ObjectId,
                    required: true,
                    ref: 'Vendor',
                },
                quotation: {
                    type: Number,
                    required: true,
                },
                portfolio: {
                    type: [String],
                },
                custom_message: {
                    type: String,
                },
                submitted_at: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = model('Requirement', RequirementSchema);
