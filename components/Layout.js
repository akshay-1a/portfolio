import { Sora } from '@next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";


// font settings
 const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500' , '600', '700',
   '800'],
 });

// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return (
    <div
      className={
        "page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative"
      }
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Layout;


// re_VGmUax53_JVkBViGZDPos2NajaZbvpcQe