import store from "./reduxexercises/store"
import { addColor , removeColor , rateColor} from "./reduxexercises/reducers"

import { compose } from 'redux'


const App =  () => {

    console.log(
        "Length of colors array before ADD_COLOR",
        store.getState().colors.length 
    )

    store.subscribe(()  =>
        localStorage['redux-store'] = JSON.stringify(store.getState())
    )



    store.dispatch( addColor( "Sex Pink" , "#F142FF"))
    store.dispatch( addColor( "Sex Pink" , "#F142FF"))
    store.dispatch( addColor( "Sex Pink" , "#F142FF"))
    store.dispatch( addColor( "Sex Pink" , "#F142FF"))
    store.dispatch( addColor( "Sex Pink" , "#F142FF"))

    // store.dispatch(removeColor("3315e1p5-3abl-0p523-30e4-8001l8yf3036"))
    // store.dispatch(rateColor("3315e1p5-3abl-0p523-30e4-8001l8yf4457", 5))
   
        const print = compose(
            list => console.log(list),
            titles => titles.join(", "),
            map => map(c=>c.title),
            colors => colors.map.bind(colors),
            state => state.colors
            )
            print(store.getState())

   
        window.store = store

    console.log(
        "Length of colors array after ADD_COLOR",
        store.getState().colors
        )

    



    return (
        <>
        </>
    )
}

export default App
