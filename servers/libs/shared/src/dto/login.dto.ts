export interface LoginDto {
  _id: number;
  email: string;
  password: string;
  roles?: string[];
}
