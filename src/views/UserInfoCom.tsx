import React, { useMemo } from "react";

const UserPicCom = function (props: any) {
  console.log("头像组件被渲染了");
  return (
    <>
      <img src={props.user.userPic} alt="" />
    </>
  );
};

const UserInfoCom = React.memo(function (props: any) {
  console.log("用户信息组件被执行了");

  const copyUser = useMemo(() => {
    return props.user;
  }, [props.user.userPic]);

  return (
    <div>
      <div>用户基本信息：</div>
      <div>
        <UserPicCom user={copyUser}></UserPicCom>
        <div>
          <p>名称：{props.user.userName}</p>
          <p>年龄：{props.user.userAge}</p>
        </div>
      </div>
    </div>
  );
});

export default UserInfoCom;
