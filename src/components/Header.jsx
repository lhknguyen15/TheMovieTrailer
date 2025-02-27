import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black p-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <h1
          className="text-[30px] uppercase font-bold text-red-700 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          MOVIE
        </h1>
        <nav className="hidden md:flex items-center space-x-4">
          <a href="" className="text-white">
            Phim Hot
          </a>
          <a href="" className="text-white">
            Phim Đề Cử
          </a>
          <a href="" className="text-white">
            Phim Sắp Chiếu
          </a>
        </nav>
        <button className="md:hidden block text-white text-lg p-2">☰</button>
      </div>
      <div className="flex items-center space-x-4">
        <input
          className="border-none focus:outline-none bg-gray-100 p-2 rounded-md w-[150px] md:w-[200px] lg:w-[250px]"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 px-4 text-white font-medium bg-red-700 rounded-md w-full"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Header;
