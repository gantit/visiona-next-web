const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error(false)
  }
  return response
}

export default handleErrors
