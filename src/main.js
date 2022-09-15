import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import TweetForm from "./components/TweetForm.vue";

const app = createApp(App);

app.component("tweet-form", TweetForm);

app.mount("#app");
