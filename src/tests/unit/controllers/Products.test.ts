import ProductsController from '../../../controllers/Products';
import { Request, Response } from 'express';
import ProductsService from "../../../services/Products"
import sinon from 'sinon';
import { listProductsMock } from '../../mocks/Products';
import { expect } from 'chai';

describe('Test Controller Products', () => {
  const productsService = new ProductsService();
  const productsController = new ProductsController(productsService);

  const req = {} as Request
  const res = {} as Response

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });
  
  afterEach(() => {
    sinon.restore();
  })

  describe('Read all products', () => {
    it('successfully list products', async () => {
      sinon.stub(productsService, 'read').resolves(listProductsMock);
      
      await productsController.read(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(listProductsMock)).to.be.true;
    })
  })
})