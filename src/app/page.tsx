'use client';
import {useState} from 'react';

import {Input} from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';

export default function Home (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const onSubmit =()=>{
    authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/dashboard"
    },{
      onError:() =>{
        window.alert('Error');

      },
      onSuccess:() =>{
        window.alert('Success');
      }
    })
  }

  return  (
    <div>
      <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button   className="hover:bg-blue-500 bg-blue-500 text-white p-2 rounded-md"type="submit" onClick={onSubmit} >Login</button>
      
    </div>
  )
  
  
}