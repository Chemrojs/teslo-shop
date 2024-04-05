import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { PuestoModule } from './puesto/puesto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true,
		}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: +process.env.DB_PORT,
      autoLoadEntities: true,
      synchronize: true,
      //ssl: process.env.USE_SSL === 'true',
    }),

    ProductsModule,

    EmpleadoModule,

    DepartamentoModule,

    PuestoModule,
  ],
})
export class AppModule {}
