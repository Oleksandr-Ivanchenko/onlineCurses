import React from 'react';

interface AnchorLinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ to, children, className, }) => (
  <span onClick={() => window.location.href = '/#' + to} className={`${className} anchor-link`}>
    {children}
  </span>
);

export default AnchorLink;