import CountdownDispatcher from "./fluxexercises/countdowndispatcher"
import CountdownStore from "./fluxexercises/countdownStore"
import countdownActions from "./fluxexercises/actions/countdownActions"
import Countdown from "./fluxexercises/countdown"
import  ReactDOM  from "react-dom"

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CountdownStore( appDispatcher , 10)



const render = count => ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById('root')
)

store.on("TICK", () => render(store.count))
store.on("RESET", () => render(store.count))
render(store.count)

const App = ()  =>
    <>

    </>
    

export default App
