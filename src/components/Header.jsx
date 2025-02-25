const Header = () => {
  return (
    <div className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <h1 className="text-[30px] uppercase font-bold text-red-700">MOVIE</h1>
        <nav className="flex items-center space-x-4">
          <a href="" className="text-white">
            Home
          </a>
          <a href="" className="text-white">
            About
          </a>
          <a href="" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          className="p-2 text-black bg-white"
          type="text"
          placeholder="Search"
        />
        <button className="p-2 text-white bg-red-700">Search</button>
      </div>
    </div>
  );
};

export default Header;
