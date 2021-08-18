import React from 'react';
import Icon from './Icon';

const baseStyles = 'rounded-full font-medium text-sm hover:opacity-75 transition-all duration-300';

const SignIn = (props) => (
  <button
    className={`${baseStyles} bg-primary shadow-button text-light self-center sm:w-56 xs:w-full xs:py-3 md:py-2 md:w-22 xl:w-24 xl:py-3 select-none`}
    {...props}
  />
);
const SignUp = (props) => (
  <button
    className={`${baseStyles} bg-orange shadow-button text-light self-center xs:w-full xs:py-3 sm:w-56 md:py-2 md:w-22 xl:w-24 xl:py-3 select-none`}
    {...props}
  />
);

const Primary = ({ className, ...props }) => (
  <button className={`${baseStyles} bg-primary shadow-button text-light ${className}`} {...props} />
);
const Secondary = ({ className, ...props }) => (
  <button
    className={`${baseStyles} ${className} bg-secondary shadow-button text-dark`}
    {...props}
  />
);
const Orange = ({ className, ...props }) => (
  <button
    className={`${baseStyles} bg-orange shadow-button text-light py-3 px-8 ${className}`}
    {...props}
  />
);

const Base = ({ className, ...props }) => {
  return <button className={className} {...props} />;
};

const icons = {
  remove: Icon.Remove,
  read: Icon.Read,
  unread: Icon.Unread,
  label: Icon.Label,
};
const WithIcon = ({ className, children, iconType, ...props }) => {
  const RenderIcon = icons[iconType];
  return (
    <button className={`flex items-center group ${className} `} {...props}>
      <div className='w-7 h-7 shadow-icon flex items-center justify-center rounded-full'>
        <RenderIcon className='fill-primary group-hover:fill-primary-light' />
      </div>
      <div className='pl-2' />
      <span>{children}</span>
    </button>
  );
};

const Button = {
  Primary,
  Secondary,
  Orange,
  SignIn,
  SignUp,
  Base,
  WithIcon,
};

export default Button;
