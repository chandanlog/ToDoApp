// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: process.env.DB_HOST || 'localhost',
//       port: Number(process.env.DB_PORT) || 3306,
//       username: process.env.DB_USER || 'root',
//       password: process.env.DB_PASS || 'root',
//       database: process.env.DB_NAME || 'eventbooking',
//       autoLoadEntities: true,
//       synchronize: true, // Set to false in production
//     }),
//   ],
// })
// export class DatabaseModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true, // ❌ Set to false in production!
        logging: true, // ✅ Enables query debugging (remove in production)
      }),
    }),
  ],
})
export class DatabaseModule {}
