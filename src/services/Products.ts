import axios from "axios";
import { IProduct } from "interfaces/IProduct";
import { IService } from "interfaces/IService";

export default class ProductsService implements IService<IProduct> {
  public async read(): Promise<IProduct[]> {
    const data = await axios.get(process.env.URL_PRODUCTS as string).then(data => data.data);
    return data;
  }
}