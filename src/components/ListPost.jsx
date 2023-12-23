"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sorter from "./Sorter";
import CardGroup from "./CardGroup";
import Pagination from "./Pagination";

const ListPost = () => {
  const [metaData, setMetaData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOption, setSortOption] = useState("newest");

  // console.log(cardData);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true when fetching data
      try {
        const res = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": currentPage,
              "page[size]": pageSize,
              "append[]": ["small_image", "medium_image"],
            },
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        setCardData(
          res.data.data
            .slice()
            .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
        );
        setMetaData(res.data.meta);

        // Set total pages based on total data and data per page
        setTotalPages(Math.ceil(res.data.meta.total / pageSize));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading back to false regardless of success or error
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (e) => {
    setIsLoading(true);
    setSortOption(e.target.value);

    const sortedData = cardData.slice().sort((a, b) => {
      if (e.target.value === "newest") {
        return new Date(b.published_at) - new Date(a.published_at);
      } else if (e.target.value === "latest") {
        return new Date(a.published_at) - new Date(b.published_at);
      }
      return 0;
    });

    setIsLoading(false);
    setCardData(sortedData);
  };

  return (
    <div className="px-24 py-10">
      <Sorter
        metaData={metaData}
        cardData={cardData}
        setCardData={setCardData}
        setPageSize={setPageSize}
        setIsLoading={setIsLoading}
        handleSortChange={handleSortChange}
        sortOption={sortOption}
      />
      <CardGroup
        cardData={cardData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ListPost;
