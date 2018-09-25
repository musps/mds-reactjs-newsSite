import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = ({ value, onValueChange, isLoading }) => (
  <Input
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    loading={isLoading}
    icon={{ 
      name: 'search',
      circular: true,
      link: true
    }}
    placeholder='type something...'
  />
)

export default SearchBar
