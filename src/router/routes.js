import { Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
import AdminGuard from "../Components/Guards/AdminGuard";
import UserGuard from "../Components/Guards/UserGuard";
import { PATHS } from "./paths";
import SignUpPage from "../Pages/SignUpPage";
import GuestGuards from "../Components/Guards/GuestGuards";
import LogInPage from "../Pages/LogInPage";

export const adminPages = [
  {
    index: true,
    element: (
      <GuestGuards>
        <HomePage />
      </GuestGuards>
    )
  },
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <h1>Admin</h1>,
      },
    ]
  },
  {
    path: PATHS.PROFILE,
    element: (
      <GuestGuards>
        <ProfilePage />
      </GuestGuards>
    )
  },
  // eslint-disable-next-line no-use-before-define
  ...authPages,
];

export const userPages = [
  {
    index: true,
    element: (
      <GuestGuards>
        <HomePage />
      </GuestGuards>
    )
  },
  {
    path: PATHS.PROFILE,
    element: (
      <GuestGuards>
        <ProfilePage />
      </GuestGuards>
    )
  },
  // eslint-disable-next-line no-use-before-define
  ...authPages,
];

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
  }
];

export const GuestRoutes = [
  ...authPages,
];

export const routers = [
  ...adminPages,
  ...userPages,
  ...GuestRoutes,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found</h1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];