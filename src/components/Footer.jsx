const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>🎞️ movieReview</h2>
          <p>Your go-to spot for honest, passionate movie takes.</p>
        </div>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <div className="footer-socials">
          <p>Follow us:</p>
          <a href="#">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} movieReview. Made with 🍿 and ❤️ by Me :3
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
