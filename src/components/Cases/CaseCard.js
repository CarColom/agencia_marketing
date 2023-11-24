import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CaseCard({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/cases/id"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ${
        isHovered ? 'hover:bg-gray-100' : ''
      }`}
    >
      <div className="flex-shrink-0 relative overflow-hidden">
        <img
          id={data.id}
          className={`w-full h-full transform transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className={`text-xl font-medium ${isHovered ? 'text-blue-700' : 'text-gray-800'}`}>
            <a href={data.category.href} className="hover:underline">
              {data.category.name}
            </a>
          </p>
          <a href={data.category.href} className="mt-2 block">
            <p
              id={index}
              className={`lg:text-4xl pt-4 pb-6 text-2xl font-semibold transition duration-400 ease-in-out ${
                isHovered ? 'text-blue-900' : 'text-gray-900'
              }`}
            >
              {data.title}
            </p>
            <p className="mt-3 text-2xl space-y-2 leading-9 text-gray-500">
              {data.description}
            </p>
          </a>
        </div>
      </div>
    </Link>
  );
}

export default CaseCard;


