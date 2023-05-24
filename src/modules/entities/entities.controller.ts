import { TypedRoute } from '@nestia/core';
import { Body, Controller, Param } from '@nestjs/common';
import { CreateEntityRequest, UpdateEntityRequest } from '../../types/entities';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  /** @tag entities */
  @TypedRoute.Post()
  create(@Body() createEntityRequest: CreateEntityRequest) {
    return this.entitiesService.create(createEntityRequest);
  }

  /** @tag entities */
  @TypedRoute.Get()
  findAll() {
    return this.entitiesService.findAll();
  }

  /** @tag entities */
  @TypedRoute.Get(':id')
  findOne(@Param('id') id: string) {
    return this.entitiesService.findOne(+id);
  }

  /** @tag entities */
  @TypedRoute.Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntityRequest: UpdateEntityRequest,
  ) {
    return this.entitiesService.update(+id, updateEntityRequest);
  }

  /** @tag entities */
  @TypedRoute.Delete(':id')
  remove(@Param('id') id: string) {
    return this.entitiesService.remove(+id);
  }
}
