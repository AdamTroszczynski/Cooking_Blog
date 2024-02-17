import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { login, register, getUserFromToken } from "@/services/userServices";
import { AUTH_API_URL } from "@/const/commonConst";
import User from "@/models/User";
import { describe, it, expect, afterEach } from "vitest";

describe('userServices.ts', () => {
  const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

describe("login()", () => {
  it("should return UserToken object if login is successful", async () => {
    const testUsername = "testName";
    const testPassword = "testPassword";
    const responseData = {
      user: {email: 'test@test.pl', registered: 1, userId: 1, username: 'testName'},
      token: "testToken",
    };
    const expectedResult = {
      user: new User(1,'testName','test@test.pl',1),
      token: 'testToken'
    }

    mock
      .onPost(`${AUTH_API_URL}/login`, {
        username: testUsername,
        password: testPassword,
      })
      .reply(200, responseData);

    const response = await login(testUsername, testPassword);
    expect(response).toEqual(expectedResult);
  });

  it("should return an error if login is failed", async () => {
    const testUsername = "testName";
    const testPassword = "testPassword";

    mock
      .onPost(`${AUTH_API_URL}/login`, {
        username: testUsername,
        password: testPassword,
      })
      .reply(401);

    const responseFn = async () => await login(testUsername, testPassword);
    expect(responseFn).rejects.toThrowError();
  });
});


describe("register()", () => {
  it("should return UserToken object if register is successful", async () => {
    const testUsername = "testName";
    const testPassword = "testPassword";
    const testPasswordRepeat = "testPassword";
    const testEmail = "testEmail@test.pl";
    const responseData = {
      user: {email: 'testEmail@test.pl', username: 'testName', registered: 1, userId: 1},
      token: "testToken",
    };
    const expectedResult = {
      user: new User(1,'testName','testEmail@test.pl',1),
      token: 'testToken'
      }

    mock
      .onPost(`${AUTH_API_URL}/register`, {
        username: testUsername,
        email: testEmail,
        password: testPassword,
        passwordRepeat: testPasswordRepeat,
      })
      .reply(200, responseData);

    const response = await register(
      testUsername,
      testEmail,
      testPassword,
      testPasswordRepeat
    );
    expect(response).toEqual(expectedResult);
  });

  it("should return an Error if register if failed", async () => {
    const testUsername = "testName";
    const testPassword = "testPassword";
    const testPasswordRepeat = "testPassword";
    const testEmail = "testEmail@test.pl";

    mock
      .onPost(`${AUTH_API_URL}/register`, {
        username: testUsername,
        email: testEmail,
        password: testPassword,
        passwordRepeat: testPasswordRepeat,
      })
      .reply(401);

    const responseFn = async () =>
      register(testUsername, testEmail, testPassword, testPasswordRepeat);
    expect(responseFn).rejects.toThrowError();
  });
});



describe("getUserFromToken()", () => {
  it("should return User object if token is correct", async () => {
    const testToken = "testToken";
    const responseData = {email: 'test@test.pl', registered: 1, userId: 1, username: 'testName'};
    const expectedResult = new User(1,'testName','test@test.pl',1);

    mock.onPost(`${AUTH_API_URL}/userFromToken`).reply(200, responseData);

    const response = await getUserFromToken(testToken);
    expect(response).toEqual(expectedResult);
  });

  it("should return an error if token is incorrect", async () => {
    const testToken = "testToken";

    mock.onPost(`${AUTH_API_URL}/userFromToken`).reply(401);

    const responseFn = async () => await getUserFromToken(testToken);
    expect(responseFn).rejects.toThrowError();
  });
});

})
