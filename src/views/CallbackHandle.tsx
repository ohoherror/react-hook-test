import React, { useEffect } from "react";
import { useCallback, useState } from "react";

const funSet = new Set();

const InputCom = React.memo(function (props: any) {
  console.log("子组件被渲染了。。。", new Date().getTime());
  return (
    <input
      type="text"
      placeholder="子组件请输入关键字"
      onChange={props.onChange}
    />
  );
});

const userList = [
  { userName: "张三", userSex: "男" },
  { userName: "张三", userSex: "男" },
  { userName: "张三", userSex: "男" },
  { userName: "张三", userSex: "男" },
  { userName: "李四", userSex: "男" },
  { userName: "张三", userSex: "男" },
  { userName: "张三", userSex: "男" },
  { userName: "张三", userSex: "男" },
];

const CallbackHandle = () => {
  const [userName, setUserName] = useState("张三");
  const [users, setUsers] = useState([]);

  const onNameChange = useCallback((event: any) => {
    setUserName(event.target.value);
  }, []);

  const onQuery = () => {
    const filterList: any = userList.filter((info: any) => {
      return info.userName.indexOf(userName) !== -1;
    });
    setUsers(filterList);
  };

  useEffect(() => {
    onQuery();
  }, [userName]);

  funSet.add(onNameChange);
  //   console.log(funSet);
  //   console.log("函数数量。。。", funSet.size);

  return (
    <div>
      <div>
        <label>用户名称</label>
        <InputCom onChange={onNameChange}></InputCom>
        <p>搜索结果</p>
        {users.map((item: any, index: number) => {
          return (
            <div key={index}>
              <div>{index}</div>
              <div>{item.userName}</div>
              <div>{item.userSex}</div>
            </div>
          );
        })}
        {/* <input
          type="text"
          placeholder="请输入关键字"
          value={userName}
          onChange={onNameChange}
        /> */}
      </div>
    </div>
  );
};

export default CallbackHandle;
