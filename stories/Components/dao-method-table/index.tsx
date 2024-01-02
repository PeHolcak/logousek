type DaoMethodTableProps = {
  tableRows: {
    name: string
    type: string
    description: string
  }[]
}

const DaoMethodTable: React.FC<DaoMethodTableProps> = ({ tableRows }) => {
  return (
    <>
      <h2>DAO Method List</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>type</th>
        </tr>
        {Array.isArray(tableRows) && tableRows.length
          ? tableRows.map((tableRow) => (
              <tr key={`table_row${tableRow.name}`}>
                <td>{tableRow.name}</td>
                <td>{tableRow.type}</td>
                <td>{tableRow.description}</td>
              </tr>
            ))
          : 'No references'}
      </table>
    </>
  )
}

export default DaoMethodTable
