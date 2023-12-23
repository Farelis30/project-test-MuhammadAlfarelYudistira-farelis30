import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Ubah sesuai dengan jumlah halaman yang ingin ditampilkan

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - Math.floor(maxVisiblePages / 2) &&
          i <= currentPage + Math.floor(maxVisiblePages / 2))
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`${
              i === currentPage
                ? "bg-orange-500 text-white"
                : "text-slate-700 hover:bg-orange-500 hover:text-white"
            } transition-all duration-200 px-4 py-2 text-lg rounded`}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - Math.floor(maxVisiblePages / 2) - 1 ||
        i === currentPage + Math.floor(maxVisiblePages / 2) + 1
      ) {
        pageNumbers.push(
          <span key={i} className="text-slate-700">
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="flex gap-2 font-bold">
        <button
          onClick={() => handlePageChange(1)}
          className="transition-all duration-200 px-4 py-2 text-slate-700 text-lg rounded hover:bg-orange-500 hover:text-white"
        >
          <FaAnglesLeft />
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="transition-all duration-200 px-4 py-2 text-slate-700 text-lg rounded hover:bg-orange-500 hover:text-white"
        >
          <FaAngleLeft />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="transition-all duration-200 px-4 py-2 text-slate-700 text-lg rounded hover:bg-orange-500 hover:text-white"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          className="transition-all duration-200 px-4 py-2 text-slate-700 text-lg rounded hover:bg-orange-500 hover:text-white"
        >
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
