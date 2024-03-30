export class UserWithoutPassword {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles: string;
}

export class Role {
  name: string;
}

export class UserM extends UserWithoutPassword {
  password: string;
}
