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