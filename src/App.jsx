import getRandomNumbers from './utils/getRandomNumber'
import './App.css'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react';
import LocationInfo from './components/LocationInfo';
import ResidentsCart from './components/ResidentsCart';
import FormSearch from './components/FormSearch';
import ErrorInput from './components/ErrorInput';

function App() {
const [idLocation, setIdLocation] = useState(getRandomNumbers(126))

const url= `https://rickandmortyapi.com/api/location/${idLocation}`


const [ location, getApiLocation, hasError ] = useFetch(url);


useEffect(() => {
  getApiLocation()
}, [idLocation])


  return (

     <div className='app'> 
      <img  className='img__hero' alt=" Rick y Morty"   src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2015/07/rick-morty.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" ></img>
      <FormSearch
        setIdLocation={setIdLocation}
        />
        {
          hasError
          ? <ErrorInput/>
          :(
            <>
            <LocationInfo
            location = {location}
            idLocation={idLocation}/>
    
            <div className='resident__container'>
              {
                location?.residents.map(url => (
                  <ResidentsCart
                  url={url}
                  key={url}
                  />
                ))
              }
              
            </div>
            </>
          )
        }
    
     </div>
    
  )
}

export default App
