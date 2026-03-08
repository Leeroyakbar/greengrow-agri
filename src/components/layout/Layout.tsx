import { Toaster } from "sonner"
import Navbar from "../landing/Navbar"
import Footer from "../landing/Footer"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
