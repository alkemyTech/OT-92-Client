import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ onSearchActivity }) => {
  const [activities, setActivities] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://ongapi.alkemy.org/public/api/activities"
      );
      setActivities(result.data.data);
    };
    fetchData();
  }, []);

  const handleChange = async (text) => {
    let matches = [];
    if (text.length >= 3) {
      matches = activities.filter((activity) => {
        const regex = new RegExp(`^${text}`, "gi");
        return activity.name.match(regex);
      });
    } else {
    }
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  onSearchActivity(suggestions.length > 0 ? suggestions : activities);

  return (
    <div className="d-block bg-danger">
      <input
        type="text"
        className="form-control"
        placeholder="Enter an activity..."
        onChange={(event) => handleChange(event.target.value)}
        value={text}
      />
      {suggestions.length > 0 ? (
        <ul className="list-group cursor-pointer">
          {suggestions.map((suggestion) => (
            <li className="list-group-item cursor-pointer" key={suggestion.id}>
              <div
                className="btn"
                onClick={() => onSuggestHandler(suggestion.name)}
              >
                {suggestion.name}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
