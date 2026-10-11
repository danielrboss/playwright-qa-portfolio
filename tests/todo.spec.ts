
import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

const TODO_1 = 'Create QA portfolio';
const TODO_2 = 'Write automated tests';
const TODO_3 = 'Publish project on GitHub';

test.describe('TodoMVC - Core functionality', () => {

  test.beforeEach(async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  // TEST 1: Create a single todo
  test('should allow a user to create a todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addTodo(TODO_1);

    await expect(todoPage.todoTitles).toHaveText([TODO_1]);
    await expect(todoPage.todoItems).toHaveCount(1);
  });

  // TEST 2: Create multiple todos
  test('should allow a user to create multiple todos', async ({ page }) => {
    const todoPage = new TodoPage(page);
    const tasks = [TODO_1, TODO_2, TODO_3];

    await todoPage.addMultipleTodos(tasks);

    await expect(todoPage.todoTitles).toHaveText(tasks);
    await expect(todoPage.todoItems).toHaveCount(3);
  });

  // TEST 3: Complete a todo
  test('should allow a user to complete a todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addTodo(TODO_1);
    await todoPage.completeTodo(0);

    await expect(todoPage.todoItems.first()).toHaveClass(/completed/);
  });

  // TEST 4: Filter active todos
  test('should display only active todos', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addMultipleTodos([TODO_1, TODO_2]);
    await todoPage.completeTodo(0);

    await todoPage.filterActive();

    await expect(todoPage.todoTitles).toHaveText([TODO_2]);
    await expect(todoPage.todoItems).toHaveCount(1);
  });

  // TEST 5: Filter completed todos
  test('should display only completed todos', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addMultipleTodos([TODO_1, TODO_2]);
    await todoPage.completeTodo(0);

    await todoPage.filterCompleted();

    await expect(todoPage.todoTitles).toHaveText([TODO_1]);
    await expect(todoPage.todoItems).toHaveCount(1);
  });

  // TEST 6: Delete a todo
  test('should allow a user to delete a todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addMultipleTodos([TODO_1, TODO_2]);
    await todoPage.deleteTodo(TODO_1);

    await expect(todoPage.todoTitles).toHaveText([TODO_2]);
    await expect(todoPage.todoItems).toHaveCount(1);
  });

  // TEST 7: Prevent empty todos
  test('should not create an empty todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addTodo('   ');

    await expect(todoPage.todoItems).toHaveCount(0);
  });

  // TEST 8: Persist todos after page reload
  test('should persist todos after page reload', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.addMultipleTodos([TODO_1, TODO_2]);

    await expect(todoPage.todoItems).toHaveCount(2);

    await todoPage.reload();

    await expect(todoPage.todoTitles).toHaveText([
      TODO_1,
      TODO_2
    ]);

    await expect(todoPage.todoItems).toHaveCount(2);
  });

});
