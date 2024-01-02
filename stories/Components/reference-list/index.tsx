type ReferenceListProps = {
  tableRows: [
    {
      name: string
      description: string
    }
  ]
}

const ReferenceList: React.FC<ReferenceListProps> = ({ tableRows }) => {
  return (
    <>
      <h2>Reference List</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {Array.isArray(tableRows) && tableRows.length
          ? tableRows.map((tableRow) => (
              <tr key={`table_row${tableRow.name}`}>
                <td>{tableRow.name}</td>
                <td>{tableRow.description}</td>
              </tr>
            ))
          : 'No references'}
      </table>
    </>
  )
}

export default ReferenceList
