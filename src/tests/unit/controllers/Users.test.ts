import { Request, Response } from 'express';
import sinon from 'sinon';
import { expect } from 'chai';
import UsersService from '../../../services/Users';
import UsersController from '../../../controllers/Users';
import { listUsersMock, userMock } from '../../mocks/Users';
import ProductsService from '../../../services/Products';

describe('Test Controller Users', () => {
  const productsService = new ProductsService();
  const usersService = new UsersService(productsService);
  const usersController = new UsersController(usersService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });
  
  afterEach(() => {
    sinon.restore();
  })

  describe('Read all users', () => {
    it('successfully list users', async () => {
      sinon.stub(usersService, 'read').resolves(listUsersMock);
      
      await usersController.read(req, res);

      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(listUsersMock)).to.be.true;
    })
  })

  describe('ReadOne user by ID', () => {
    it('successfully return a user', async () => {
      sinon.stub(usersService, 'readOne').resolves(userMock);
      sinon.stub(usersService, 'getBudget').resolves('1151.54');
      
      req.params = { id: userMock.id.toString() };
      req.body = { products: [1, 2] };
      await usersController.getBudget(req, res);

      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith('1151.54')).to.be.true;
    })
  })
})