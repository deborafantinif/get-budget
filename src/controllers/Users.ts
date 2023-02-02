import { Request, Response } from "express";
import { IBudget } from "interfaces/IBudget";
import { IService } from "interfaces/IService";
import { IUser } from "interfaces/IUsers";

export default class usersController {
  protected _usersService: IService<IUser>;

  constructor(service: IService<IUser>) {
    this._usersService = service;
  }

  public async read(_req: Request, res: Response<IUser[]>) {
    const getAll = await this._usersService.read();
    return res.status(200).json(getAll)
  }

  public async getBudget(req: Request, res: Response<IBudget>) {
    const {id} = req.params;
    const user = await this._usersService.readOne!(+id) as IUser;
    const budget = await this._usersService.getBudget!(user, req.body.products)
    return res.status(200).json(budget)
  }
}