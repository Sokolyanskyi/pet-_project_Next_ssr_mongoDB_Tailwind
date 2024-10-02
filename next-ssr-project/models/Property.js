import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      requared: true,
    },
    name: {
      type: String,
      requared: true,
    },
    type: {
      type: String,
      requared: true,
    },
    description: {
      type: String,
    },
    location: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    beds: {
      type: Number,
      requared: true,
    },
    baths: {
      type: Number,
      requared: true,
    },
    square_feet: {
      type: Number,
      requared: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: { type: Number },
      weekly: { type: Number },
      monthly: { type: Number },
    },
    seller_info: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
    images: [
      {
        type: String,
      },
    ],
    is_fetuared: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Property = models.Property || model("Property", PropertySchema);
export default Property;
