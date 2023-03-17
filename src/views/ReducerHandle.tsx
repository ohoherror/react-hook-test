import { useReducer } from "react";
import { fromReducer } from "../hooks/reducer/couter";

export default function ReducerHandle() {
  const [formData, dispatch] = useReducer(fromReducer, {
    userName: "",
    userAge: "",
  });

  const onUpdateName = () => {
    dispatch({
      type: "update",
      data: {
        userName: "鬼鬼",
        userAge: "34",
      },
    });
  };
  return (
    <div>
      <p>年纪：{formData.userName}</p>
      <p>年龄：{formData.userAge}</p>
      <button onClick={onUpdateName}>更新基本数据</button>
    </div>
  );
}
// const reducer = () => {};

// const [state, dispatch] = useReducer(reducer, initState, initAction);
