import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './modules/database/database.module'
import { VampireModule } from './modules/vampire/vampire.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    VampireModule,
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
        installSubscriptionHandlers: true,
        definitions: {
          path: join(process.cwd(), 'src/graphql.schema.ts'),
          outputAs: 'class',
        },
      }),
    })
  ],
})
export class ApplicationModule {}
// @Module({
//   imports: [VampireModule],
//   controllers: [AppController],
//   components: [],
// })
// export class ApplicationModule {}
