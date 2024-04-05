import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from './entities/departamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartamentoService {
  departamentoRepository: any;
  constructor(
  
    @InjectRepository(Departamento)
    private readonly empleadoRepository: Repository<Departamento>,
    
  ){}

  async create(createDepartamentoDto: CreateDepartamentoDto) {

      try{
  
        const empleado = this.departamentoRepository.create(CreateDepartamentoDto);
        await this.departamentoRepository.save(Departamento);
        
        return Departamento;
  
      } catch (error) {
        console.log(error)
        throw new InternalServerErrorException('Intenta de nuevo')
      }
  }

  findAll() {
    return `This action returns all departamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departamento`;
  }

  update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    return `This action updates a #${id} departamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamento`;
  }
}
