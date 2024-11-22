import { validationResult } from "express-validator";
import ProductsDBService from "../models/ProductsDBService.mjs";

class ProductsController {
  static async products(req, res) {
    const productsList = await ProductsDBService.getList(req.query.price);

    res
      .status(200)
      .render("products", { title: "Товари", products: productsList });
  }
  static addProductForm(req, res) {
    res
      .status(200)
      .render("addProduct", { title: "Додати новий продукт", errors: [] });
  }
  static async addProduct(req, res) {
    const data = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("addProduct", {
        title: "Додати новий продукт",
        errors: errors.array(),
      });
    }

    await ProductsDBService.create(data);
    res.redirect("/products?price=descending");
  }
}

export default ProductsController;
