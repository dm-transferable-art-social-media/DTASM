import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

test("renders App component without crashing", async () => {
  const rendered= renderer.create(<App />);
  await new Promise(resolve => setTimeout(resolve, 0));
  const tree = rendered.toJSON();
  expect(tree).toMatchSnapshot();
});
