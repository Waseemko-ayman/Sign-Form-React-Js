import { Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
import AdminGuard from "../Components/Guards/AdminGuard";
// import UserGuard from "../Components/Guards/UserGuard";
import { PATHS } from "./paths";
import LogInPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import GuestGuards from "../Components/Guards/GuestGuards";

export const adminPages = [
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
  ...GuestRoutes,
];

export const userPages = [
  {
    path: PATHS.PROFILE,
    element: (
      <GuestGuards>
        <ProfilePage />
      </GuestGuards>
    )
  },
  ...GuestRoutes,
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
  {
    index: true,
    element: (
      <GuestGuards>
        <HomePage />
      </GuestGuards>
    )
  },
  ...authPages,
];


export const routers = [
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found</h1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
  ...userPages,
  ...adminPages,
];