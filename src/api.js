export const braApi = async () => {
  try{
    const response = await fetch (
      `https://api.bratabase.com/brands/`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error
  }
}

export const braNameApi = async (brand) => {
  try{
    const responseTwo = await fetch (
      `https://api.bratabase.com/brands/${brand}/`
    );
    const dataDetails = await responseTwo.json();
    return dataDetails;
  } catch(error){
    throw error
  }
}