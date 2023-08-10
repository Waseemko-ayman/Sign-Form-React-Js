import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
import UserGuard from "../Components/Guards/UserGuard";
import { PATHS } from "./paths";
import SignUpPage from "../Pages/SignUpPage";
import GuestGuards from "../Components/Guards/GuestGuards";
import LogInPage from "../Pages/LogInPage";
import UsersListPage from "../Pages/UsersListPage";
import MainLayout from "../Components/MainLayout";
import AdminGuard from "../Components/Guards/AdminGuard";

export const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuards>
        <LogInPage />
      </GuestGuards>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuards>
        <SignUpPage />
      </GuestGuards>
    ),
  },
];

export const GuestRoutes = [...authPages];

export const routers = [
  {
    path: PATHS.HOME,
    element: (
      <UserGuard>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </UserGuard>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.USER.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATHS.USER.USERSLIST,
        element: (
          <AdminGuard>
            <UsersListPage />
          </AdminGuard>
        ),
      },
    ],
  },
  ...GuestRoutes,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: (
      <h1
        style={{
          color: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "50px",
        }}
      >
        Page not found 404
      </h1>
    ),
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
