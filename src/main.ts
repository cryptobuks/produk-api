import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('Products')
    .setVersion('1.0')
    // .addTag('products')
    .setBasePath('/api/')
    // .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs/api', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
