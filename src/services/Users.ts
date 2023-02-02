import axios from "axios";
import { IService } from "interfaces/IService";
import { IUser } from "interfaces/IUsers";

export default class UsersService implements IService<IUser> {
  public async read(): Promise<IUser[]> {
    const data = await axios({
      method: 'get',
      url: process.env.URL_USERS as string,
    }).then(data => data.data);
    return data;
  }
}