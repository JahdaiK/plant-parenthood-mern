const mongoose = require ('mongoose')

const commentSchema = new mongoose.Schema(
    {
        plantId: {
            type: Number,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        userName: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        content: {
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model('Comment', commentSchema)