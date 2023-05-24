/* eslint-disable @typescript-eslint/no-empty-interface */

export type Entity = {
  /**
   * @format uuid
   */
  id: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
};

export interface CreateEntityRequest extends Omit<Entity, 'id'> {}

export interface UpdateEntityRequest extends Partial<CreateEntityRequest> {}
