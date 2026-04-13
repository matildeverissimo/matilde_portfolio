import React from 'react';
const Footer = ({ profile }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;