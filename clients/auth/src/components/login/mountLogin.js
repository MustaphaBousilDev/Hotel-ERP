import { createApp } from "vue";
import Login from "./Login.vue";

export default (selector) => {
  createApp(Login).mount(selector);
};