'use client';

import { LinkButton } from '../LinkButton';

interface FeedbackProps extends React.ComponentProps<'div'> {
  className?: string;
  title?: string;
  description?: string;
  buttonMessage?: string;
  href?: string;
}

export const Feedback: React.FC<FeedbackProps> = ({
  title,
  description,
  buttonMessage,
  href,
  className,
  ...props
}) => {
  return (
    <div className={`text-center mt-[30vh] font-inter ${className}`} {...props}>
      {title && <h1 className='font-bold'>{title}</h1>}
      {description && <p>{description}</p>}
      {buttonMessage && href && (
        <LinkButton
          className='m-auto w-min mt-4 text-nowrap'
          variation='secondary'
          href={href}
        >
          {buttonMessage}
        </LinkButton>
      )}
    </div>
  );
};
