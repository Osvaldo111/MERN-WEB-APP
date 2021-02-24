import React, { Component } from 'react'
import api from '../api'

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

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const password = event.target.validity.valid
            ? event.target.value
            : this.state.password

        this.setState({ password })
    }

    handleSubmit = () => {
        
    }

    render() {
        const { name, password } = this.state
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <Title>Log in</Title>

                    <Label>Name: </Label>
                    <InputText
                        type="email"
                        value={name}
                        onChange={this.handleChangeInputName}
                    />

                    <Label>Password: </Label>
                    <InputText
                        type="password"
                        value={password}
                        onChange={this.handleChangeInputRating}
                    />
                    <Button type="submit" value="Submit">Log in</Button>
                 </form>
            </Wrapper>
        )
    }
}

export default SignIn