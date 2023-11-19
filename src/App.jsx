import { useEffect, useState } from 'react';
import './styles/index.css';
import CardImage from "./card-image";

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])


  let images_per_page = 21
  let apiURL= 'https://api.unsplash.com/search/photos'

  async function getImages(){
     try {
         const res = await fetch(`${apiURL}?query=${searchText}&page=${page}&per_page=${images_per_page}&client_id=${import.meta.env.VITE_API_KEY}`)
        const data = res.json()
        console.log('request');
        
        return data 

      } catch (error) {
        console.log(error);
     }
    }

    
    const handleInput = (e) => {
      e.preventDefault()
      setSearchText(e.target.value)
    }
    const handleSearch = (e) =>{
      e.preventDefault()

      getImages().then((res) => {
        setImages(res.results)
        setTotalPages(res.total_pages)
      })
      setPage(1)

    }

    

    useEffect(() => {
      getImages().then((res) => {
        setImages(res.results)
        setTotalPages(res.total_pages)
      })
    }, [page])


  return (
    <>
    <main>
        <form action="" onSubmit={handleSearch}>
          <h1>Image Search</h1>
        
          <input type="search" name="search" id="search" onChange={handleInput} placeholder='Search your image here...' />
        </form>


        <div className='images'>
          {images.map((image) => {
            return (
              <CardImage id={image.id} key={image.id} url={image.urls.full} desc={image.alt_description} link={image.links.html} />
            );
          })}
        </div>

          <div className="buttons">

            {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
            {page < totalPages && <button  onClick={() => setPage(page + 1)}>next</button>}



          {totalPages > 1 ? 
          (
            <p className='totalpages'>Page {page} of {totalPages}</p>
          ): 
          (
            <p></p>
          )}
          </div>

         
      


    </main>
    </>
  )
}

export default App;