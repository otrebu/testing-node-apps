// Testing Pure Functions

// 🐨 import the function that we're testing
import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters

test('password is valid', () => {
  const password = '!aBc123'

  const result = isPasswordAllowed(password)

  expect(result).toBe(true)
})

test('password is too short', () => {
  const password = 'a2c!'

  const result = isPasswordAllowed(password)

  expect(result).toBe(false)
})

test('password missing alphabet characters', () => {
  const password = '123456!!'

  const result = isPasswordAllowed(password)

  expect(result).toBe(false)
})

test('password missing numbers', () => {
  const password = 'ABCdef!'

  const result = isPasswordAllowed(password)

  expect(result).toBe(false)
})

test('password missing uppercase letters', () => {
  const password = 'abc123!!'

  const result = isPasswordAllowed(password)

  expect(result).toBe(false)
})

test('password missing lowercase letters', () => {
  const password = 'ABC123!!'

  const result = isPasswordAllowed(password)

  expect(result).toBe(false)
})

test('password missing non-alphanumeric characters', () => {
  const password = 'ABCdef123'

  const result = isPasswordAllowed(password)

  expect(result).toBe(false)
})
