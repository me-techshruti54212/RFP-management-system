const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  startIndex,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="row pt-3">
      <div className="col-sm-12 col-md-5">
        <div className="dataTables_info">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}{" "}
          entries
        </div>
      </div>
      <div className="col-sm-12 col-md-7">
        <div className="dataTables_paginate paging_simple_numbers">
          <ul className="pagination">
            <li
              className={`paginate_button page-item previous ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={handlePrev}
              style={{ cursor: "pointer" }}
            >
              <button className="page-link">Previous</button>
            </li>

            <li className="paginate_button page-item active">
              <button className="page-link">{currentPage}</button>
            </li>

            <li
              className={`paginate_button page-item next ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={handleNext}
              style={{ cursor: "pointer" }}
            >
              <button className="page-link">Next</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
