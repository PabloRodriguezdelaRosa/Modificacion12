import 'mocha';
import { expect } from 'chai';
import request from 'request';

describe('Server Test', () => {
  it('should return a 200 status code adding a card', (done) => {
    request.post(
      {
        url: 'http://localhost:3000/cards',
        json: { id: 1, name: 'test_card', mana_cost: 1, color: 'white', type_line: 'creature', rarity: 'common', rules: 'test_rules', market_price: 1},
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      },
    );
  })
  it('should return a 200 status code showinf all cards', (done) => {
    request.get(
      {
        url: 'http://localhost:3000/cards',
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      },
    );
  });
  it('should return a 200 status code showing a card', (done) => {
    request.get(
      {
        url: 'http://localhost:3000/cards?id=7',
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      },
    );
  })
  it('should return a 200 status code updating a card', (done) => {
    request.patch(
      {
        url: 'http://localhost:3000/cards?id=1',
        json: { id: 1, name: 'DUENDE', mana_cost: 1, color: 'red', type_line: 'creature', rarity: 'common', rules: 'test_rules', market_price: 5},
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      },
    );
  })
  it('should return a 200 status code deleting a card', (done) => {
    request.delete(
      {
        url: 'http://localhost:3000/cards?id=1',
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(200);
        done();
      },
    );
  })
  it ('should return a 404 status code when trying to delete a card that does not exist', (done) => {
    request.delete(
      {
        url: 'http://localhost:3000/cards?id=1',
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(404);
        done();
      },
    );
  })
  it ('should return a 404 status code when trying to show a card that does not exist', (done) => {
    request.get(
      {
        url: 'http://localhost:3000/cards?id=1',
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(404);
        done();
      },
    );
  })
  it ('should return a 400 status code when trying to delete a card without providing an id', (done) => {
    request.delete(
      {
        url: 'http://localhost:3000/cards',
      },
      (error, response) => {
        expect(response.statusCode).to.be.equal(400);
        done();
      },
    );
  })
})