import { FC } from "react";
import AutoCompleteResults from "../auto-complete-results";

type TAutoCompleteInput = {
  label: string;
  search: string;
  searchResults: string[];
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AutoCompleteInput: FC<TAutoCompleteInput> = (props) => {
  return (
    <label className="autocomplete">
      {props.label}
      <input
        type="text"
        placeholder={props.label}
        defaultValue={props.search}
        onChange={props.onChangeHandler}
        className="autocomplete__input"
      />
      <AutoCompleteResults searchResultsItems={props.searchResults} />
    </label>
  );
};

export default AutoCompleteInput;
