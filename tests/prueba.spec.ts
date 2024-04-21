import 'mocha';
import { expect } from 'chai';
import { Sum } from '../src/prueba.js'

describe('Prueba', () => {
  it ("prueba", () => {
    expect(Sum(4, 4)).to.be.eql(8)
  })
})