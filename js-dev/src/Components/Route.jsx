import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ProfilePage from "./ProfilePage";

const router=createBrowserRouter([
{
  path: "/",
  element: <LandingPage></LandingPage>
},
{
  path:"login",
  element: <LoginPage></LoginPage>
}
,
{
  path:"signup",
  element: <SignupPage></SignupPage>
},
{
  path:"profile",
  element: <ProfilePage></ProfilePage>
}
])

export default router;