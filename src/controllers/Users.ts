import { Request, Response } from "express";
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
}