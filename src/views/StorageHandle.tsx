import { useSelector } from "react-redux";

export default function App() {
  const userInfo = useSelector((state: any) => state.userInfo);

  const onUpdate = () => {};

  return (
    <>
      {userInfo?.userName}
      {userInfo?.userAge}
    </>
  );
}
