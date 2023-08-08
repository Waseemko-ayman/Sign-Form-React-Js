export const USERS_COLUMNS = (handleDelete) => [
  {
    key: 'id',
    title: 'Id'
  },
  {
    key: 'name',
    title: 'Name'
  },
  {
    key: 'email',
    title: 'Email'
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (data) =>
    <div onClick={(e) => e.stopPropagation()}>
      <button onClick={() => handleDelete(data.id)}>Delete</button>
    </div>
  }
]