import "@testing-library/jest-dom/extend-expect";

const { server } = require("../__mocks__/server");

beforeAll(() => {
    server.listen({
        onUnhandledRequest: "warn",
    });
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});
