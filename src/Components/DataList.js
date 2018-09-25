import React from 'react'
import { List } from 'semantic-ui-react'

const DataList = ({ items }) => (
  <List divided relaxed>
  {items.map((item, key) =>
    <List.Item key={key}>
      <List.Icon 
        name={item.sexe === 'F' ? 'woman' : 'man'}
        size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>
          {item.prenoms} <b>{item.sexe}</b>
        </List.Header>
        <List.Description as='a'>
          {item.annee} - {item.nombre}
        </List.Description>
      </List.Content>
    </List.Item>
  )}
  {items.length === 0 &&
    <List.Item>
      <List.Description as='a'>
        No data found.
      </List.Description>
    </List.Item>
  }
  </List>
)

export default DataList
