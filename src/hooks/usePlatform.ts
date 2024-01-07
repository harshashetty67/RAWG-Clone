import platforms from "../data/platforms";

interface Platform{
  id:number;
  name:string;
  slug:string;
}

const usePlatform = ()=>{
  return {data : platforms, error : null, isLoading : false};
}

export default usePlatform;