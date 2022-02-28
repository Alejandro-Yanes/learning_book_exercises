import { Component } from 'react'
import PropTypes from 'prop-types';
import "./form.styles.css"

const AddColorForm = ({onNewColor}) => {
    
    let _title , _color

    const submit = e => {
        e.preventDefault();
        alert(`New Color: ${_title.value} ${_color.value}`)
        onNewColor(_title.value, _color.value)
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

        return(
            <form onSubmit={submit} className="formulario">
                <input ref={input => _title = input} type="text" placeholder="color title" required />
                <input ref={input => _color = input} type="color" required />
                <button>Add</button>
            </form>
        )
    
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor : f=>f
}

export default AddColorForm 