import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    shift: { type: String, enum: ["morning", "day", "a-day"] },
    shiftCredit: { type: Number, required: true },
    reviews: [{
        _id: Schema.Types.ObjectId,
        name: String,
        email: String,
        rating: { type: Number, required: true },
        comment: { type: String, required: true }
    }],
    img: { type: String, required: true },
    info: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;