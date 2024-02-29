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
            <form>
                <div className="pb-4">
                    <label htmlFor="userName" className='mb-2 font-bold block'>User Name</label>
                    <input type="text" name="price" id="userName"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           className="block w-full rounded-md border border-gray-600 py-3 pl-3 pr-10 text-gray-900 placeholder:text-gray-400"
                           placeholder="User name.."/>
                </div>
                <div className="pb-4">
                    <label htmlFor="userName" className='mb-2 font-bold block'>Password</label>
                    <input type="password" name="price" id="userName"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="block w-full rounded-md border border-gray-600 py-3 pl-3 pr-10 text-gray-900 placeholder:text-gray-400"
                           placeholder="User name.."/>
                </div>
            </form>

            <button onClick={submitLoginForm}
                    type='submit'
                    className='bg-purple-700 px-4 py-2 rounded-lg text-white'>Login
            </button>
        </div>
    )
}
