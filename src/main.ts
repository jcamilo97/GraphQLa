import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const port = 3000;
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(port ,() => console.log(`Application is listening on port ${port}`));
}
bootstrap();