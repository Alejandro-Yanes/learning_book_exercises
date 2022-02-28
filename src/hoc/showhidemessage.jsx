const  ShowHideMessage = ({children , collapsed , expandCollapse})  => {
    console.log(children[0].props.children)
    return(
        <div onClick={expandCollapse}>
            {(collapsed)  ?
                children[0].props.children.replace(/[a-zA-Z0-9]/g, "x"):
                children}
        </div>
)
}

export default ShowHideMessage