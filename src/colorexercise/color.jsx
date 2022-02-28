import StarRating from "./starRating"
import { Component } from "react"
import PropTypes from 'prop-types';


class Color extends Component { 

    shouldComponentUpdate(nextProps) {
        const { rating  }  = this.props
        return  rating !==  nextProps.rating
    }

    componentDidUpdate(prevProps)  {
        const { title ,  rating} = this.props
        const  status  = (rating  >   prevProps.rating) ? "better" : "worse"
        console.log(`${title}  is getting ${status}`)
    }


    render(){
        const { title , color , rating , onRemove , onRate } = this.props

        return(
            <section className="color">
                <h1>{title}</h1>
                <div className="box">
                    <button className="remove" onClick={onRemove}>X</button>
                    <div className="colorx" style={{backgroundColor: color}}></div>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}  />
                </div>
            </section>
    )}
}

export default Color

Color.propTypes =  {
    title : PropTypes.string ,
    color : PropTypes.string ,
    rating : PropTypes.number ,
    onRemove : PropTypes.func ,
    onRate : PropTypes.func
}

Color.defaultProps = {
    rating : 0 ,
    onRemove : f => f ,
    onRate : f => f
}