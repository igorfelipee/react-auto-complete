import { FC } from "react";
import "./style.css";

type TAutoCompleteResults = {
  searchResults: string[];
};

const AutoCompleteResults: FC<TAutoCompleteResults> = (props) => {
  if (props.searchResults.length === 0) {
    return (
      <ul className="autocomplete__results">
        <li className="autocomplete__result-item">No results found</li>
      </ul>
    );
  }

  return (
    <ul className="autocomplete__results">
      {props.searchResults.map((searchResult, index) => (
        // This approach only works secure and well with DOMPurify library that prevents XSS attacks
        // As I can't download any external library, I'll leave the correct code commented so before
        // deploy this application to production, just import DOMPurify in this file and replace the li
        // element render by the commented one.
        //
        // <li dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(searchResult) }}></li>
        //
        <li
          className="autocomplete__result-item"
          key={index}
          tabIndex={0}
          dangerouslySetInnerHTML={{ __html: searchResult }}
        ></li>
      ))}
    </ul>
  );
};

export default AutoCompleteResults;
