import Router from 'next/router'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import LoadingPage from '@components/pages/loading-page'

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { status } = useSession()
  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.replace('/login')
    }
  }, [status])

  if (status === 'authenticated') return <>{children}</>

  return <LoadingPage />
}

export default PrivateRoute
