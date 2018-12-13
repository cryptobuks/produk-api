import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './messages/message/message.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/produk'),
    MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
