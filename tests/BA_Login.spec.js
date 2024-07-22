// BA 로그인 테스트

// @ts-check
// const { test, expect } = require('@playwright/test'); -> Common js
import { test, expect } from '@playwright/test' // -> ES module

test('BA 로그인', async ({ page }) => {
  await page.goto('https://stg-admin.bleepy.io/login');
  await page.getByPlaceholder('계정 이메일').fill('super@radlab.kr');
  await page.getByPlaceholder('비밀번호').fill('super@radlab.kr');
  await page.getByRole('button', { name: '로그인' }).click();
  await expect(page).toHaveTitle(/bleepy Admin/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });