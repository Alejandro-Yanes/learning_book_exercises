import React from 'react'
import { Component } from 'react'
import getFakeMembers from './getFakeMembers'
import Member from './member'

class MemberList extends Component {
    constructor(props){
        super(props)
        this.state = {
            members: [],
            loading: false,
            error:null
        }
    }

    componentDidMount(){
        const {count} = this.props
        console.log(count)

        this.setState({loading:true})

        getFakeMembers(count).then(
            members => {
                this.setState({members, loading:false})
                

            },
            error => {
                this.setState({error , loading:false})
            }
        )

         
    }

    componentWillUpdate(){
        console.log('updating lifecycle')
    }

    render() {
        const { members , loading , error} = this.state
        return (
            <div className="member-list">
                {(loading) ?
                    <span>Loading Members</span>:
                    (members.length) ?
                    members.map((user , i) =>
                        <Member key={i} {...user} />
                    ) :
                    <span>0 members loaded ... </span>            
            }
            {(error) ? <p>Error Loading Members: error</p> : ""}
            </div>
        )
    }
}

export default MemberList