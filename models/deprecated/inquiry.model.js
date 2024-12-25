const { Schema, model, Types } = require('mongoose');

const InquirySchema = new Schema(
    {
        customer_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'User',
        },
        vendor_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'Vendor',
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
        custom_message: {
            type: String,
        },
        inquiry_type: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = new model('Inquiry', InquirySchema);
