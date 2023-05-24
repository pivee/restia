import { Injectable } from '@nestjs/common';
import { CreateEntityRequest, UpdateEntityRequest } from '../../types/entities';

@Injectable()
export class EntitiesService {
  create(createEntityRequest: CreateEntityRequest) {
    console.log({ createEntityDto: createEntityRequest });
    return 'This action adds a new entity';
  }

  findAll() {
    return `This action returns all entity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entity`;
  }

  update(id: number, updateEntityRequest: UpdateEntityRequest) {
    console.log({ updateEntityDto: updateEntityRequest });
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
