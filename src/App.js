import {useEffect, useState} from 'react'
import Review from './components/Review'

function App() {
  // //Define State
  // const [reviews, setReviews] = useState([])
  // //Fetch Data
  // const getReviews = async () => {
  //   const res = await fetch('http://localhost:5000/reviews');
  //   const data = await res.json();
  //   return data
  // }

  // const fetchReviews = async () => {
  //   const reviewData = await getReviews();
  //   setReviews(reviewData);
  // }
  // //Invoke Data Fetch
  // useEffect(()=> {
  //   fetchReviews();
  // }, [])

  // const [index, setIndex] = useState(0);
  // console.log(reviews[0])
  // const {name, job, image, text} = reviews[0]
  // console.log(name,job,image,text)

  return (
    <main className="container">
      <h1 className="heading">Our Reviews:</h1>
      <Review />
    </main>
  );
}

export default App;
