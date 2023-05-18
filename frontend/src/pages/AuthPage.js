import React from 'react'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/constants/UserConstants';
const AuthPage = () => {
    const dispatch = useDispatch()



    const signInGoogleFunc = () => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user ; 
                dispatch({type: LOGIN_SUCCESS , payload : user})
            }).catch((error) => {
            
            });


    }

    const login = useSelector((state => state.user.login))

  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center'>
        <div className='w-1/3 h-2/3 bg-white rounded-lg flex flex-col items-center justify-center gap-6'>
            <img  className='w-44' src='https://logos-world.net/wp-content/uploads/2020/05/Logo-WhatsApp.png' alt='whatsapp image '/>
            <div className='font-bold text-3xl'>Whatsapp Giriş</div>
            <div onClick={signInGoogleFunc} className='border px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer hover:opacity-90' >Google ile Giriş Yap </div>
        </div>
    </div>
  )
}

export default AuthPage