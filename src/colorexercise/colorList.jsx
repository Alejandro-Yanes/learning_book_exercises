import Color from './color.jsx'
import './style.css';

const ColorList = ( { colors=[] , onRate=f=>f , onRemove=f=>f} ) => (
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (add a Color)</p> :
            colors.map( color =>
                <Color Key={color.id} 
                           {...color}
                           onRate={(rating) => onRate(color.id, rating)}
                           onRemove={() => onRemove(color.id)}  
                />
                )
        }
    </div>
)

export default ColorList