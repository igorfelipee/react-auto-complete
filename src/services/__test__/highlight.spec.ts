import { highlightText } from "../highlight";

describe("highlightText should", () => {
  it("return correct string replacing the match searchTearm", () => {
    const expected =
      'a<strong class="autocomplete__result-item--highlighted">bc</strong>';
    const received = highlightText("abc", "bc");

    expect(expected).toBe(received);
  });
});
