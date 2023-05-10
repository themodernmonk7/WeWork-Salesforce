import "./globals.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "WeWork + Salesforce | Workspace Proposal ",
  description: "Transforming workspaces with responsive and accessible designs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`montserrat.className bg-[#F2FBF9] `}>{children}</body>
    </html>
  )
}
