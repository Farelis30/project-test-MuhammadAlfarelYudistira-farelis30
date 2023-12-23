"use client";
import React, { useState } from "react";

const Sorter = ({
  metaData,
  setPageSize,
  handleSortChange,
  sortOption,
  setIsLoading,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>
          Showing {metaData.from} - {metaData.to} of {metaData.total}
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <p>Show Per Page: </p>
          <select
            name=""
            id=""
            className="select select-bordered max-w-full rounded-3xl"
            onChange={(e) => {
              setIsLoading(true),
                setPageSize(e.target.value),
                setIsLoading(false);
            }}
          >
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex gap-2 pl-2 pr-8 items-center">
          <p>Sort By: </p>
          <select
            name=""
            id=""
            className="select select-bordered max-w-full rounded-3xl"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="newest">Newest</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sorter;
