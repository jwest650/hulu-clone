import React from "react";
import Thumbnail from "./Thumbnail";

function Result({ results }) {
    return (
        <div className="px-5 grid sm:grid-cols-2 md:grid-cols-4 my-10">
            {results.map((result) => (
                <Thumbnail data={result} />
            ))}
        </div>
    );
}

export default Result;
