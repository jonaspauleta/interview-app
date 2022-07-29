import React, { useState } from "react";
import TableHeader from "../components/TableHeader";
import TableRows from "../components/TableRows";
import Login from "../pages/Login";
import useToken from "../useToken";
import Layout from "../layout/Layout";
import axios from "axios";

export default function Table() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(
        "/api/login",
        {},
        {
          baseURL: import.meta.env.VITE_API_ENDPOINT,
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((resp: any) => {
        console.log(resp);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="overflow-x-auto">
        <form onSubmit={handleSubmit}>
          <table className="w-full text-sm text-left text-gray-500 border-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <TableHeader />
            </thead>

            <tbody>
              <TableRows />
            </tbody>
          </table>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3d3f6e] hover:bg-[#282957]"
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}
