import { createApp } from "vue";
import App from "./App.vue";
// import components from "./components/UI";
const app = createApp(App);

// components.forEach((component) => {
//   app.component(component.name, component);
// });

// app.component("my-button", MyButton);
app.mount("#app");
