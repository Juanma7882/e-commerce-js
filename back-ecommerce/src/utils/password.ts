import bcrypt from "bcrypt";

const SALT_ROUNDS = 25;

/**
 * The function `hashPassword` asynchronously hashes a given password using bcrypt with a specified
 * number of salt rounds.
 * @param {string} password - The `password` parameter is a string that represents the user's password
 * that needs to be hashed for security purposes.
 * @returns The `hashPassword` function is returning a Promise that resolves to a hashed version of the
 * input `password` string using bcrypt with a specified number of salt rounds.
 */
export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS);
};


/**
 * The function `comparePassword` compares a plain text password with a hashed password using bcrypt
 * and returns a boolean indicating if they match.
 * @param {string} password - The `password` parameter is a string that represents the plain text
 * password that a user enters when trying to log in.
 * @param {string} passwordHash - The `passwordHash` parameter is a hashed version of a password. It is
 * typically generated using a hashing algorithm like bcrypt before storing it in a database for
 * security reasons. The `comparePassword` function you provided is used to compare a plain text
 * password with its hashed version to verify if they match.
 * @returns The `comparePassword` function is returning a Promise that resolves to a boolean value. The
 * boolean value indicates whether the provided `password` matches the `passwordHash` after being
 * compared using bcrypt's `compare` method.
 */
export const comparePassword = async (password: string, passwordHash: string): Promise<boolean> => {
    return bcrypt.compare(password, passwordHash);
};
