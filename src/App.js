import {useEffect, useState} from 'react'
import Review from './components/Review'

function App() {
  //Define State
  const [reviews, setReviews] = useState([])
  //Fetch Data
  const getReviews = async () => {
    const res = await fetch('http://localhost:5000/reviews');
    const data = await res.json();
    return data
  }

  const fetchReviews = async () => {
    const reviewData = await getReviews();
    setReviews(reviewData);
  }
  //Invoke Data Fetch
  useEffect(()=> {
    fetchReviews();
  }, [])

  return (
    <main className="container">
      <h1 className="heading">Our Reviews:</h1>
      {reviews.map((review) => {
        return <Review key = {review.id} data={review}/>
      })}
    </main>
  );
}

export default App;
