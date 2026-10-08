import { test, expect } from '@playwright/test';

test.describe('TodoMVC - Core functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  test('should allow a user to create a todo', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?');

    await newTodo.fill('Create QA portfolio');
    await newTodo.press('Enter');

    await expect(page.getByTestId('todo-title')).toHaveText([
      'Create QA portfolio'
    ]);
  });

});