
const Vendors = require('../models/vendors.model.js');
const CatchAsync = require('../utils/CatchAsync.js');




const getAllVendors = CatchAsync(async (req, res, next) => {

    const vendors = await Vendors.find({});

    res.status(200).json({ data: vendors, status: "success" });

})

const getVendorById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;

    const Vendor = await Vendors.findById(id);

    if (Vendor) {
        return res.status(200).json({ status: "sucesss", vendor: Vendor })
    }

    next(new AppError("Vendor doesn't Exists  ", 404));


})


const addNewService = CatchAsync(async (req, res, next) => {
    const { vendorId } = req.params;
    const { categoryName, subServiceName } = req.body;

    const vendor = await Vendors.findById(vendorId);

    if (!vendor) return next(new AppError("Vendor not found", 404));

    const existingCategory = vendor.categories.find(category => category.name === categoryName);

    if (existingCategory) {
        existingCategory.subServices.push({ name: subServiceName });
    } else {
        vendor.categories.push({ name: categoryName, subServices: [{ name: subServiceName }] });
    }

    await vendor.save();

    res.status(200).json({
        message: "Service added successfully",
        status: "success",
        vendor,
    });
});

// Set pricing for a vendor's service
const setPricing = CatchAsync(async (req, res, next) => {
    const { vendorId } = req.params;
    const { categoryName, subService } = req.body;

    const vendor = await Vendors.findById(vendorId);

    if (!vendor) return next(new AppError("Vendor not found", 404));

    const category = vendor.categories.find(cat => cat.name === categoryName);

    if (!category) return next(new AppError("Category not found", 404));

    const service = category.subServices.find(service => service.name === subService.subServiceName);

    if (!service) return next(new AppError("Sub-service not found", 404));

    service.packages = subService.packages;
    service.description = subService.description;
    service.images = subService.images;

    await vendor.save();

    res.status(200).json({
        message: "Pricing updated successfully",
        status: "success",
        vendor,
    });
});

// Set vendor details
const setVendorDetails = CatchAsync(async (req, res, next) => {
    const { vendorId } = req.params;
    const { categoryName, subServices } = req.body;

    const vendor = await Vendors.findById(vendorId);

    if (!vendor) return next(new AppError("Vendor not found", 404));

    const existingCategory = vendor.categories.find(cat => cat.name === categoryName);

    if (existingCategory) {
        existingCategory.subServices = subServices;
    } else {
        vendor.categories.push({ name: categoryName, subServices });
    }

    await vendor.save();

    res.status(200).json({
        message: "Vendor details updated successfully",
        status: "success",
        vendor,
    });
});




module.exports = { getAllVendors, getVendorById, setVendorDetails, setPricing, addNewService };


