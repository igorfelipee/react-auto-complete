import { FC } from "react";
import AutoCompleteResults from "../auto-complete-results";
import "./style.css";

type TAutoCompleteInput = {
  label: string;
  search: string;
  searchResults: string[];
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AutoCompleteInput: FC<TAutoCompleteInput> = (props) => {
  return (
    <label className="autocomplete">
      <strong className="autocomplete__labelText">{props.label}</strong>
      <input
        type="text"
        defaultValue={props.search}
        onChange={props.onChangeHandler}
        className="autocomplete__input"
      />
      {props.search && (
        <AutoCompleteResults searchResults={props.searchResults} />
      )}
    </label>
  );
};

export default AutoCompleteInput;
