import mongoose from "mongoose";
import config from "../config/default.mjs";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

productSchema.static.checkDatabaseExists = async () => {
  const databases = await mongoose.connection.listDatabases();
  return databases.databases.some((db) => db.name === config.dataBaseName);
};

productSchema.static.checkCollectionExists = async function () {
  if (await this.checkDatabaseExists()) {
    const collections = await mongoose.connection.db
      .listCollections({ name: "products" })
      .toArray();
    return collections.length > 0;
  }
  return false;
};

const Product = mongoose.model("Product", productSchema);
export default Product;
