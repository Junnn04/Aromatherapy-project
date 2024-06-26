import { createApp } from "vue";

import { createBootstrap } from "bootstrap-vue-next";
// Add the necessary CSS
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

import { createPinia } from "pinia";

// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// 引入 VeeValidate 的驗證規則
import * as AllRules from "@vee-validate/rules";
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from "@vee-validate/i18n";
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/js/bootstrap";
import "./assets/scss/all.scss";

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 自定义验证信用卡号码的格式
// defineRule('credit_card', (value) => /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(value));
// 自定义验证信用卡号码的格式
defineRule(
  "credit_card",
  (value) => /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(value),
  "信用卡號碼格式不正確",
);

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createBootstrap());

// 掛載 Global 的 VeeValidate 元件
app.component("VField", Field);
app.component("VForm", Form);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
