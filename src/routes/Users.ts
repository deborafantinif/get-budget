import UsersController from "../controllers/Users";
import { Router } from "express";
import UsersService from "../services/Users";
import ProductsService from "../services/Products";

const productsService = new ProductsService();
const usersService = new UsersService(productsService);
const usersController = new UsersController(usersService);

const routeUsers = Router();

routeUsers.route("/:id/budget").post((req, res) => usersController.getBudget(req, res));

routeUsers.route("/").get((req, res) => usersController.read(req, res));

export default routeUsers;