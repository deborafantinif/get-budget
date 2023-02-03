import ProductsService from "../../../services/Products"
import * as sinon from 'sinon';
import axios from "axios";
import { listProductsMock } from "../../mocks/Products";
import { expect } from 'chai';

describe('Test Service Products', () => {
  const productsService = new ProductsService();
  
  beforeEach(() => {
    sinon.restore();
  })

  describe('List all products', () => {
    it('successfully list products', async () => {
      sinon.stub( axios,'get').resolves(Promise.resolve({data: listProductsMock}));

      const listProducts = await productsService.read();

      expect(listProducts).to.be.deep.eq(listProductsMock);
      expect(listProducts).to.be.an('array');
    });

    it('should list an empty array if there are no products', async () => {
      sinon.stub( axios,'get').resolves(Promise.resolve({data: []}));

      const listProducts = await productsService.read();

      expect(listProducts).to.be.length(0);
      expect(listProducts).to.be.an('array');
    });
  })
})