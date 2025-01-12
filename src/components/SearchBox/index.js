import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="searchBox posotion-relative d-flex align-items-center ml-4">
      <FaSearch className=" mr-2 " />
      <input type="text " placeholder=" search here...." />
    </div>
  );
};
export default SearchBox;
