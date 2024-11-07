import React, { useEffect, useState, useRef } from 'react';
import { fetchRecommendedMovies } from '../../services/MovieService';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const RecommendMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchRecommendedMovies(); 
        setMovies(moviesData);
      } catch (err) {
        setError(err.message);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkScroll();

    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [movies]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'right' ? 700 : -700;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }, 700);
    }
  };

  return (
    <div className='w-full flex items-center justify-center py-3'>
      <div className='max-w-screen-xl gap-x-4 w-full flex flex-col px-2'>
        <div className='flex justify-between w-full mb-4'>
          <h1 className='text-sm sm:text-base md:text-xl lg:text-2xl font-bold'>Recommended Movies</h1>
          <p className='text-blue-500 cursor-pointer text-xs md:text-base'>See all</p>
        </div>

        <div className='relative'>
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className='hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 text-white p-2 rounded-full shadow-md'
            >
              <FaAngleLeft />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className='flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 overflow-x-scroll lg:overflow-hidden scrollbar-hide'
          >
            {error ? (
              <p className='text-red-500'>Error: {error}</p>
            ) : movies.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.imdbID} className=''>
                  <Link to={`/${movie.Title}/${movie.imdbID}`}>
                    <div className='bg-gray-600 text-white rounded-lg shadow-lg min-w-[160px] sm:min-w-[190px] md:min-w-[210px] lg:min-w-[230px]'>
                      <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                        alt={movie.Title}
                        className='w-full h-52  sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded-lg mb-2'
                      />
                    </div>
                  </Link>
                  <h2 className='text-xs sm:text-sm md:text-base lg:text-lg font-medium'>{movie.Title}</h2>
                  <p className='text-gray-600 text-xs sm:text-sm md:text-base'>{movie.Year}</p>
                </div>
              ))
            ) : (
              <p className='text-gray-500'>No recommended movies found.</p>
            )}
          </div>

          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className=' hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 text-white p-2 rounded-full shadow-md'
            >
               <FaAngleRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendMovies;
