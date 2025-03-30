import { type SchemaTypeDefinition } from 'sanity'
import { userType } from './user'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType  ],
}
