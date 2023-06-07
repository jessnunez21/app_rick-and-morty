import { useRef, useState } from "react"
import InputError from "./InputError"


const FormSearch = ({setIdLocation}) => {

const idLocationValue =useRef()

const [inputIsEmpty, setInputIsEmpty] = useState(false)
const handleSubmit = e =>{
    e.preventDefault()
    const inputValue = idLocationValue.current.value.trim() 

      if(inputValue === ''){
        setInputIsEmpty(true)
        setTimeout(() => {
          setInputIsEmpty(false)
        }, 3000);

      }else{
        setIdLocation( inputValue )
      }
}

  return (
    <>
    <form className="content__form" onSubmit={handleSubmit}>
        <input className="content__input" placeholder="Enter id location" 
        type="text"
        ref={idLocationValue}
        />
        <button className="content_input-btn"> Search</button>
    </form>
        {
          inputIsEmpty && <InputError/>
        }
    </>
  )
}

export default FormSearch