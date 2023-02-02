import ProductsService from "../../../services/Products"
import * as sinon from 'sinon';
import axios from "axios";
import { listProductsMock } from "../../mocks/Products";
import { expect } from 'chai';
import { Done } from "mocha";

describe('Test Service Products', () => {
  const productsService = new ProductsService();

  beforeEach(async () => {
    sinon.restore();
  });

  describe('List all products', () => {
    it('successfully list products', (done: Done) => {
      sinon.stub( axios,'get').resolves(Promise.resolve(listProductsMock));

      const listProducts = productsService.read()
        .then(() => {
          expect(listProducts).to.be.deep.eq(listProductsMock)
          expect(listProducts).to.be.an('array')
        })
      done()
    });

    it('should list an empty array if there are no products', (done: Done) => {
      sinon.stub( axios,'get').resolves(Promise.resolve([]));

      const listProducts = productsService.read()
        .then(() => {
          expect(listProducts).to.be.length(0)
          expect(listProducts).to.be.an('array')
        })
      done()
    });
  })
})