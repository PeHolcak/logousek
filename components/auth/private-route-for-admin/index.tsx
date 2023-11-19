import Router from "next/router";
import React, { useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import LoadingPage from "@components/pages/loading-page";
import NotFoundPage from "pages/404";

type PrivateRouteProps = {
    children: React.ReactNode
}

const PrivateRouteForAdmin: React.FC<PrivateRouteProps> = ({ children }) => {
    const session = useSession();

    useEffect(() => {
        if (session.status === "unauthenticated") {
            Router.replace("/login");
        }
    }, [session.status]);

    const checkRole = useCallback(() => {
        if ((session?.data?.user as any).role === "ADMIN") {
            return (
                <>{children}</>
            );
        }
        return <NotFoundPage />
    }, [children, session?.data?.user])

    if (session.status === "authenticated") {
        return checkRole();
    }

    return <LoadingPage />
}

export default PrivateRouteForAdmin
