import { useState } from "react";
import "./App.css";
import { data_Mock } from "./data/mock_data";
import ReactPaginage from "react-paginate";
import img from "../src/images/draw1.png";

function App() {
  const [data, setData] = useState(data_Mock.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <div className="users" key={index}>
          <div className="infoCard">
            <h2>{user.firstName}</h2>
            <p>{user.lastName}</p>
            <p>{user.Email}</p>
          </div>
          <div className="divImageCard">
            <img src={img} alt="img22" width="100%" className="imgC" />
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginage
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"paginationsBttns"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
