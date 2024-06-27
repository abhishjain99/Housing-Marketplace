import { useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) { // to fix memory leak, use isMounted variable - 
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true)
        }
        setLoadingStatus(false)
      })
    }

    return () => { // componentWillUnmount will dispose off everything to avoid memory/resource leaks
      isMounted.current = false
    }
  }, [isMounted])

  return { loggedIn, loadingStatus }
}

// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks