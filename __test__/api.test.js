/**
 * @jest-environment node
 */

/**
 * Test (ReadME):
 * 1. This test file is for api test under node environment
 * 2. The rest of UI test are located next to individual component for better organization
 * 3. script: npm test
 */
const request = require('supertest');
const app = require('../server/app');
const { db } = require('../database/index.js');

let server = null;
beforeEach((done) => {
  server = app.listen(done);
  jest.setTimeout(10000);
});
beforeAll((done) => {
  done();
});
afterEach(async (done) => {
  await server.close(done);
});

afterAll((done) => {
  db.close();
  done();
});

describe('When GET / ', () => {
  test('should get text/html and status code 200', () => {
    request(app).get('/').then(async (response) => {
      try {
        await expect(response.header['content-type']).toEqual('text/html; charset=UTF-8');
        await expect(response.status).toEqual(200);
      } catch (err) {
        throw err;
      }
    });
  });
});
describe('When GET /bizs/:bId ', () => {
  test('should get text/html and status code 301', () => {
    request(app).get('/bizs/1').then(async (response) => {
      try {
        await expect(response.header['content-type']).toEqual('text/html; charset=UTF-8');
        await expect(response.status).toEqual(301);
      } catch (err) {
        throw err;
      }
    });
  });
});
describe('When GET /biz/:bId with correct bId', () => {
  test('should get a Json Object(with correct bizname) and status code 200', () => {
    request(app).get('/biz/1').then(async (response) => {
      try {
        await expect(response.type).toEqual('application/json');
        const bizData = JSON.parse(response.text);
        await expect(bizData.bizname).toEqual('Taste of Texas');
        await expect(response.status).toEqual(200);
      } catch (err) {
        throw err;
      }
    });
  });
});

describe('When GET /biz_photos/:bId/:pId for 20 pictures starts from assigned pId', () => {
  test('should get correct Json Object and status code 200', () => {
    request(app).get('/biz_photos/1/1').then(async (response) => {
      try {
        await expect(response.type).toEqual('application/json');
        const photos = JSON.parse(response.text)[0];
        await expect(photos.length).toEqual(20);
        await expect(response.status).toEqual(200);
      } catch (err) {
        throw err;
      }
    });
  });
});
