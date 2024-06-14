/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs"); // file handing in node, used to open read and write files. fs is included in nodes extended library
    let fileContents = fs.readFileSync("index.html", "utf-8"); // use fs to read a file contents(fs.readFileSyne)
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});