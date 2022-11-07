import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean },
    role: { type: String, enum: ["User", "Admin", "Team-Member"] },
    phone: { type: Number },
    address: { type: String },
    avatar: { type: String },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;