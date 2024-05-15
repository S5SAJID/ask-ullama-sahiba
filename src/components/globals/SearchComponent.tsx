import React from "react";

export default function SearchComponent({classes = ""}: {classes?: string}) {
    return (
        <input type="search" className={`border outline focus:outline-accent-600  rounded w-96 outline-none py-1 px-2 text-sm ${classes}`} placeholder="Search..."/>
    );
}