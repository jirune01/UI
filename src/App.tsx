// import { Header } from "components/Header";

import { SideMenu } from "components/SideMenu";
import { Code } from "components/Code";
import { ComponentList } from "components/ComponentList";

export const App = () => {
  return (
    <div className="flex flex-col gap-8 w-screen h-screen">
      {/* <Header /> */}
      <div className="flex items-center justify-between gap-10">
        <SideMenu />
        <ComponentList />
        <Code />
      </div>
    </div>
  );
};
