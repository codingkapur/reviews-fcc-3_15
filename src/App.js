import {useEffect, useState} from 'react'
import {FaTimes} from 'react-icons';

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
    fetchReviews()
  }, [])

  return (
    <main className="container">
      <h1>Hello React: REVIEWS</h1>
    </main>
  );
}

export default App;
