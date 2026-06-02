export interface UpdateRolePayload {
  id: string;
  role: "USER" | "ADMIN";
}

export interface UpdateRoleContext<T> {
  previousUsers?: T;
}