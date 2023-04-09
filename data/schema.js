const buildSchema = require("graphql").buildSchema;

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        inventory: Int
        soldout: Soldout
        stores: [Store]
    }
    type Store {
        store:String
    }
    type Query {
        getProduct(id:ID): Product
        getAllProducts: [Product]
    }
    input StoreInput {
        store: String
    }
    input ProductInput {
        id: ID!
        name: String!
        description: String!
        price: Float!
        inventory: Int
        soldout: Soldout
        stores: [StoreInput]
    }
    enum Soldout {
        SOLDOUT
        ONSALE
    }
    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(id:ID,input: ProductInput): Product
        deleteProduct(id:ID): Product
    }
`);

module.exports = schema;
