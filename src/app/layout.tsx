import "aplayer-react/dist/index.css"
import { dir } from "i18next"
import { Metadata } from "next"
import { Toaster } from "react-hot-toast"

import "~/css/main.css"
import { useAcceptLang } from "~/hooks/useAcceptLang"
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN, SITE_URL } from "~/lib/env"

import Providers from "./providers"

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_SLOGAN}`,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  generator: APP_NAME,
  keywords: [
    "blog",
    "xlog",
    "blockchain",
    "ethereum",
    "web3",
    "dapp",
    "crypto",
  ],
  themeColor: "#ffffff",
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed/latest?format=xml", title: "xLog Latest" },
        { url: "/feed/hottest?interval=0&format=xml", title: "xLog Hottest" },
        {
          url: "/feed/hottest?interval=1&format=xml",
          title: "xLog Hottest of the Day",
        },
        {
          url: "/feed/hottest?interval=7&format=xml",
          title: "xLog Hottest of the Week",
        },
        {
          url: "/feed/hottest?interval=30&format=xml",
          title: "xLog Hottest of the Month",
        },
      ],
      "application/feed+json": [
        { url: "/feed/latest", title: "xLog Latest" },
        { url: "/feed/hottest?interval=0", title: "xLog Hottest" },
        { url: "/feed/hottest?interval=1", title: "xLog Hottest of the Day" },
        { url: "/feed/hottest?interval=7", title: "xLog Hottest of the Week" },
        {
          url: "/feed/hottest?interval=30",
          title: "xLog Hottest of the Month",
        },
      ],
    },
  },
  icons: `${SITE_URL}/assets/logo.svg`,
  openGraph: {
    siteName: `${APP_NAME} - ${APP_SLOGAN}`,
    description: APP_DESCRIPTION,
    images: [`${SITE_URL}/assets/logo.svg`],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - ${APP_SLOGAN}`,
    description: APP_DESCRIPTION,
    images: [`${SITE_URL}/assets/logo.svg`],
    site: "@_xLog",
    creator: "@_xLog",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = useAcceptLang()

  return (
    <html lang={lang} dir={dir(lang)}>
      <body>
        <Providers lang={lang}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
