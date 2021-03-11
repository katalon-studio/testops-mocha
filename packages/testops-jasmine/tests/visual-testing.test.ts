import { readFileSync } from "fs";

describe("Visual testing", () => {
  it("can get checkpoint path", () => {
    const checkpointPath = global.testOpsJasmine.visualCheckpointPath(
      "Login_page"
    );
    expect(checkpointPath).toMatch(/keyes-Login_page.png/g);
  });

  it("can write checkpoint", () => {
    const image = readFileSync("tests/screenshot.png");
    global.testOpsJasmine.visualCheckpoint("Sample image", image);
  });
});
