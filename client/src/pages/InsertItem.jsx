import React, { Component } from 'react'
import { addItem } from '../actions/itemActions'
import propTypes from 'prop-types'
import api from '../api'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class InsertItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            animal: '',
            age: '',
            time: '',
            image: '',
            sex: ''
        }
    }

    handleChangeInputName = async (event, type) => {
        const name = event.target.value
        this.setState({ [type] : name })
    }

    handleChangeInputRating = async event => {
        const age = event.target.validity.valid
            ? event.target.value
            : this.state.age

        this.setState({ age })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleIncludeMovie = async () => {
        const { name, age, animal, image, sex } = this.state
        const payload = { name, age, animal, image, sex}
        const { addItem } = this.props;
        await addItem(payload)
        this.setState({
            name: '',
            age: '',
            image: '',
            animal: '',
            sex: '',
        })
    }

    render() {
        const { name, age, animal, image, sex } = this.state;
        const disableButton = !name || !animal || !sex;

        return (
            <Wrapper>
                <Title>Create animal</Title>

                <Label>Animal Ex: Dog, Cat, ext *: </Label>
                <InputText
                    type="text"
                    value={animal}
                    onChange={e => this.handleChangeInputName(e, 'animal')}
                />

                <Label>Name *: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={e => this.handleChangeInputName(e, 'name')}
                />

                <Label>Image URL: </Label>
                <InputText
                    type="text"
                    value={image}
                    onChange={e => this.handleChangeInputName(e, 'image')}
                />

                <Label>Sex *: </Label>
                <InputText
                    type="text"
                    value={sex}
                    onChange={e => this.handleChangeInputName(e, 'sex')}
                />

                <Label>Age (if known): </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="20"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={age}
                    onChange={this.handleChangeInputRating}
                />

                <Button onClick={this.handleIncludeMovie} disabled={disableButton}>Create</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

InsertItem.propTypes = {
    addItem: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {addItem})(InsertItem)