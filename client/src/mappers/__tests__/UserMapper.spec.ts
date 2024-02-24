import { describe, it, expect } from 'vitest';
import User from '@/models/User';
import UserMapper from '@/mappers/UserMapper';

describe('UserMapper.ts', () => {
  describe('mapToUser', () => {
    it('should return User object if input is correct', () => {
      const testObject = {
        userId: 1,
        username: 'test',
        email: 'test@test.pl',
        registered: 1,
      };
      const expectedResult = new User(1, 'test', 'test@test.pl', 1);

      const result = UserMapper.mapToUser(testObject);
      expect(result).toEqual(expectedResult);
    });
  });
});
