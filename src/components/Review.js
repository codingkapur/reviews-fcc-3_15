import {useState, useEffect} from 'react';
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs'
import reviews from './data'

function Review() {
    const [index, setIndex] = useState(0);
    const {name, job,image, text} = reviews[index]

    const checkNumber = (num) => {
        if(num > reviews.length-1){
            return 0;
        }
        if(num < 0){
            return reviews.length-1
        }
        return num
    }

    const onClickLeft = () => {
            
        setIndex((index)=> {
          let newIndex = index - 1;  
          return checkNumber(newIndex)
        })
    }

    const onClickRight = () => {
        
        setIndex((index)=> {
            let newIndex = index +1;  
            return checkNumber(newIndex)
          })
      }

      const surpriseMe = () => {
          setIndex(()=> {
              return Math.floor(Math.random()* (reviews.length-1)+1);
          })
      }
    return <article className="review-container">
        <img src={image} alt="Review Author" className="review-author-photo"/>
        <h3 className="review-author">{name}</h3>
        <h3 className="review-job">{job}</h3>
        <p className="review-text">{text}</p>
        <div className="nav-icons">
            <BsChevronDoubleLeft className="nav-btns" onClick={onClickLeft}/>
            <BsChevronDoubleRight className="nav-btns" onClick={onClickRight}/>
        </div>
        <button className="btn" onClick={surpriseMe}>Surprise Me</button>
    </article>
}

export default Review