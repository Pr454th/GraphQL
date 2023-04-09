import { Widget } from "./dbConnectors";

const resolvers = {
  getProduct: async ({ id }) => {
    console.log("id", id);
    try {
      const data = await Widget.findOne({ id: id });
      console.log("data", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getAllProducts: async () => {
    try {
      const data = await Widget.find();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  createProduct: async ({ input }) => {
    try {
      const newWidget = await Widget.create(input);
      return newWidget;
    } catch (err) {
      console.log(err);
    }
  },
  updateProduct: async ({ id, input }) => {
    try {
      const newWidget = await Widget.findOneAndUpdate({ id: id }, input);
      return newWidget;
    } catch (err) {
      console.log(err);
    }
  },
  deleteProduct: async ({ id }) => {
    try {
      const delWidget = await Widget.findOneAndDelete({ id: id });
      return delWidget;
    } catch (err) {
      console.log(err);
    }
  },
};

export default resolvers;
