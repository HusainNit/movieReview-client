import { useState } from "react";
import { SearchMovie } from "../services/searchMovie";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const data = await SearchMovie({ searchTerm });
        setResults(data);
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" onClick={handleSearch}>
                    Search
                </button>
            </form>
            <div>
                <h2>Search Results:</h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: "16px"
                }}>
                    {Array.isArray(results) && results.map((movie) => (
                        <div key={movie.id} style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "8px",
                            background: "#fafafa",
                            textAlign: "center"
                        }}>
                            {movie.poster_path ? (
                                <img
                                    src={IMAGE_BASE_URL + movie.poster_path}
                                    alt={movie.title}
                                    style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
                                />
                            ) : (
                                <div style={{
                                    width: "100%",
                                    height: "270px",
                                    background: "#eee",
                                    borderRadius: "4px",
                                    marginBottom: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#888"
                                }}>
                                    No Image
                                </div>
                            )}
                            <div style={{ fontWeight: "bold", fontSize: "16px" }}>{movie.title}</div>
                            <div style={{ fontSize: "14px", color: "#555" }}>{movie.release_date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;




