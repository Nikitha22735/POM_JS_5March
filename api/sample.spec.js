import { test, expect } from '@playwright/test';

test('GET API Test', async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products');
  await console.log(response)

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.data.id).toBe(2);
});