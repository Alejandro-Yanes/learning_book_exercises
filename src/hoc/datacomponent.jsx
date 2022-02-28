import { Component } from 'react'
import fetch from 'isomorphic-fetch'

const DataComponent = (ComposedComponent , url) =>
    class DataComponent extends Component {
        constructor(props){
            super(props)
            this.state = {
                loading : false ,
                loaded : false ,
                data : []
            }
        }


        componentWillMount(){
            this.setState({loading:true})
            fetch(url)
                .then(response => response.json())
                .then(data =>  this.setState({
                    loading:false,
                    loaded:true,
                    data
                }))
        }

        render(){
            return(
                (this.state.loading)?
                <div>Data is being loaded , wait a sec  ...</div>
                : <ComposedComponent {...this.state}  {...this.props}  />
            )
        }
    }

export default DataComponent