
import "./globals.scss";
import { PropsWithChildren } from "react";
import { MainLayout } from "@/components/_layouts/main/main";
import { fonts } from "@/font.config";
import { baseMetadata } from "./metadata";
import Providers from "./providers";

export const metadata = baseMetadata;

export default async function RootLayout({
  children
}: PropsWithChildren) {

  return (
        <html lang="en">
            <body className={fonts}>
                <Providers>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
  );
}
