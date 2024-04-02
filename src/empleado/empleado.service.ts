import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadoService {
  empleadoRepository: any;

  constructor(

    @InjectRepository(Empleado)
    private readonly productRepository: Repository<Empleado>,
    
  ){}
  async create(createEmpleadoDto: CreateEmpleadoDto) {
    
    try{

      const empleado = this.empleadoRepository.create(CreateEmpleadoDto);
      await this.empleadoRepository.save(empleado);
      
      return empleado;

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Intenta de nuevo')
    }
  }

  findAll() {
    return `This action returns all empleado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
