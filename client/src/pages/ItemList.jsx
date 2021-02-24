import React, { Component } from 'react'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import propTypes from 'prop-types'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateItem extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteItem extends Component {
    deleteUser = event => {
        const { deleteItem } = this.props;
        event.preventDefault()
        if (
            window.confirm(
                `Do tou want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            deleteItem(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        const { getItems } = this.props;
        getItems();
    }

    render() {
        const { item: { items, loading: isLoading }, deleteItem } = this.props;
        const { data = [] } = items;
        console.log('TCL: ItemList -> items ->', this.props)

        const columns = [
            {
                Header: 'Animal',
                accessor: 'animal',
                // filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                // filterable: true,
            },
            {
                Header: 'Image URL',
                accessor: 'image',
                // filterable: true,
            },
            {
                Header: 'sex',
                accessor: 'sex',
                // filterable: true,
            },
            {
                Header: 'age',
                accessor: 'age',
                // filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteItem id={props.original._id} deleteItem={deleteItem} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateItem id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!data.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={data}
                        columns={columns}
                        loading={isLoading}
                        // defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

ItemList.propTypes = {
    getItems: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
    item: propTypes.object
}

const mapStateToProps = (state) => ({
    item:state.item
})
export default connect(mapStateToProps, {getItems, deleteItem})(ItemList)