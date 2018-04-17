const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema (
    {
        avatar: { type: String, default: '' },
        username: { type: String, required: true },
        password: { type: String, default: '' },
        email: { type: String, required: true }
    },
    { timestamps: { createdAt: "createdAt"} }
)