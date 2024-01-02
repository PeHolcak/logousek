type ComponentInfoTableProps = {
  name: string
  description: string
  source: string
}

const ComponentInfoTable: React.FC<ComponentInfoTableProps> = ({
  name,
  description,
  source,
}) => {
  return (
    <>
      <h2>Basic Info</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{description}</td>
        </tr>
        <tr>
          <th>Source</th>
          <td>{source}</td>
        </tr>
      </table>
    </>
  )
}

export default ComponentInfoTable
