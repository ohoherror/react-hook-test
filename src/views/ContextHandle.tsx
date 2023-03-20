import React, { useContext, useState } from "react";
// const myContext = React.createContext(initialValue)

const AppContext = React.createContext({} as any);
const ThemeContext = React.createContext({} as any);

const A = () => {
  return (
    <div className="A">
      <p>子组件A</p>
      <B></B>
    </div>
  );
};

const B = () => {
  return (
    <div>
      <p>子组件B</p>
      <C></C>
    </div>
  );
};

const C = () => {
  const appContext = useContext(AppContext);
  const themeContext = useContext(ThemeContext);
  const onRemove = () => {
    console.log("当前颜色：", themeContext.color);
    console.log("当前账号权限：", appContext.roles);
    if (!appContext.roles.includes("admin")) {
      console.log("暂无权限");
    }
  };

  return (
    <div>
      <p>子组件C</p>
      <button onClick={onRemove}>删除账号</button>
    </div>
  );
};

const ContextHandle = () => {
  const [userRole, setUserRole] = useState(["user"]);
  const [theme, setTheme] = useState("red");
  return (
    <>
      <div>
        <p>根组件</p>
        <div>
          <AppContext.Provider value={{ roles: userRole }}>
            <ThemeContext.Provider value={{ color: theme }}>
              <A></A>
            </ThemeContext.Provider>
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
};

export default ContextHandle;
