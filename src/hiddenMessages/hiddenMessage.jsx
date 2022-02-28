import { Component } from 'react'


class HiddenMessage extends Component {
    constructor(props) {
            super(props)
            this.state = {
            hidden: (props.hide) ?  props.hide : false
        }   
    }
 
    static getDerivedStateFromProps(nextProps  , state) {
        return { hidden: nextProps.hide}
    }
    

    render() {
        const { message ,  key } = this.props
        const { hidden } = this.state

        return (
                <p>
                    {(hidden) ?
                        message.replace(/[a-zA-Z0-9]/g, "x") :
                        message
                    }
                </p>
                 )
            }
}

export default HiddenMessage
