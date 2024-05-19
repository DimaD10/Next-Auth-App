import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";

const customAuthMiddleware = async (
  req: NextRequest,
  event: NextFetchEvent
): Promise<Response | undefined> => {
  // Стандартная обработка с помощью authMiddleware
  const response = await authMiddleware({
    publicRoutes: ["/sign-in", "/sign-up"],
  })(req, event);

  // Ваша кастомная логика
  if (!response) {
    const { user } = req.auth.user;
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    return new Response(`Hello, ${user.firstName}`);
  }

  return response;
};

// Экспортируем как default экспорт
export default customAuthMiddleware;

export const config = {
  matcher: [
    "/((?!.+.[w]+$|_next).*)",
    "/",
    "/order",
    "/order/:path*",
    "/(api|trpc)(.*)",
  ],
};
