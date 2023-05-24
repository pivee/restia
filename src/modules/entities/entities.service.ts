import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';
import {
  CreateEntityRequest,
  Entity,
  UpdateEntityRequest,
} from '../../types/entities';

@Injectable()
export class EntitiesService {
  entities: Entity[] = [];

  create(createEntityRequest: CreateEntityRequest): Entity | null {
    Logger.verbose('This action adds a new entity');
    Logger.debug({ createEntityDto: createEntityRequest });

    const createdEntity = { id: crypto.randomUUID(), ...createEntityRequest };
    this.entities.push(createdEntity);

    return createdEntity;
  }

  findAll() {
    Logger.verbose(`This action returns all entities`);

    return this.entities;
  }

  findOne(id: string) {
    Logger.verbose(`This action returns the entity with id: #${id}`);

    return this.entities.find((entity) => entity.id === id);
  }

  update(id: string, updateEntityRequest: UpdateEntityRequest) {
    Logger.verbose(`This action updates the entity with id: #${id}`);
    Logger.debug({ updateEntityDto: updateEntityRequest });

    const entityIndex = this.entities.findIndex((entity) => entity.id === id);

    if (entityIndex < 0) throw new Error("Entity doesn't exist");

    this.entities[entityIndex] = {
      ...this.entities[entityIndex],
      ...updateEntityRequest,
    };

    return this.entities[entityIndex];
  }

  remove(id: string) {
    Logger.verbose(`This action removes the entity with id: #${id}`);

    const entityIndex = this.entities.findIndex((entity) => entity.id === id);

    if (entityIndex < 0) throw new Error("Entity doesn't exist");

    this.entities.splice(entityIndex, 1);

    return;
  }
}
