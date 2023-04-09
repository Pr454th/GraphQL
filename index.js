const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./data/schema");
const mongoose = require("mongoose");
const app = express();
const resolvers = require("./data/resolvers").default;

mongoose
  .connect("mongodb://127.0.0.1:27017/widgets", {
    useNewUrlParser: true,
  })
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    const root = resolvers;

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
      })
    );

    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

//simple return function
// const root = {
//   product: () => {
//     return {
//       id: 1,
//       name: "Product 1",
//       description: "Product 1 description",
//       price: 100,
//       soldout: false,
//       stores: [
//         { store: "Store 1" },
//         { store: "Store 2" },
//         { store: "Store 3" },
//       ],
//     };
//   },
// };
