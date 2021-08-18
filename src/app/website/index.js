import React from 'react';
import Router from 'routers';
import { Footer, Header } from 'style-guide';
import { useWindowResize } from 'hooks';
import { MobileSidebar } from 'style-guide';

// for test only : comment or remove before build
// const BreakpointInfo = () => {
//   const { breakpoint, width, height } = useWindowResize();
//   return (
//     <div className='fixed flex justify-center items-center bottom-0 right-0 w-14 h-14 rounded-full   bg-primary text-tiny text-white mb-12 mr-12 text-center'>
//       {breakpoint}
//       <br />
//       w-{width}
//       <br />
//       h-{height}
//     </div>
//   );
// };

const Website = () => {
  const { isMobile } = useWindowResize();
  return (
    <div className='flex-col'>
      <Header />
      <main>
        <div className='xs:pt-0 md:pt-0' />
        <Router.Website isMobile={isMobile} />
      </main>
      {isMobile ? <MobileSidebar /> : null}
      {/* <BreakpointInfo /> */}
      <Footer />
    </div>
  );
};

export default Website;
