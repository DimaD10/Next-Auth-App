import { authMiddleware } from "@clerk/nextjs/server";


export default authMiddleware({
    publicRoutes: [
        "/sign-in",
        "/sign-up"
    ]
})

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/order", "/order/:path*", "/(api|trpc)(.*)"],
};
