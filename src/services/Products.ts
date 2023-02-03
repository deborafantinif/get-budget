import axios from "axios";
import { IProduct } from "interfaces/IProduct";
import { IService } from "interfaces/IService";

export default class ProductsService implements IService<IProduct> {
  public async read(): Promise<IProduct[]> {
    const URL = process.env.URL_PRODUCTS || 'https://mockend.com/juunegreiros/BE-test-api/products'
    const data = await axios.get(URL).then(data => data.data);
    return data;
  }
}