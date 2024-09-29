import { Outlet } from 'react-router-dom';

import { PageWrapper } from "../../styles/style"

import AuthHeader from '../header/AuthHeader';
import Footer from '../footer/Footer';

function AuthLayout() {
   return (
      <PageWrapper>
         <AuthHeader />
         <main>
            <Outlet />
         </main>
         <Footer />
      </PageWrapper>
   )
}

export default AuthLayout