import { Outlet} from "react-router-dom";
import MainNavigation from "../Navigation/MainNavigation";

const RootLayout = (props) => {
  
  return (
    <>
      <MainNavigation onShow={props.onShow}/>
         
      <Outlet />
    </>
  );
};

export default RootLayout;
