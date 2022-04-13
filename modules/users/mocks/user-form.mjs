export default {
  newUser: {
    fields: [
      {
        name: "Name",
        inputProps: {
          name: "name",
          type: "text",
          required: true
        }
      },
      {
        name: "Username",
        inputProps: {
          name: "username",
          type: "text",
          required: true
        }
      },
      {
        name: "Email",
        inputProps: {
          name: "email",
          type: "email",
          required: true
        }
      },
      {
        name: "Avatar Url",
        inputProps: {
          name: 'avatar',
        }
      }
    ]
  }
}