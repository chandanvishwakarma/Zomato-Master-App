import { mongo, mongoose } from "mongoose";

const RestaurentSchema = new mongoose.RestaurentSchema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurintTiming: String,
    contectNumber: Number,
    website: Number,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref:"Images",
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref:"Menus",
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref:"Reviews",
    }], 
    photos: [{
        type: mongoose.Types.ObjectId,
        ref:"Photos",
    }], 

});

export const RestaurentModel = mongoose.model("Restaurants", RestaurentSchema);