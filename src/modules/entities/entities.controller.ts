import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { Controller, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateEntityRequest, UpdateEntityRequest } from '../../types/entities';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  /** @tag entities */
  @TypedRoute.Post()
  create(@TypedBody() createEntityRequest: CreateEntityRequest) {
    return this.entitiesService.create(createEntityRequest);
  }

  /** @tag entities */
  @TypedRoute.Get()
  findAll() {
    return this.entitiesService.findAll();
  }

  /** @tag entities */
  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string) {
    return this.entitiesService.findOne(id);
  }

  /** @tag entities */
  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateEntityRequest: UpdateEntityRequest,
  ) {
    return this.entitiesService.update(id, updateEntityRequest);
  }

  /** @tag entities */
  @TypedRoute.Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@TypedParam('id') id: string) {
    return this.entitiesService.remove(id);
  }
}
