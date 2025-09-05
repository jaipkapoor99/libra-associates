export const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          © {new Date().toLocaleString('default', { month: 'long' })}{' '}
          {new Date().getFullYear()} Libra Associates. All rights reserved.
        </p>
        <p>
          Professional Legal Services | Property Law Specialists
        </p>
      </div>
    </footer>
  );
};
