import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
// import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
//   const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

//   useEffect(() => {
//     setSearchText(search || "");
//   }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Title"
          aria-label="Search Movies"
          className={styles.searchInput}
        //   value={searchText}
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            // setSearchText(value);
            // navigate("/?search=" + value);
            setQuery({search: value})
          }}
        />
          <FaSearch size={20} color="black" className={styles.searchButton}/>
      </div>
    </form>
  );
}
