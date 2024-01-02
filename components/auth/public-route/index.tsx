import React from 'react'
import { useSession } from 'next-auth/react'
import LoadingPage from '@components/pages/loading-page'

type PrivateRouteProps = {
  children: React.ReactNode
}

const PublicRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { status } = useSession()

  if (status === 'authenticated' || status === 'unauthenticated')
    return <>{children}</>

  return <LoadingPage />
}

export default PublicRoute
