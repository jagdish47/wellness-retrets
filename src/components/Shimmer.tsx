import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/3">
      <div className="border border-gray-200 rounded-lg shadow-md p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
