
const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-purple-400 text-xl font-bold mb-4">Aurex Labs</h3>
            <p className="text-gray-400">
              Building successful products through innovation and expertise.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Website Design</li>
              <li>Web Development</li>
              <li>SEO Optimization</li>
              <li>Maintenance</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Twitter</li>
              <li>Email</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Aurex Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
