const Pagination = ({
  handleNextButtonClick,
  handlePageNumberClick,
  handlePrevButtonClick,
  currentPage,
  totalNumberOfPages,
}) => {
  return (
    <>
      <div className={"pagination-container"}>
        {currentPage !== 0 && (
          <span className="page-number" onClick={handlePrevButtonClick}>
            ⏮️
          </span>
        )}
        {Array(totalNumberOfPages)
          .keys()
          .map((page) => (
            <span
              className={
                "page-number " + (page === currentPage ? "active" : "")
              }
              onClick={() => handlePageNumberClick(page)}
            >
              {page}
            </span>
          ))}
        {currentPage !== totalNumberOfPages - 1 && (
          <span className="page-number" onClick={handleNextButtonClick}>
            ⏭️
          </span>
        )}
      </div>
      ;
    </>
  );
};

export default Pagination;
