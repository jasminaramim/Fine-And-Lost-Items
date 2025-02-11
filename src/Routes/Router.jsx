import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
// import LostItemsPage from "../Pages/LostItemsPage";
// import FoundItemsPage from "../Pages/FoundItemsPage";
// import AddLostItemPage from "../Pages/AddLostItemPage";
// import AddFoundItemPage from "../Pages/AddFoundItemPage";
// import ManageMyItemsPage from "../Pages/ManageMyItemsPage";
// import LoginPage from "../Pages/LoginPage";
// import PrivateRoute from "../Components/PrivateRoute";
// import LostItemsPage from "../Compononets/LostItemsPage";
// import FoundItemsPage from "../Compononets/FoundItemsPage";
// import AddLostItemPage from "../Compononets/AddLostItemPage";
// import AddFoundItemPage from "../Compononets/AddFoundItemPage";
import ManageMyItemsPage from "../Compononets/ManageMyItemsPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import RegisterPage from "../Pages/RegisterPage";
import RecoveryItems from "../Compononets/RecoveryItems";
// import FoundItemsPage from "../Compononets/FoundItemsPage";
import AddLostFoundItemPage from "../Compononets/AddLostItemPage";
import AllItemsPage from "../Compononets/AllItemsPage";
import PostDetailsPage from "../Pages/PostDetailsPage";
import UpdateItemPage from "../Pages/UpdateItemPage";
import AboutUsPage from "../Pages/AboutUsPage";
import FeedbackPage from "../Pages/FeedbackPage";
import ServicesPage from "../Pages/ServicesPage";
import NotFoundPage from "../Pages/NotFoundPage ";

const Router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/services",
    element: (
      <Layout>
        <ServicesPage />
      </Layout>
    ),
  },
  {
    path: "/feedback",
    element: (
      <Layout>
        <FeedbackPage />
      </Layout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Layout>
        <AboutUsPage />
      </Layout>
    ),
  },
  {
    path: "/AllItemsPage",
    element: (
      <Layout>
        <AllItemsPage />
      </Layout>
    ),
  },
  // {
  //   path: "/found-items",
  //   element: (
  //     <Layout>
  //       <FoundItemsPage />
  //     </Layout>
  //   ),
  // },
  {
    path: "/add-lost-item",
    element: (
      <PrivateRoute>
        <Layout>
          <AddLostFoundItemPage />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/All-Recovered-Items",
    element: (
      <PrivateRoute>
        <Layout>
          <RecoveryItems />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/manage-my-items",
    element: (
      <PrivateRoute>
        <Layout>
          <ManageMyItemsPage />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },

  {
    path: "/registration",
    element: (
      <Layout>
        <RegisterPage />
      </Layout>
    ),
  },

  {
    path: "/items/:id",
    element: (
      <PrivateRoute>
      <Layout>
        <PostDetailsPage />
      </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/updateItem/:id",
    element: (
      <PrivateRoute>
        <Layout>
          <UpdateItemPage />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "*", // This will match any unmatched path
    element: <NotFoundPage />,
  },
]);

export default Router;
