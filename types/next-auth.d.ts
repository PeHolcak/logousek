declare module "next-auth" {
    interface Session {
        id: string,
        name: string,
        role: string,
        user?: {
            role: string;
            id: string
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        name: string;
        role: string;
    }
}
