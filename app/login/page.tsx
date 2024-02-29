'use client'

import {useRouter} from 'next/navigation'
import {login} from "@/lib/services/auth";
import {useState} from "react";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(router)

    const submitLoginForm = () => {
        console.log('submitLoginForm:: ')
        login(username, password)
            .then(data => {
                console.log('Login successful:', data)
                router.push('/dashboard')
            })
            .catch(error => console.error('Login failed:', error));
    }

    return (
        <div className='p-4 max-w-screen-sm mx-auto h-svh flex items-center flex-col justify-center'>
            <h3 className='mb-4 pb-4 text-3xl'>Login page </h3>
            <form action={submitLoginForm} className='text-center'>
                <div className="pb-4 text-left">
                    <label htmlFor="userName" className='mb-2 font-bold block'>User Name</label>
                    <input type="text" name="price" id="userName"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           className="block w-full rounded-md border border-gray-600 py-3 pl-3 pr-10 text-gray-900 placeholder:text-gray-400"
                           placeholder="User name.."/>
                </div>
                <div className="pb-4 text-left">
                    <label htmlFor="userPassword" className='mb-2 font-bold block'>Password</label>
                    <input type="password" name="price" id="userPassword"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="block w-full rounded-md border border-gray-600 py-3 pl-3 pr-10 text-gray-900 placeholder:text-gray-400"
                           placeholder="User name.."/>
                </div>

                <button type='submit'
                        className='bg-purple-700 px-12 py-3 mt-2 rounded-lg text-white'>Login
                </button>
            </form>

        </div>
    )
}
