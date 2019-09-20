import { assert } from "chai";
import { browsers } from "../lib/index";

describe("Support matrix", () => {
  it("exports a list of browsers", () => {
    // Check that at least one legacy, latest, desktop and mobile browsers exported
    assert.isTrue(Object.values(browsers).some(b => b.desktop));
    assert.isTrue(Object.values(browsers).some(b => b.mobile));
    assert.isTrue(Object.values(browsers).some(b => b.legacy));
    assert.isTrue(Object.values(browsers).some(b => b.latest));
  });
});
