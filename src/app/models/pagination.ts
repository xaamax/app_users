export class Pagination {
  limit: number;
  page: number;
  total: number;
}

export class PaginatedResponse<T> {
    data: T;
    pagination: Pagination;
}
