import React, { useEffect, useState } from "react";
import UserInfoCom from "./UserInfoCom";

export default function App() {
  const [user, setUser] = useState<any>({});
  const [articles, setArticles] = useState<any>([]);

  const onGetArticles = () => {
    setArticles([]);
  };
  const onGetUser = () => {
    setUser({
      userId: "12455660",
      userName: "guid",
      userAge: "23",
      userPic:
        "https://img1.baidu.com/it/u=2668490787,2247123948&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
    });
  };

  useEffect(() => {
    onGetUser();
    onGetArticles();
  }, []);
  return (
    <div>
      <UserInfoCom user={user}></UserInfoCom>
      <a onClick={onGetArticles}>获取文章</a>
      <div>
        {articles.map((info: any, index: any) => {
          return <p key={index}>{info.title}</p>;
        })}
      </div>
    </div>
  );
}
