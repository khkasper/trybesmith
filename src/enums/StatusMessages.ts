enum StatusMessages { 
  usernameRequired = 'Username is required',
  usernameString = 'Username must be a string',
  usernameLength = 'Username must be longer than 2 characters',

  classeRequired = 'Classe is required',
  classeString = 'Classe must be a string',
  classeLength = 'Classe must be longer than 2 characters',

  levelRequired = 'Level is required',
  levelNumber = 'Level must be a number',
  levelSize = 'Level must be greater than 0',

  passwordRequired = 'Password is required',
  passwordString = 'Password must be a string',
  passwordLength = 'Password must be longer than 7 characters',

  nameRequired = 'Name is required',
  nameString = 'Name must be a string',
  nameLength = 'Name must be longer than 2 characters',

  amountRequired = 'Amount is required',
  amountString = 'Amount must be a string',
  amountLength = 'Amount must be longer than 2 characters',

  productsRequired = 'Products is required',
  productsArray = 'Products must be an array of numbers',
  productsEmpty = 'Products can\'t be empty',

  invalidToken = 'Invalid token',
  tokenNotFound = 'Token not found',

  orderNotFound = 'Order not found',

  nameOrPasswordInvalid = 'Username or password invalid',
}

export default StatusMessages;