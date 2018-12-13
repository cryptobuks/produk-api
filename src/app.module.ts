import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    HttpModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/produk'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
