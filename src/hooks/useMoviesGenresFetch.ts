import React, {useState, useEffect, useCallback} from 'react'
import { apiSettings, Movies } from '../api/api';

export const useMoviesGenresFetch = () => {
  const initialYear = 2012;


  // State for storing the list of items
  const [data, setData] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>([]);
  const [genres, setGenres] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<any> ('')
  // State for the current year offset
  const [yearOffset, setYearOffset] = useState(initialYear);
  // State for search and filter query params
  const [searchQuery, setSearchQuery] = useState('');

  const currentYear = new Date().getFullYear();

  const fetchGenres = async() => {
    const genresList: any = await apiSettings.fetchGenres();
    console.log(genresList)
    setGenres(genresList?.genres)

  }

  useEffect(() => { 
    fetchGenres()
  }, [])

  const fetchDataOnSearch = async() => {
    try{
    const newData: Movies = await apiSettings.fetchMoviesonSearch(searchQuery);
     setSearchData([...newData?.results]);
  } catch(err) {
      console.error(err);
    }
  }

  const fetchData = async (emptyList = false) => {
try{
    const newData: Movies = await apiSettings.fetchMovies(emptyList ? initialYear :yearOffset, activeTab);
  if (emptyList) {
    setYearOffset(initialYear);
  }
    // Update the data state with the fetched data
    const movies = emptyList ? [] : [...data];
    if (!movies?.length) {
      setData([{year: emptyList ? initialYear :yearOffset, movies:[...newData?.results] }])
    } else {
      const index = movies?.findIndex((item) => item?.year === yearOffset);
      if (index < 0) {
        if (yearOffset > movies?.[movies?.length - 1]?.year && yearOffset <= Number(currentYear)) {
          setData([...movies, {year: yearOffset, movies:[...newData?.results]}])
        }

      if (yearOffset < movies?.[0]?.year) {
          setData([{year: yearOffset, movies:[...newData?.results]},...movies])
    }
      }}
      } catch(err) {
      console.error(err);
      }
  };

  useEffect(() => {
    if (searchQuery) {
      setData([]);
      fetchDataOnSearch()
    } else {
      setSearchData([]);
  fetchData();
    }
}, [yearOffset, searchQuery]);

  useEffect(() => {
    setData([]);
    fetchData(true);
  },[activeTab])

      useEffect(() => {
    setData([]);
    setYearOffset(initialYear);
  }, [searchQuery]);

  // Implement the infinite scroll event handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    // Check if the user has scrolled to the bottom of the page
    if (!searchQuery) {
    if (scrollPosition >= documentHeight - 150 && yearOffset < Number(currentYear)) {
      // Increment the year offset to fetch previous years
      const year = data?.length ? data?.[data?.length - 1]?.year : yearOffset;
      setYearOffset(year + 1);
    }

    // Check if the user has scrolled to the top of the page
    if (window.scrollY === 0 && yearOffset > 0) {
            const year = data?.length ? data?.[0]?.year: yearOffset;
      // Decrement the year offset to fetch next years
              setYearOffset(year - 1);
    }
    }

  }, [yearOffset, data, searchQuery]);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return {
    data : searchQuery? searchData: data, yearOffset, setSearchQuery, setActiveTab, genres, activeTab, searchQuery
  }
}
