const handleErrors = function(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }

export { handleErrors };