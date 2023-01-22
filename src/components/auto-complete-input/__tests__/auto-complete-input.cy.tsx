import { mount } from "cypress/react";
import AutoCompleteInput from "../index";

describe("AutoCompleteInput should", () => {
  it("render properly", () => {
    const expectValues = {
      label: "My Tasks",
      search: "abc",
    };
    mount(
      <AutoCompleteInput
        label={expectValues.label}
        onChangeHandler={() => {}}
        search={expectValues.search}
        searchResults={[]}
      />
    );
    cy.get("[data-cy=autocomplete]").should("be.visible");
    cy.get("[data-cy=autocomplete-labelText]").should(
      "contains.text",
      expectValues.label
    );
    cy.get("[data-cy=autocomplete-input]").should(
      "contains.value",
      expectValues.search
    );
  });

  it("call onChangeHandler when input value changes", () => {
    const onChangeHandler = cy.stub();
    mount(
      <AutoCompleteInput
        label=""
        onChangeHandler={onChangeHandler}
        search=""
        searchResults={[]}
      />
    );
    cy.get("[data-cy=autocomplete-input]")
      .type("abc")
      .should(() => {
        expect(onChangeHandler).to.be.called;
      });
  });

  it("not show results if search is empty", () => {
    mount(
      <AutoCompleteInput
        label=""
        onChangeHandler={() => {}}
        search=""
        searchResults={[]}
      />
    );
    cy.get("[data-cy=autocomplete-results]").should("not.exist");
  });
});
