import Product from "./Product.mjs";

class ProductsDBService {
  static async getList(sort) {
    if (!sort) {
      try {
        return (await Product.find({}).exec()) ?? [];
      } catch (error) {
        return [];
      }
    }
    if (sort === "descending") {
      console.log("yes");

      try {
        return (
          (await Product.find({}, {}, { sort: { price: -1 } }).exec()) ?? []
        );
      } catch (error) {
        return [];
      }
    } else if (sort === "ascending") {
      try {
        return (
          (await Product.find({}, {}, { sort: { price: 1 } }).exec()) ?? []
        );
      } catch (error) {
        return [];
      }
    }
    return [];
  }
  static async create(data) {
    const product = new Product(data);
    return await product.save();
  }
}

export default ProductsDBService;
