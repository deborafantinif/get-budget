import { Request, Response } from "express";
import { IProduct } from "interfaces/IProduct";
import { IService } from "interfaces/IService";

export default class productsController {
  protected _productsService: IService<IProduct>;

  constructor(service: IService<IProduct>) {
    this._productsService = service;
  }

  public async read(_req: Request, res: Response<IProduct[]>) {
    const getAll = await this._productsService.read();
    return res.status(200).json(getAll)
  }
}