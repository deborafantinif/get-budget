import axios from "axios";
import { ErrorTypes } from "../Errors/ErrorTypes";
import { IBudget } from "interfaces/IBudget";
import { IService } from "interfaces/IService";
import { IUser } from "interfaces/IUsers";
import ProductsService from "./Products";
import { IProduct } from "interfaces/IProduct";

export default class UsersService implements IService<IUser> {
  protected _productsService: IService<IProduct>;

  constructor(service: IService<IProduct>) {
    this._productsService = service;
  }

  public async read(): Promise<IUser[]> {
    const data = await axios.get(process.env.URL_USERS as string).then(data => data.data);
    return data;
  }

  public async readOne(id: number): Promise<IUser> {
    const data = await this.read();
    const user = data.filter((u) => u.id == id);
    if (user.length == 0) throw new Error(ErrorTypes.NotFound);
    return user[0];
  }

  public async getBudget(user: IUser, productsSelected: number[]): Promise<IBudget> {
    const products = await this._productsService.read();
    const productsFilters = products.filter((product) => productsSelected.includes(product.id))
    let budget = 0;
    for (const product of productsFilters) {
      budget += product.price * (user.tax / 100)
    }
    return budget.toFixed(2)
  }
}