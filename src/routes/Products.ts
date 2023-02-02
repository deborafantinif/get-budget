import ProductsController from "../controllers/Products";
import { Router } from "express";
import ProductsService from "../services/Products";

const productsService = new ProductsService();
const productsController = new ProductsController(productsService);

const routeProducts = Router()

routeProducts.route("/").get((req, res) => productsController.read(req, res));

export default routeProducts;