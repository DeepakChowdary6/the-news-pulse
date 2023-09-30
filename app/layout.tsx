import Header from "@/app/header";
import Providers from "@/app/Providers";
export const metadata = {
    title: 'news-pulse',
    description: 'current-news',
}

export default function RootLayout({children,}: {children: React.ReactNode }) {
    return (
        <html lang="en" >
      <Providers>
        <body className={"dark:bg-black transition-all duration-200"}>
        <Header/>
        <div className={"max-w-6xl mx-auto"}>
            {children}
        </div>
        </body>
      </Providers>
        </html>
    )
}
