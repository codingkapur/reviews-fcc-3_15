import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs'

function Review({ data }) {
    return <article className="review-container">
        <img src={data.image} alt="Review Author" className="review-author-photo"/>
        <h3 className="review-author">{data.name}</h3>
        <h3 className="review-job">{data.job}</h3>
        <p className="review-text">{data.text}</p>
        <div className="nav-icons">
            <BsChevronDoubleLeft className="nav-btns"/>
            <BsChevronDoubleRight className="nav-btns"/>
        </div>
        <button className="btn">Surprise Me</button>
    </article>
}

export default Review