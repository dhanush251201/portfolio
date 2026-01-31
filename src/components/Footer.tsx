export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>$ echo "Built with React + Bun"</p>
      <p>{currentYear}, Dhanush Gowdhaman</p>
    </footer>
  );
}

export default Footer;
