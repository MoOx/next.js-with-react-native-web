import { SpeedInsights } from "@vercel/speed-insights/next";

import { NextReactNativeStyleSheetProvider } from "@/react-native/NextReactNativeStyleSheetProvider";
import ReactNativeProviders from "@/react-native/ReactNativeProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <NextReactNativeStyleSheetProvider>
          <ReactNativeProviders>{children}</ReactNativeProviders>
        </NextReactNativeStyleSheetProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
