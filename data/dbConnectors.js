import mongoose from "mongoose";

const widgetSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  inventory: {
    type: Number,
  },
  soldout: {
    type: String,
  },
  stores: {
    type: Array,
  },
});

const Widget = mongoose.model("Widget", widgetSchema);

export { Widget };
