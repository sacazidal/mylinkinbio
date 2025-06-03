import { Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});
