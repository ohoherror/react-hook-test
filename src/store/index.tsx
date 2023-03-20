import { createStore } from "redux";
import reducer from "../reducer/reducer";

const store = createStore(reducer, {
  userInfo: {
    userName: "鬼鬼",
    userAge: "18",
  },
});

export default store;
