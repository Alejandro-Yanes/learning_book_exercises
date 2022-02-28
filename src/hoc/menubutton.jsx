import { Component } from 'react'

class MenuButton extends Component {

    // static getDerivedStateFromProps(nextProps){
    //     const collapsed = 
    //         (nextProps.collapsed && nextProps.collapsed  === true) ?
    //         true  :
    //         false
    //     return  { collapsed }
    // }

    render(){
        const {children , collapsed , txt , expandCollapse } = this.props
        return (
            <div className="pop-button">
                <button onClick={expandCollapse}>{txt}</button>
                {(!collapsed) ? 
                    <div className="pop up">
                        {children}
                    </div> :
                    ""   
            }
            </div>
        )
    }
}

export default MenuButton