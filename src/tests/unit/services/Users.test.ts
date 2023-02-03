import UsersService from "../../../services/Users"
import * as sinon from 'sinon';
import axios from "axios";
import { expect } from 'chai';
import { listUsersMock, userMock } from "../../mocks/Users";
import { ErrorTypes } from "../../../Errors/ErrorTypes";
import ProductsService from "../../../services/Products";
import { listProductsMock } from "../../mocks/Products";

describe('Test Service Users', () => {
  const productsService = new ProductsService();
  const usersService = new UsersService(productsService);

  beforeEach(async () => {
    sinon.restore();
  });

  describe('List all users', () => {
    it('successfully list users', async() => {
      sinon.stub( axios,'get').resolves(Promise.resolve({data: listUsersMock}));

      const listUsers = await usersService.read();

      expect(listUsers).to.be.deep.eq(listUsersMock);
      expect(listUsers).to.be.an('array');
    });

    it('should list an empty array if there are no users', async () => {
      sinon.stub( axios,'get').resolves(Promise.resolve({data: []}));

      const listUsers = await usersService.read();

      expect(listUsers).to.be.length(0);
      expect(listUsers).to.be.an('array');
    });
  })

  describe('ReadOne user by ID', () => {
    it('successfully list one user', async () => {
      sinon.stub(usersService, 'read').resolves(listUsersMock);

      const getOne = await usersService.readOne(userMock.id);
      expect(getOne).to.be.deep.eq(userMock);
      expect(getOne).to.be.an('object');
    }); 

    it('should fail if product not found', async () => {
      sinon.stub(usersService, 'read').resolves(listUsersMock);
      let error: any;
      
      try {
        await usersService.readOne(userMock.id + 8);
      } catch (errCatch: any) {
        error = errCatch;
      }
      expect(error.message).to.be.eq(ErrorTypes.NotFound);
    });
  })

  describe('Budget by selected products', () => {
    it('return budget of selected products', async() => {
      sinon.stub( productsService,'read').resolves(listProductsMock);

      const budget = await usersService.getBudget(userMock, [1])
      expect(budget).to.be.deep.eq('1102.09');
      expect(budget).to.be.an('string');
    })
  })
})