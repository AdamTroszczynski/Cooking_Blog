import {expect,it, describe, beforeEach} from "vitest";
import { useUserStore } from "../userStore";
import { setActivePinia, createPinia } from "pinia";
import User from "@/models/User";

describe('userStore.ts', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('Getters', () => {
    describe('isUserLoggedIn()', () => {
      it('should return true if isLogged is true, user and token are not empty', () => {
        const store = useUserStore();
        store.user = new User(1,'testName','testEmail@test.pl', 1);
        store.token = 'testToken',
        store.isLogged = true;
        expect(store.isUserLoggedIn).toBe(true);
      });
      it('should return false if isLogged is false', () => {
        const store = useUserStore();
        store.user = null;
        store.token = 'testToken';
        store.isLogged = false;
        expect(store.isUserLoggedIn).toBe(false);

        store.user = new User(1, 'testName', 'testEmail@test.pl', 1);
        store.token = "";
        store.isLogged = false;
        expect(store.isUserLoggedIn).toBe(false);

        store.user = new User(1, 'testName', 'testEmail@test.pl', 1);
        store.token = 'testToken';
        store.isLogged = false;
        expect(store.isUserLoggedIn).toBe(false);
      })
      it('should return false if isLogged is true, but user or token are empty', () => {
        const store = useUserStore();
        store.user = null;
        store.token = 'testToken';
        store.isLogged = true;
        expect(store.isUserLoggedIn).toBe(false);

        store.user = new User(1, 'testName', 'testEmail@test.pl', 1);
        store.token = '';
        store.isLogged = true;
        expect(store.isUserLoggedIn).toBe(false);
      })
    })
  });

  describe('Actions', () => {
    describe('login()', () => {
      it('should set user, token and isLogged values', () => {
        const store = useUserStore();
        const user = new User(1, 'testName', 'testEmail@test.pl', 1);
        const token = 'testToken';

        store.login(user,token);
        expect(store.user).toEqual(user);
        expect(store.token).toBe(token);
        expect(store.isLogged).toBe(true);
      })
    })
    describe('logout()', () => {
      it('should set user, token and isLogged to default values', () => {
        const store = useUserStore();
        store.user = new User(1, 'testName', 'testEmail@test.pl', 1);
        store.token = 'testToken';
        store.isLogged = true;

        store.logout();
        expect(store.user).toBe(null);
        expect(store.token).toBe('');
        expect(store.isLogged).toBe(false);
      })
    })
    describe('login() and logout()', () => {
      it('should correctly login and logout user', () => {
        const store = useUserStore();
        const user = new User(1, 'testName', 'testEmail@test.pl', 1);
        const token = 'testToken';

        store.login(user, token);
        expect(store.user).toEqual(user);
        expect(store.token).toBe(token);
        expect(store.isLogged).toBe(true);

        store.logout();
        expect(store.user).toBe(null);
        expect(store.token).toBe('');
        expect(store.isLogged).toBe(false);
      })
    })
  });
})
