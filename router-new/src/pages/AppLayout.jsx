import React from "react";
import Menu from "../components/Menu";
import Back from "../components/Back";
import Loading from "../components/Loading";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Menu></Menu>
      {isLoading && <Loading />}
      <main className="appContainer">
        <h1>Content</h1>
        <Outlet />
      </main>
      <Back />
    </div>
  );
};

export default AppLayout;
