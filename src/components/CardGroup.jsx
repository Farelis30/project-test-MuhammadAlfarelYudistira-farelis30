"use client";
import Image from "next/image";
import React from "react";

const CardGroup = ({ cardData, isLoading }) => {
  const formatTanggal = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { day: "numeric", month: "long", year: "numeric" };

    return inputDate.toLocaleDateString("id-ID", options).toLocaleUpperCase();
  };

  console.log(isLoading);

  return (
    <>
      {!isLoading ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((value, index) => (
            <div className="card w-full bg-base-100 shadow-md" key={index}>
              <figure>
                {value.medium_image && value.medium_image[0] && (
                  <Image
                    src={value.medium_image[0].url}
                    width={200}
                    height={300}
                    className="object-cover w-full h-40"
                    alt={value.title}
                  />
                )}
              </figure>
              <div className="bg-white p-4">
                <p className="text-sm text-gray-500 mb-2">
                  {formatTanggal(value.published_at)}
                </p>
                <h2 className="text-xl font-bold">{value.title}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <span className="loading loading-bars loading-md"></span>
        </div>
      )}
    </>
  );
};

export default CardGroup;
