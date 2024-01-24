export interface UserDto {
  _id: number;
  email: string;
  password: string;
  roles?: string[];
}
