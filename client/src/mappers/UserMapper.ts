import User from '@/models/User';

export default class UserMapper {
  /**
   * Map object to User object
   * @param {any} obj Object to map
   * @returns {User} User object
   */
  public static mapToUser(obj: any): User {
    return new User(
      obj.userId,
      obj.username,
      obj.email,
      obj.registered,
    );
  }
}
