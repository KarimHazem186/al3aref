import localFont from "next/font/local";

export const plantagenetCherokee = localFont({
  src: "/fonts/PlantagenetCherokee.otf",
  variable: "--font-plantagenet",
  weight: "400",
});

export const geHeritageTwo = localFont({
  src: "/fonts/GEHeritageTwo-Medium.otf",
  variable: "--font-geheritage",
  weight: "500",
});

export const acumin = localFont({
  src: [
    { path: "/fonts/AcuminVariableConcept-Regular.otf", weight: "400" },
    { path: "/fonts/AcuminVariableConcept-Bold.otf", weight: "700" },
  ],
  variable: "--font-acumin",
});

export const arabotoLight = localFont({
  src: "/fonts/Araboto-Light.otf",
  variable: "--font-araboto",
  weight: "300",
});

export const cairo = localFont({
  src: "/fonts/Cairo-Medium.ttf",
  variable: "--font-cairo",
  weight: "500",
});
