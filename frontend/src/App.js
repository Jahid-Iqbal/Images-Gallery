import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import React from 'react';
import { useState } from 'react';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// `/*connecting to upsplash API */`

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    /*target[0] is the search bar */

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]); //asynchronous function
        // console.log(images);
      })
      .catch((error) => {
        console.log(error);
      });
    setWord(''); //asynchronous function
    /*set the default text in search bar after pressing search button*/
  };

  /*fetch is a function that retrieve the photos. That is a promise. */

  const deleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={word}
        setWord={setWord}
        handleSearch={handleSearchSubmit}
      />{' '}
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, index) => (
              <Col key={index} className="pb-4">
                <ImageCard image={image} deleteImage={deleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
      {/*passing the function as parameter */}
    </div> //passing the parameter to the Header function
  );
};

export default App;
