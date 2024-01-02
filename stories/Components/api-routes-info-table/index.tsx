type role = 'ADMIN' | 'HOST' | 'REGISTRED'

type ApiRoutesInfoTableProps = {
  name: string
  description: string
  source: string
  httpMethod: string
  roles: role[]
}

const ApiRoutesInfoTable: React.FC<ApiRoutesInfoTableProps> = ({
  name,
  description,
  source,
  httpMethod,
  roles,
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
          <th>HTTP Method</th>
          <td>{httpMethod}</td>
        </tr>
        <tr>
          <th>Role</th>
          <td>{Array.isArray(roles) ? roles.join(', ') : ''}</td>
        </tr>
        <tr>
          <th>Source</th>
          <td>{source}</td>
        </tr>
      </table>
    </>
  )
}

export default ApiRoutesInfoTable
