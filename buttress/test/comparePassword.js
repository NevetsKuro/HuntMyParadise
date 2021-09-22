import bcrypt from "bcryptjs";

export const comparePassword = (pwd, hashedPwd) => {
  return bcrypt.compareSync(
    pwd, // password
    hashedPwd // hashed password
  );
};
