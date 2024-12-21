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
import LostItemsPage from "../Compononets/LostItemsPage";
import FoundItemsPage from "../Compononets/FoundItemsPage";
import AddLostItemPage from "../Compononets/AddLostItemPage";
import AddFoundItemPage from "../Compononets/AddFoundItemPage";
import ManageMyItemsPage from "../Compononets/ManageMyItemsPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

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
    path: "/lost-items",
    element: (
      <Layout>
        <LostItemsPage />
      </Layout>
    ),
  },
  {
    path: "/found-items",
    element: (
      <Layout>
        <FoundItemsPage />
      </Layout>
    ),
  },
  {
    path: "/add-lost-item",
    element: (
      <PrivateRoute>
        <Layout>
          <AddLostItemPage />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/add-found-item",
    element: (
      <PrivateRoute>
        <Layout>
          <AddFoundItemPage />
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
]);

export default Router;
