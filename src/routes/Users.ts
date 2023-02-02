import UsersController from "../controllers/Users";
import { Router } from "express";
import UsersService from "../services/Users";

const usersService = new UsersService();
const usersController = new UsersController(usersService);

const routeUsers = Router()

routeUsers.route("/").get((req, res) => usersController.read(req, res));

export default routeUsers;