export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserResponse {
  data: [];
  total: number;
  page: number;
  limit: number;
}
