import { RouterProvider, createBrowserRouter } from "react-router-dom";

// PAGES & COMPONENTS
import {
  HomeLayout,
  AddNote,
  Archive,
  Bin,
  DashboardLayout,
  Error,
  Landing,
  Login,
  Notes,
  Register,
  SingleNote,
  Profile,
  VerifyEmail,
  ResetPassword,
  ForgotPassword,
} from "./pages";

// LOADERS
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as landingLoader } from "./pages/Landing";
import { loader as archiveLoader } from "./pages/Archive";
import { loader as binLoader } from "./pages/Bin";
import { loader as notesLoader } from "./pages/Notes";
import { loader as singleNoteLoader } from "./pages/SingleNote";
import { loader as verifyEmailLoader } from "./pages/VerifyEmail";
import { loader as resetPasswordLoader } from "./pages/ResetPassword";

// ACTION
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as addNoteAction } from "./pages/AddNote";
import { action as updateNoteAction } from "./pages/UpdateNote";
import { action as singleNoteAction } from "./pages/SingleNote";
import { action as profileAction } from "./pages/Profile";
import { action as verifyEmailAction } from "./pages/VerifyEmail";
import { action as resetPasswordAction } from "./pages/ResetPassword";
import { action as forgotPasswordAction } from "./pages/ForgotPassword";

import HomeLanding from "./pages/HomeLanding";

export const getThemeFromLocalStorage = () => {
  const isDarkTheme = localStorage.getItem("theme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
getThemeFromLocalStorage();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomeLanding />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Landing />,
            loader: landingLoader,
          },
          {
            path: "addNote",
            element: <AddNote />,
            action: addNoteAction,
          },
          {
            path: "notes",
            element: <Notes />,
            loader: notesLoader,
          },
          {
            path: "notes/:id",
            element: <SingleNote />,
            loader: singleNoteLoader,
            action: singleNoteAction,
          },
          {
            path: "archive",
            element: <Archive />,
            loader: archiveLoader,
          },
          {
            path: "archive/:id",
            element: <SingleNote />,
            loader: singleNoteLoader,
            action: singleNoteAction,
          },
          {
            path: "bin",
            element: <Bin />,
            loader: binLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "update-note/:id",
            action: updateNoteAction,
          },
        ],
      },
    ],
  },
  {
    path: "/user/verify-email",
    element: <VerifyEmail />,
    action: verifyEmailAction,
    loader: verifyEmailLoader,
  },
  {
    path: "/user/forgot-password",
    element: <ForgotPassword />,
    action: forgotPasswordAction,
  },
  {
    path: "/user/reset-password",
    element: <ResetPassword />,
    loader: resetPasswordLoader,
    action: resetPasswordAction,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
