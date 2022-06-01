import "./search.scss";

const search = () => {
    return (
      <div className="searchMainContainer">
        <div className=" flex justify-center font-bold text-6xl welcome ">
          Welcome to TraceX
        </div>
      <div className="flex justify-center searchContainer">
        <input
          className="p-3 font-bold rounded-3xl search"
          type="text"
          placeholder="Search..."
        />
        <i
          className="flex items-center rounded-3xl mx-1 p-3 fa fa-search searchIcon"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default search;
