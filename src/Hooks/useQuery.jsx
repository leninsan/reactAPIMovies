import { useLocation } from "react-router";


export function useQuery(){//hook de la API para obtener paramentros de el url en el que se esta
    return new URLSearchParams(useLocation().search);
  } 