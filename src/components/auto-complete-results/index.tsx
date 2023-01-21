import { FC } from "react";

type TAutoCompleteResults = {
  searchResultsItems: string[];
};

const AutoCompleteResults: FC<TAutoCompleteResults> = (props) => {
  return (
    <ul className="autocomplete__results">
      {props.searchResultsItems.map((searchResult, index) => (
        // This approach only works secure and well with DOMPurify library that prevents XSS attacks
        // As I can't download any external library, I'll leave the correct code commented so before
        // deploy this application to production, just import DOMPurify in this file and replace the li
        // element render by the commented one.
        //
        // <li dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(searchResult) }}></li>
        //
        <li key={index} dangerouslySetInnerHTML={{ __html: searchResult }}></li>
      ))}
    </ul>
  );
};

export default AutoCompleteResults;
