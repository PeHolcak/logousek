type PropertiesTableProps = {
  tableRows: [
    {
      name: string
      type: string
      defaultValue: string
      description: string
      required?: boolean
    }
  ]
}

const PropertiesTable: React.FC<PropertiesTableProps> = ({ tableRows }) => {
  return (
    <>
      <h2>Properities</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <th>type</th>
          <th>Default value</th>
          <th>Description</th>
          <th>Required</th>
        </tr>
        {Array.isArray(tableRows) && tableRows.length
          ? tableRows.map((tableRow) => (
              <tr key={`table_row${tableRow.name}`}>
                <td>{tableRow.name}</td>
                <td>{tableRow.type}</td>
                <td>{tableRow.defaultValue}</td>
                <td>{tableRow.description}</td>
                <td>{!!tableRow.required ? 'Yes' : 'No'}</td>
              </tr>
            ))
          : 'No properties'}
      </table>
    </>
  )
}

export default PropertiesTable
