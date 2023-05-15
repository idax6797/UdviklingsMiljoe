import { expect, describe, it } from "vitest";
import { mount } from '@vue/test-utils';
import App from "../App.vue";

describe("App component", () => {
  it("renders the App", () => {
    expect(App).toBeTruthy();
  });
  it('renders the initial todo list', () => {
    const wrapper = mount(App);
    
    // Assert that the initial todo list is empty
    expect(wrapper.findAll('.todoName').length).toBe(0);
  });
});