import React from "react";
import { useDispatch} from "react-redux";
import { login } from "../../store/session";

const DemoUser = () => {
  const dispatch = useDispatch();

  const demoLogin = () => {
    dispatch(
      login({
        credential: "demo@user.io",
        password: "password",
      })
    );
  };

  return <button onClick={demoLogin}>Demo User</button>;
};

export default DemoUser;
