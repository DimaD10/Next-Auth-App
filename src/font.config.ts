
import { Manrope, Pacifico } from "next/font/google";

const manrope = Manrope({
    weight: ["300", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-manrope"
});

const pacifico = Pacifico({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-pacifico",
});

const fonts = `${manrope.variable} ${pacifico.variable}`;

export {
    fonts
};