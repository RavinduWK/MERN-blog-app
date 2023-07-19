import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Wickram Blogs. All rights reserved.</p>
      </div>
    </footer>
  );
}
