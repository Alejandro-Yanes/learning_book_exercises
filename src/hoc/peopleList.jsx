
const PeopleList = ({data  , count})  =>  {
    return(
                <ol className='people-list'>
                    {data.results.filter((item, idx) => idx < count).map((person , i) => {
                     const {first , last} = person.name
                     return <li key={i}>{first} {last}</li> 
                    })}
                </ol>     
                )
}

export default PeopleList
