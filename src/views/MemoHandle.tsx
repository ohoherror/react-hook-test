import React, { useEffect, useMemo, useState } from "react";
import UserInfoCom from "./UserInfoCom";

export default function App() {
  const [user, setUser] = useState<any>({
    userId: "12455660",
    userName: "guid",
    userSex: 1,
    userAge: "23",
    userPic:
      "https://img1.baidu.com/it/u=2668490787,2247123948&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
  });
  const [articles, setArticles] = useState<any>([]);

  const onGetArticles = () => {
    console.log("查询文章");
    setArticles(new Array(10).fill({ title: "React 从入门到放弃" }));
  };
  const onGetUser = () => {
    setUser((oldData: any) => {
      return { ...oldData, userAge: "2333" };
    });
  };

  const filterSex = useMemo(() => {
    console.log("计算性别数据");
    return (user.userSex = 1 ? "男" : "女");
  }, [user]);

  useEffect(() => {
    onGetUser();
    onGetArticles();
  }, []);
  return (
    <div>
      <UserInfoCom user={user}></UserInfoCom>
      {/* <img src={user.userPic} alt="" />
      <div>
        <p>名称：{user.userName}</p>
        <p>年龄：{user.userAge}</p>
        <p>性别：{filterSex}</p>
      </div> */}
      <a onClick={onGetUser}>刷新用户基本信息</a>
      <a onClick={onGetArticles}>获取文章</a>
      <div>
        {articles.map((info: any, index: any) => {
          return <p key={index}>{info.title}</p>;
        })}
      </div>
    </div>
  );
}
