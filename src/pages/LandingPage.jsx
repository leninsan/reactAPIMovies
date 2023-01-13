import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import { useQuery } from "../Hooks/useQuery";
import { useDebounce } from "../Hooks/useDebounce";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search,300);
    return(
        <>
        <Search/>
        <MoviesGrid key={debouncedSearch} search = {debouncedSearch}/>
        </>
    );
}