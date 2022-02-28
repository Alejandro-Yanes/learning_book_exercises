import PropTypes from 'prop-types'
import Star from './star'
import '../App.css';

const StarRating =  ({ totalStars = 5 , starsSelected = 0 , onRate=f=>f }) => {
    
        return (
            <div className="star-rating">
                <div className="margem">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}  
                        selected={i<starsSelected}
                        onClick={() => onRate(i+1)}
                    />
                )}
                </div>
                <p>{starsSelected} of {totalStars}  stars</p>
            </div>
        )
    
}

StarRating.propType = {
    totalStars : PropTypes.number,
    starsSelected : PropTypes.number ,
    onRate : PropTypes.func
}


export default StarRating