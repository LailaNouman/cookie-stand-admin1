import { CookieStandAdmin, LoginForm } from "../components";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState();
  const tokens = useContext(AuthContext)

  return (
    <>
    {
      (tokens) ? <CookieStandAdmin username={username} /> : <LoginForm setUsername={setUsername} />
    }
    </>
  )
}