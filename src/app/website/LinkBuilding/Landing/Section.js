import React from 'react';
import { Text, Img, Title, Container } from 'style-guide';
import ImageLeftXL from 'assets/link-bulding/img-left-xl.png';
import ImageLeftLG from 'assets/link-bulding/img-left-lg.png';
import ImageLeftMD from 'assets/link-bulding/img-left-md.png';
import { useWindowResize } from 'hooks';
import { getPathByBreakpoint } from 'utils/common';

const TextBlock = ({ t, className }) => (
  <div className={`shadow-layout  p-8 lg:h-full h-auto  flex-1 ${className} `}>
    <Title.H2 className='font-medium ' children={t('choose_keyword')} />
    <div className='xs:pt-4 md:pt-2' />
    <Text.SM className='lg:text-base' children={t('lorem')} />
    <div className='xs:pt-3' />
    <Text.SM className='lg:text-base' children={t('lorem')} />
  </div>
);

const Section = ({ t }) => {
  const { breakpoint } = useWindowResize();
  const imgPath = getPathByBreakpoint({
    breakpoint,
    srcSet: {
      xl: ImageLeftXL,
      lg: ImageLeftLG,
      md: ImageLeftMD,
      sm: ImageLeftMD,
      xs: ImageLeftMD,
    },
  });

  return (
    <div>
      <div className='xl:bg-landing-shape-l-xl xl:h-564 xl:py-10 lg:bg-landing-shape-l-lg lg:h-368 lg:pt-7 md:bg-landing-shape-l-md md:h-349 bg-contain bg-no-repeat'>
        <Container.Base className='grid md:grid-cols-2  xl:gap-20 lg:gap-8 xs:grid-cols-1'>
          <div className='flex xs:justify-end md:justify-start md:items-center lg:items-start md:order-1 xs:order-2 xs:bg-landing-shape-l-md xs:bg-no-repeat xs:h-349 md:bg-none xs:mt-5 md:mt-0'>
            {imgPath && <Img.Static src={imgPath} className='xs:self-center md:self-auto' />}
          </div>
          <div className='md:order-2 xs:order-1'>
            <TextBlock t={t} className='rounded-tr-3xl rounded-bl-3xl' />
          </div>
        </Container.Base>
      </div>
      <div className='xl:pt-28 lg:pt-24 md:pt-20 xs:pt-16' />
      <div className=' xl:bg-landing-shape-r-xl xl:h-564 xl:py-10 lg:bg-landing-shape-l-lg lg:h-368 lg:pt-4 md:bg-landing-shape-r-md md:h-349 bg-right bg-contain bg-no-repeat'>
        <Container.Base className='grid md:grid-cols-2 xl:gap-20 lg:gap-8 xs:grid-cols-1'>
          <div className='w-full'>
            <TextBlock t={t} className='rounded-22' />
          </div>
          <div className='flex md:justify-end xs:justify-start lg:items-start md:items-center xs:bg-landing-shape-l-md xs:bg-no-repeat xs:h-349 md:bg-none xs:bg-right xs:mt-5 md:mt-0'>
            {imgPath && <Img.Static src={imgPath} className='xs:self-center md:self-auto' />}
          </div>
        </Container.Base>
      </div>
    </div>
  );
};

export default Section;
