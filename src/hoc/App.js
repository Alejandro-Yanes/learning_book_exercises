import PeopleList from "./hoc/peopleList"
import DataComponent from "./hoc/datacomponent"
import CountryList from "./hoc/countryList"
import Expandable from "./hoc/expandable"
import ShowHideMessage from "./hoc/showhidemessage"
import MenuButton from "./hoc/menubutton"


 const App = ()  => {
    // const RandomMeUsers = DataComponent(PeopleList  , "https://randomuser.me/api/?results=20" )

    //  const  CountryDropDown  =  DataComponent(CountryList , "https://restcountries.com/v3.1/all")

    const  PopUpButton = Expandable(MenuButton)

    const  ShowMessage = Expandable(ShowHideMessage)
 
     return (
         <div>
            {/* <RandomMeUsers count={7}/> 
            <CountryDropDown selected="United States of America"/> */}

             <PopUpButton hidden={true} txt="toggle popup">
                <h1>Hidden Content</h1>
                <p>This content will start hidden</p>
            </PopUpButton>

            {/* <ShowMessage >
                <h1>Hidden Content</h1>
                <p>This content will start hidden</p>
            </ShowMessage> */}

        </div>
     )
 }
    

export default App