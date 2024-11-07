import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/MovieService';

const MovieCard = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(id);
                setMovie(data);
            } catch (err) {
                setError('Error fetching movie details');
            }
        };

        loadMovieDetails();
    }, [id]);

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className='flex flex-col w-full justify-center items-center py-16'>
            <div className="bg-black bg-opacity-85 flex flex-col justify-center items-center w-full py-7">
            <div className='w-full max-w-screen-xl flex items-center justify-center flex-col'>
                <div className='w-full px-5 md:px-4 lg:px-2'>

                    {movie ? (
                        <div className='flex flex-col md:flex-row gap-x-12 items-center'>
                            <div>
                                <img className='rounded-lg h-80 sm:h-80 md:h-96 lg:h-[28rem]' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} alt={movie.Title} />
                                <div className='bg-black border border-gray-800 text-sm text-center text-white py-2'>In cinemas </div>
                            </div>


                            <div className="text-white mt-6">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">{movie?.Title}</h1>

                                <div className="flex items-center gap-2 justify-between bg-[#333333] px-4 py-4 rounded-lg text-white w-11/12">
                                    <div className='flex items-center gap-x-2 md:gap-x-4'>
                                        <p className="text-base md:text-lg">{movie?.imdbRating}/10</p>
                                        <p className="text-sm md:text-base">( {movie?.imdbVotes} Votes )</p>
                                    </div>
                                    <button className='bg-white text-black p-2 px-4 text-sm md:text-base rounded-lg'>Rate now</button>
                                </div>

                                <div className='py-5 flex flex-col gap-y-4'>
                                    <p className=" py-1 rounded">{movie?.Language}</p>
                                    <p className="text-gray-100">
                                        {movie?.Runtime} • {movie?.Genre} • {movie?.Rated} • {movie?.Released}
                                    </p>
                                </div>

                                <div className='py-3 md:py-6'>
                                    <button className='bg-[#f84464] text-white p-3 md:p-4 w-48 sm:w-56 font-semibold rounded-md'>
                                        Book Tickets
                                    </button>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <div>
                        <h2></h2>
                    </div>
                </div>
               
            </div>
            
        </div>
        <div className='w-full max-w-screen-xl flex items-center justify-center flex-col px-4 md:px-0'>
            <div className="mt-6 md:mt-10 border-b pb-11">
                    <h2 className="text-2xl mb-4 font-bold">About the movie</h2>
                    <p className="text-gray-800 ">{movie?.Plot}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
