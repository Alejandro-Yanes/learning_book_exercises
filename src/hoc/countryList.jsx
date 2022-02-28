
const CountryList = ({data , selected=""})  =>  {
    console.log(selected)
    return(
                <select className='country-list' defaultValue={selected}>  
                    {data.map((country , i) => {
                     const {official} = country.name
                     return <option key={i} value={official}>{official}</option>
                    })}
                </select>     
                )
}

export default CountryList
