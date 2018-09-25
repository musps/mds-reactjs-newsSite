import React, { Component } from 'react'
import './App.scss'
import SearchBar from './Components/SearchBar'
import DataList from './Components/DataList'
import { queryByName } from './dataQuery'

class App extends Component {
  state = {
    value: '',
    isLoading: false,
    data: [],
    request: null
  }

  constructor(props) {
    super(props)
    this.onValueChange = this.onValueChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  onValueChange(nextValue) {
    this.setState(prevState => ({
      value: nextValue,
      isLoading: true
    }))

    if (this.state.request !== null) {
      this.state.request.cancelRequest()
    }

    if (nextValue.length < 2) {
      this.setState(prevState => ({
        value: nextValue,
        isLoading: false,
        data: []
      }))
    } else {
      this.fetchData(nextValue)
    }
  }

  async fetchData(criteria) {
    if (this.state.request !== null) {
      this.state.request.cancelRequest()
    }

    const request = queryByName(criteria)

    this.setState({
      request: request
    })

    const data = await request.exec().catch(() => [])
    console.log('data', data)
    this.setState(prevState => ({
      isLoading: false,
      data: data,
      request: null
    }))
  }

  render() {
    return (
      <div className='main'>
        <SearchBar
          value={this.state.value}
          onValueChange={this.onValueChange}
          isLoading={this.state.isLoading}
        />
        <DataList items={this.state.data} />
      </div>
    )
  }
}

export default App
