import { PATHS } from 'common';
import React from 'react';
import { Text, Button, Link } from 'style-guide';

const Card = ({
  t,
  id,
  title,
  price = '100.00',
  gradient,
  icon,
  listData = ['lorem ipsum', 'lorem ipsum'],
  popular,
}) => {

  return (
    <>
      <div
        className={`xs:w-full ${
          popular ? 'shadow-md relative bottom-2 rounded-tr-22 rounded-bl-22' : ''
        } `}
        key={id}
      >
        <div
          className={`text-center p-1 rounded-tr-22 border-1 relative ${
            popular ? 'bg-lightSecond' : 'border-lightAlpha'
          } `}
        >
          {popular ? (
            <div className='absolute w-20 rounded-br-22 bg-orange left-0 top-0'>
              <Text.XS className='font-medium text-body' children={t('popular')} />
            </div>
          ) : null}
          <div className='pt-6' />
          <Text.MD
            className={`xs:text-4xl font-medium ${popular ? 'text-primaryLight' : 'text-dark'} `}
            children={`${t(title)} CREDIT`}
          />
          <div
            className={`xs:text-2xl font-medium ${popular ? 'text-primaryLight' : 'text-dark'} `}
          >
            for {price}
          </div>
          <div className='pb-5' />
        </div>
        <div
          className={`px-5 py-8 rounded-bl-22 border-b-1 border-r-1 border-l-1 ${
            popular ? 'bg-lightSecond' : 'border-lightAlpha'
          }  `}
        >
          <ul className='list-inside list-none grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xs:gap-3 md:gap-5'>
            {listData.map((li, idx) => (
              <li className='flex items-start lg:w-full' key={idx}>
                {icon}
                <div className='pl-2' />
                <Text.SM children={t(li)} className='font-normal flex-1' />
              </li>
            ))}
          </ul>
          <div className='lg:pt-8 xs:pt-5' />
          <div className='text-center'>
            <Link.Internal
              to={{
                pathname: PATHS.PAYMENT_DETAILS,
                search: `?id=${id}`,
              }}
            >
              <Button.Primary className={`${gradient} px-12 py-3 text-sm`} children={t(`select`)} />
            </Link.Internal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

// Old Pricing Card 

// const Card = ({
//   t,
//   id,
//   title,
//   price = '100.00',
//   gradient,
//   icon,
//   listData = ['lorem ipsum', 'lorem ipsum'],
//   popular,
//   link,
// }) => {
//   const history = useHistory();

//   return (
//     <>
//       {/* Old Pricing Card */}
//       <div className='xs:w-full'>
//       <div className={`text-center p-1 rounded-t-22 border-1 border-lightAlpha ${gradient}`}>
//         <div className='pt-4' />
//         <Text.MD className='xs:text-lg font-bold text-body' children={t(t_key)} />
//         <div className='pt-2' />
//         <div className='xs:text-2xl font-bold text-body'> ${price}</div>
//       </div>
//       <div className='px-5 py-8 rounded-b-22 border-b-1 border-r-1 border-l-1 border-lightAlpha'>
//         <ul className='list-inside list-none grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xs:gap-3 md:gap-5'>
//           {listData.map((li, idx) => (
//             <li className='flex items-start lg:w-full' key={idx}>
//               {icon}
//               <div className='pl-2' />
//               <Text.SM children={t(li)} className='font-normal flex-1' />
//             </li>
//           ))}
//         </ul>
//         <div className='lg:pt-8 xs:pt-5' />
//         <div className='text-center'>
//           <Button.Primary
//             className={`${gradient} px-8 py-3 xs:text-sm`}
//             children={t('pricing_get')}
//             onClick={() => history.push(`${link}`)}
//           />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Card;