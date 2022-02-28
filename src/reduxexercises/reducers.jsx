import constants from "./constants";
import { v4 } from 'uuid'


export const addColor =  ( title , color )  =>  (
    {
        type: constants.ADD_COLOR ,
        id :  v4(),
        title,
        color,
        timestamp  : new  Date().toString()
    }
)

export const removeColor = (id) =>  (
    {
        type:  constants.REMOVE_COLOR  ,
        id
})

export const rateColor =  (id , rating) =>  ({
    type: constants.RATE_COLOR,
    id,
    rating
})

export const sortColors = sortedBy  =>  
    (sortedBy === rating)  ?
        ({
            type: constants.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        })  :  (sortedBy === title)  ?
            ({
                type: constants.SORT_COLORS,
                sortBy: "SORTED_BY_TITLE"
            })  :
                    ({
                        type: constants.SORT_COLORS,
                        sortBy: "SORTED_BY_DATE"
                    })



export const color =  (state={} , action) =>  {
    switch(action.type){
        case constants.ADD_COLOR :
            return {
                id: action.id,
                title: action.title ,
                color: action.color ,
                timestamp: action.timestamp ,
                rating:0
            }
        case constants.RATE_COLOR : 
            return  (state.id !== action.id)?
                state  :
                {
                    ...state ,
                    rating: action.rating
                }
        default :
                return state
    }  
}

export const colors =  (state=[] , action) => {
    switch(action.type) {

        case constants.ADD_COLOR  :
            return  (state.filter( c => c.id === action.id).length )  ?
                state  : 
                [
                ...state,
                color({} , action)
            ]

        case constants.RATE_COLOR  :
            return state.map(
                c => color(c , action)
                )

        case constants.REMOVE_COLOR  :
            return  state.filter(
                c => c.id  !==  action.id
            )
        
        default :
                return state
    }
}

export const sort = (state="SORTED_BY_DATE" , action) => {
    switch (action.type){
        case constants.SORT_COLORS :
            return action.sortBy
        default  :
            return  state
    }
}