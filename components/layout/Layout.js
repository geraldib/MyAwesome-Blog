import MainNavigation from "./main-navigation";

const layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
