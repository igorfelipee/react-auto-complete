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
    <label data-cy="autocomplete" className="autocomplete">
      <strong
        data-cy="autocomplete-labelText"
        className="autocomplete__labelText"
      >
        {props.label}
      </strong>
      <input
        type="text"
        defaultValue={props.search}
        onChange={props.onChangeHandler}
        className="autocomplete__input"
        data-cy="autocomplete-input"
      />
      {props.search && (
        <AutoCompleteResults searchResults={props.searchResults} />
      )}
    </label>
  );
};

export default AutoCompleteInput;
