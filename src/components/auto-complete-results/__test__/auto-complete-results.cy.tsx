import { mount } from "cypress/react";
import AutoCompleteResults from "../index";

describe("AutoCompleteResults should", () => {
  it("render properly", () => {
    mount(<AutoCompleteResults searchResults={[]} />);
    cy.get("[data-cy=autocomplete-results]").should("be.visible");
  });

  it("show not found message if searchResults array is empty", () => {
    mount(<AutoCompleteResults searchResults={[]} />);
    cy.get("[data-cy=autocomplete-result-item]")
      .contains("No results found")
      .should("be.visible");
  });

  it("should highlight searchTerm properly", () => {
    const searchTerm = "script";
    const mockedSearchResults = [`ecma <strong>${searchTerm}</strong>`];

    mount(<AutoCompleteResults searchResults={mockedSearchResults} />);
    cy.get("[data-cy=autocomplete-result-item]")
      .find("strong")
      .should("contain.text", searchTerm);
  });
});
