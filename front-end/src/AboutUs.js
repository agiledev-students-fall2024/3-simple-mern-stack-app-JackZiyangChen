import { Link } from 'react-router-dom'
import './AboutUs.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {

  const [title, setTitle] = useState('')
  const [paragraphs, setParagraphs] = useState([])
  const [error, setError] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        const data = response.data
        setTitle(data.title)
        setParagraphs(data.body)
        setImage(data.image)
      })
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="About Us" />
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

// make this component available to be imported into any other file
export default AboutUs
