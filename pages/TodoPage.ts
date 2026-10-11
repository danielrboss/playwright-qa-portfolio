
import { type Page, type Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly todoTitles: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newTodoInput = page.getByPlaceholder(
      'What needs to be done?'
    );

    this.todoItems = page.getByTestId('todo-item');
    this.todoTitles = page.getByTestId('todo-title');
  }

  async goto() {
    await this.page.goto('./');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async addMultipleTodos(tasks: string[]) {
    for (const task of tasks) {
      await this.addTodo(task);
    }
  }

  async completeTodo(index: number) {
    await this.todoItems
      .nth(index)
      .locator('input.toggle')
      .check();
  }

  async filterActive() {
    await this.page.getByRole('link', {
      name: 'Active'
    }).click();
  }

  async filterCompleted() {
    await this.page.getByRole('link', {
      name: 'Completed'
    }).click();
  }

  async deleteTodo(text: string) {
    const item = this.todoItems.filter({
      hasText: text
    });

    await item.hover();
    await item.locator('button.destroy').click();
  }

  async reload() {
    await this.page.reload();
  }
}
