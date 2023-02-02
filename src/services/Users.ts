import axios from "axios";
import { ErrorTypes } from "../Errors/ErrorTypes";
import { IBudget } from "interfaces/IBudget";
import { IService } from "interfaces/IService";
import { IUser } from "interfaces/IUsers";
import ProductsService from "./Products";

export default class UsersService implements IService<IUser> {
  public async read(): Promise<IUser[]> {
    console.log('caiu')
    const data = await axios({
      method: 'get',
      url: process.env.URL_USERS as string,
    }).then(data => data.data);
    return data;
  }

  public async readOne(id: number): Promise<IUser> {
    const data = await this.read();
    const user = data.filter((u) => u.id == id);
    if (!user) throw new Error(ErrorTypes.NotFound);
    return user[0];
  }

  public async getBudget(user: IUser, productsSelected: number[]): Promise<IBudget> {
    const productsService = new ProductsService()
    const products = await productsService.read();
    const productsFilters = products.filter((product) => productsSelected.includes(product.id))
    let budget = 0;
    for (const product of productsFilters) {
      budget += product.price * (user.tax / 100)
    }
    return budget.toFixed(2)
  }
}