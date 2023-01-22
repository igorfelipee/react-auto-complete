import { fetchTodos } from "../todo";

const mockedSuccesData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
];

// need to do this because node does not reconize fetch
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => mockedSuccesData,
  })
);

describe("fetchTodos should", () => {
  it("return todos if api return results", async () => {
    expect(await fetchTodos()).toBe(mockedSuccesData);
  });

  it("return empy array if request return error", async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject("Error"));
    jest.mock("../http", () => ({
      send: jest.fn().mockImplementation(() => {
        throw new Error();
      }),
    }));

    expect(await fetchTodos()).toStrictEqual([]);
  });
});
