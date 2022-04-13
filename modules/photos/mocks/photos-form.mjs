export default {
  newPhoto: {
    fields: [
      {
        name: 'User',
        options: [],
        inputProps: {
          name: 'userId',
          type: 'select',
          required: true
        }
      },
      {
        name: 'Title',
        inputProps: {
          name: 'title',
          type: 'text',
          required: true
        }
      },
      {
        name: 'Url',
        inputProps: {
          name: 'url',
          type: 'text',
          required: true
        }
      },
      {
        name: 'Thumbnail Url',
        inputProps: {
          name: 'thumbnailUrl',
          type: 'text',
          required: true
        }
      }
    ]
  }
}