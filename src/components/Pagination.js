import React from "react";

const Pagination = ({ currentPage, totalPages, onPageClick }) => {
  const handlePaginationClick = (page) => {
    if (page < 1 || page > totalPages) {
      return; // Ignore invalid page numbers
    }
    onPageClick(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    if (currentPage > 1) {
      pageButtons.push(
        <li key="prev" className="page-item">
          <button
            className="page-link"
            onClick={() => handlePaginationClick(currentPage - 1)}
          >
            Prev
          </button>
        </li>
      );
    } else {
      pageButtons.push(
        <li key="prev" className="page-item disabled prev">
          <button className="page-link " disabled>
            Prev
          </button>
        </li>
      );
    }

    const visiblePages = getVisiblePages();
    visiblePages.forEach((page) => {
      pageButtons.push(
        <li
          key={page}
          className={`page-item ${page === currentPage ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => handlePaginationClick(page)}
          >
            {page}
          </button>
        </li>
      );
    });

    if (currentPage < totalPages) {
      pageButtons.push(
        <li key="next" className="page-item">
          <button
            className="page-link next"
            onClick={() => handlePaginationClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      );
    }

    return pageButtons;
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 3;
    let startPage = currentPage - 1;

    while (visiblePages.length < maxVisiblePages && startPage <= totalPages) {
      if (startPage > 0) {
        visiblePages.push(startPage);
      }
      startPage++;
    }

    if (visiblePages.length < maxVisiblePages) {
      let endPage = currentPage + 1;
      while (visiblePages.length < maxVisiblePages && endPage <= totalPages) {
        visiblePages.push(endPage);
        endPage++;
      }
    }

    return visiblePages;
  };

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center mb-4">
        {renderPageButtons()}
      </ul>
    </nav>
  );
};

export default Pagination;
