type ComponentRenderTableProps = {
  tableRows: [
    {
      name: string
      rules: string
    }
  ]
}

const ComponentRenderTable: React.FC<ComponentRenderTableProps> = ({
  tableRows,
}) => {
  return (
    <>
      <h2>Component Render</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <th>Rules</th>
        </tr>
        {Array.isArray(tableRows) && tableRows.length
          ? tableRows.map((tableRow) => (
              <tr key={`table_row${tableRow.name}`}>
                <td>{tableRow.name}</td>
                <td>{tableRow.rules}</td>
              </tr>
            ))
          : 'No rules'}
      </table>
    </>
  )
}

export default ComponentRenderTable
