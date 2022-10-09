import capitalize from "./capitalize";

test("luffy capitalize to Luffy", () => {
  expect(capitalize("luffy")).toBe("Luffy");
});

test("ZORO capitalize to Zoro", () => {
  expect(capitalize("ZORO")).toBe("Zoro");
});
