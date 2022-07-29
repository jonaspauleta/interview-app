import React, { useState } from "react";
import axios from "axios"
import useToken from "../useToken";
import useUser from "../useUser";
import Layout from "../layout/Layout"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('/api/login', {
        email: email,
        password: password
    }, {
        baseURL: import.meta.env.VITE_API_ENDPOINT,
        headers: {
            'Accept': 'application/json',
        },
    }).then((resp: any) => {
        console.log(resp)

        setToken(resp.data.token)
        setUser(resp.data.user)
        window.location.href = '/'
    }).catch((err: any) => {
        console.log(err)
    })
  };

  return (
    <Layout>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                
                <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3d3f6e] hover:bg-[#282957]"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}
