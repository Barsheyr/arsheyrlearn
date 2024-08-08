import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  AboutPage,
  CheckoutPage,
  ContactPage,
  CoursePage,
  Courses,
  HomeLayout,
  Landing,
  Login,
  PricingPage,
  Register,
} from "./pages";

import { ErrorElement } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CoursePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
