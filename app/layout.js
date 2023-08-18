import NavBar from "../components/NavBar"
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ["300", "400", "500", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
