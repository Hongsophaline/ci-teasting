const request = require("supertest");
const app = require("../index"); // Make sure path is correct

describe("Test Express API", () => {
  it("GET / should return Hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Hello, CI/CD!");
  });

  it("POST /add should return sum of two numbers", async () => {
    const res = await request(app).post("/add").send({ a: 5, b: 7 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(12);
  });

  it("POST /add with invalid data should return 400", async () => {
    const res = await request(app).post("/add").send({ a: 5, b: "x" });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBe("a and b must be numbers");
  });
});
