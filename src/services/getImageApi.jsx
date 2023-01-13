import imageNotFound from "../Assets/imageNotFound.jpg"

export function getImageApi(path,width){
return path? `https://image.tmdb.org/t/p/w${width}${path}`: imageNotFound;
}