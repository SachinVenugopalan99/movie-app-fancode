import React, {useState, useEffect} from 'react'
import PageContainer from '../components/PageContainer/PageContainer'
import Navbar from '../components/Navbar/Navbar'
import MoviesWrapper from '../components/MoviesWrapper/MoviesWrapper'
import { useMoviesGenresFetch } from '../hooks/useMoviesGenresFetch'

const LandingPage = () => {

    const {data, yearOffset, setSearchQuery, activeTab, setActiveTab, genres, searchQuery} = useMoviesGenresFetch()

  return (
    <PageContainer>
      <Navbar tabs={genres} setSearchQuery={setSearchQuery} activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery}/>
      <MoviesWrapper data={data} searchQuery={searchQuery}/>
    </PageContainer>
  )
}

export default LandingPage
