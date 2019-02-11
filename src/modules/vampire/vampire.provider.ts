import { Connection } from 'mongoose';
import { VampireSchema } from './schemas/vampire.schema';

export const vampiresProviders = [
  {
    provide: 'VampireModelToken',
    useFactory: (connection: Connection) => connection.model('vampire', VampireSchema),
    inject: ['DbConnectionToken'],
  },
];