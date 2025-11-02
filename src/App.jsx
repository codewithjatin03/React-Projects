import { useEffect, useState } from 'react'
import './App.css'
import Result from './components/Result'
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  const getAllMovies = async () => {
    try {
      const data = await fetch(APIURL)
      const finaldata = await data.json();
      console.log(finaldata.results)
      setMovies(finaldata.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getSearchedMovie = async () => {
    setLoading(true)
    try {
      const data = await fetch(SEARCHAPI + search)
      const finaldata = await data.json()
      setMovies(finaldata.results)
      console.log(movies)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (search === "") {
      getAllMovies()
    } else {
      getSearchedMovie()
    }
  }, [search])

  return (
    <div className='max-w-[1240px] shadow-xl h-fit mx-auto p-3 '>
      <input type="search" placeholder='search movie here..' onChange={(e) => setSearch(e.target.value)} value={search} className='w-full border border-black rounded bg-white p-3' style={{position:'sticky',top:"0px"}} />
      {loading ? (<div className='text-3xl text-center text-white'>Loading...</div>) : <Result movies={movies} />}
    </div>
  )
}

export default App
