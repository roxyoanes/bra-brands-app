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

export const braModelsApi = async (brand) => {
  try{
    const responseModel = await fetch (
      `https://api.bratabase.com/brands/${brand}/models/`
    );
    const dataModel = await responseModel.json();
    return dataModel;
  } catch(error){
    throw error
  }
}

export const modelDetailsApi = async (brand, model) => {
  try{
    const responseDetails = await fetch (
      `https://api.bratabase.com/brands/${brand}/models/${model}/`
    );
    const dataDetail = await responseDetails.json();
    return dataDetail;
  } catch(error){
    throw error
  }
}