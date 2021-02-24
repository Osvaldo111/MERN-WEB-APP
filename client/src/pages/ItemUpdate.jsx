import React, { Component } from 'react'
import api from '../api'
import { connect } from 'react-redux'
import { updateItem, getItemById } from '../actions/itemActions'
import propTypes from 'prop-types'
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

class ItemUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            animal: '',
            image: '',
            sex: '',
            age: ''
        }
    }

    handleChangeInputName = async (event, type) => {
        const name = event.target.value
        this.setState({ [type]: name })
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

    handleUpdateMovie = async () => {
        const {id, name, age, animal, image, sex } = this.state
        const payload = { name, age, animal, image, sex}
        const { updateItem } = this.props;
        await updateItem(id, payload);
    }

    componentDidMount = async () => {
        const { id } = this.state
        const { getItemById } = this.props;
        getItemById(id);
        
    }

    componentDidUpdate(prevProps) {
        const { item: {loading }} = prevProps;

        if(loading !== this.props.item.loading) {
            const { item: {item_update} } = this.props;
            const { item: { item }} = this.props;
            const { data = undefined} = item || {};
            if(data && !item_update && !this.props.item.loading) {                
                const { 
                    name,
                    animal,
                    image,
                    sex,
                    age
                } = data;
                this.setState({
                    name,
                    animal,
                    image,
                    sex,
                    age
                })
            }
            
            if(item_update){
                const { success } = item_update;
                if(success) {
                    window.alert(`Movie updated successfully`)
                    this.setState({
                        name: '',
                        animal: '',
                        image: '',
                        sex: '',
                        age: ''
                    })
                }
            }
        }
    }

    render() {
        const { name, animal, image, sex, age } = this.state;
        return (
            <Wrapper>
                <Title>Update Animal</Title>

                <Label>Name: </Label>
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

                <Button onClick={this.handleUpdateMovie}>Update Animal</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

ItemUpdate.propTypes = {
    updateItem: propTypes.func.isRequired,
    getItemById: propTypes.func.isRequired,
    item: propTypes.object
}

const mapStateToProps = (state) => ({
    item:state.item
})
export default connect(mapStateToProps, {getItemById, updateItem})(ItemUpdate)