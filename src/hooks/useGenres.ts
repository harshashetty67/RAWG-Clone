import genres from "../data/genres"; // importing genre list

export interface Genre{
id:number;
name:string;
image_background:string;
}

const useGenres = () => {

  // Instead of making API call to get genres list, we are shipping it as static content by having it locally.
  return ({data : genres, isLoading : false, error : null});
}

export default useGenres;