import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovies } from '../../services/MovieService';

const ContentPage = () => {
    const { category } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const movieData = await fetchMovies(category);
                setMovies(movieData);
            } catch (err) {
                setError("Failed to load movies.");
            } finally {
                setLoading(false);
            }
        };

        loadMovies();
    }, [category]);

    if (loading) return <p>Loading content...</p>;

    return (
        <div className='flex pb-20 mt-16 md:mt-5 items-center justify-center w-full '>
            <div className='max-w-screen-xl w-full'>
                <h1 className='text-lg sm:text-xl md:text-2xl font-semibold pt-6 pb-4 px-4'>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                </h1>
                {error && <p className='text-center text-red-500'>{error}</p>}
                {!error && movies.length === 0 && (
                    <p className='text-center'>No results found</p>
                )}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-4">
                    {movies.map(movie => (
                        <Link 
                            key={movie.imdbID} 
                            to={`/${movie.Title}/${movie.imdbID}`} 
                            className="md:p-4 flex flex-col items-center gap-y-2 cursor-pointer"
                        >
                            <img 
                                className='w-full max-w-[10rem] h-[15rem] object-cover rounded-md' 
                                src={movie.Poster} 
                                alt={movie.Title} 
                            />
                            <h2 className='text-xs md:text-sm text-center'>{movie.Title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentPage;
