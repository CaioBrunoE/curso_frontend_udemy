import { useState } from "react"

import { useNavigate } from "react-router-dom";

function Search() {
    const [query, setQuery] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/search?q=" + query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default Search