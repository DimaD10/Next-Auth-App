// clerk.d.ts
import { User } from "@clerk/nextjs/dist/api";

declare module "next/server" {
  interface NextRequest {
    auth: {
      user: User | null;
    };
  }
}
