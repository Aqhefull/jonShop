import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-facebook-f" />
        </a>
        <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-instagram" />
        </a>
        <a href="https://github.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-github" />
        </a>
        <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-twitter" />
        </a>
      </div>
      <span className="copyright">By Alexander Komarevich ©2019</span>
    </footer>
  );
}
export default Footer
