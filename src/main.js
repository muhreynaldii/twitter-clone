import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import TweetForm from "./components/TweetForm.vue";
import TweetCard from "./components/TweetCard.vue";

const app = createApp(App);

app.component("tweet-form", TweetForm);
app.component("tweet-card", TweetCard);

app.mount("#app");
