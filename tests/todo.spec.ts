
import { test, expect, type Page } from '@playwright/test';

const TODO_1 = 'Create QA portfolio';
const TODO_2 = 'Write automated tests';
const TODO_3 = 'Publish project on GitHub';

// Reusable helper to create a todo
async function addTodo(page: Page, text: string) {
  const newTodo = page.getByPlaceholder('What needs to be done?');

  await newTodo.fill(text);
  await newTodo.press('Enter');
}

test.describe('TodoMVC - Core functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  // TEST 1: Create a single todo
  test('should allow a user to create a todo', async ({ page }) => {
    await addTodo(page, TODO_1);

    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_1
    ]);

    await expect(page.getByTestId('todo-item')).toHaveCount(1);
  });

  // TEST 2: Create multiple todos
  test('should allow a user to create multiple todos', async ({ page }) => {
    const tasks = [TODO_1, TODO_2, TODO_3];

    for (const task of tasks) {
      await addTodo(page, task);
    }

    await expect(page.getByTestId('todo-title')).toHaveText(tasks);
    await expect(page.getByTestId('todo-item')).toHaveCount(3);
  });

  // TEST 3: Complete a todo
  test('should allow a user to complete a todo', async ({ page }) => {
    await addTodo(page, TODO_1);

    const todoItem = page.getByTestId('todo-item');

    await todoItem.locator('input.toggle').check();

    await expect(todoItem).toHaveClass(/completed/);
    await expect(todoItem.locator('input.toggle')).toBeChecked();
  });

  // TEST 4: Filter active todos
  test('should display only active todos', async ({ page }) => {
    await addTodo(page, TODO_1);
    await addTodo(page, TODO_2);

    const todoItems = page.getByTestId('todo-item');

    await todoItems.first().locator('input.toggle').check();

    await page.getByRole('link', { name: 'Active' }).click();

    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_2
    ]);

    await expect(page.getByTestId('todo-item')).toHaveCount(1);
  });

  // TEST 5: Filter completed todos
  test('should display only completed todos', async ({ page }) => {
    await addTodo(page, TODO_1);
    await addTodo(page, TODO_2);

    const todoItems = page.getByTestId('todo-item');

    await todoItems.first().locator('input.toggle').check();

    await page.getByRole('link', { name: 'Completed' }).click();

    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_1
    ]);

    await expect(page.getByTestId('todo-item')).toHaveCount(1);
  });

  // TEST 6: Delete a todo
  test('should allow a user to delete a todo', async ({ page }) => {
    await addTodo(page, TODO_1);
    await addTodo(page, TODO_2);

    const todoToDelete = page
      .getByTestId('todo-item')
      .filter({ hasText: TODO_1 });

    await todoToDelete.hover();
    await todoToDelete.locator('button.destroy').click();

    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_2
    ]);

    await expect(page.getByTestId('todo-item')).toHaveCount(1);
  });

  // TEST 7: Prevent empty todos
  test('should not create an empty todo', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?');

    await newTodo.fill('   ');
    await newTodo.press('Enter');

    await expect(page.getByTestId('todo-item')).toHaveCount(0);
  });

  // TEST 8: Persist todos after page reload
  test('should persist todos after page reload', async ({ page }) => {
    await addTodo(page, TODO_1);
    await addTodo(page, TODO_2);

    await expect(page.getByTestId('todo-item')).toHaveCount(2);

    await page.reload();

    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_1,
      TODO_2
    ]);

    await expect(page.getByTestId('todo-item')).toHaveCount(2);
  });

});
