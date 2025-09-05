export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-8 shadow-2xl shadow-inner">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().toLocaleString('default', { month: 'long' })}{' '}
          {new Date().getFullYear()} Libra Associates. All rights reserved.
        </p>
        <p className="mt-2">
          Professional Legal Services | Property Law Specialists
        </p>
      </div>
    </footer>
  );
};
