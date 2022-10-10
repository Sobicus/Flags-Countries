import {Search} from "./Search";
import {useState} from "react";

export const Controls = () => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <Search search={search} serSearch={setSearch}/>
        </div>
    )
}