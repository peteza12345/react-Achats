import { Outlet } from "react-router-dom";

import { PageWrapper } from "../../styles/style";
import Footer from "../footer/Footer";
import Header from '../header/Header';
import Slidebar from '../slidebar/Slidebar';

function BaseLayout() {
   return (
      <PageWrapper>
         <Header />
         <Slidebar />
         <div
            style={{
               minHeight: "calc(100vh - 545px)",
            }}
         >
            <Outlet />
         </div>
         <Footer />
      </PageWrapper>
   )
}

export default BaseLayout