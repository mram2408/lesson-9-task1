import { Router } from "express";
const router = Router();

import { checkSchema } from "express-validator";
import ProductValidator from "../validators/productValidator.mjs";

import multer from "multer";
import ProductsController from "../controllers/productsController.mjs";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", ProductsController.products);
router.get("/addProduct", ProductsController.addProductForm);
router.post(
  "/addProduct",
  checkSchema(ProductValidator.productSchema),
  ProductsController.addProduct
);

export default router;
