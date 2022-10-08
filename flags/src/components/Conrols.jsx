import {Search} from "./Search";
import {useState} from "react";

export const Conrols = () => {
    const[search,setSearch] = useState('')

    return (
        <div>
            <Search search={search} serSearch={setSearch()}/>
        </div>
    )
}