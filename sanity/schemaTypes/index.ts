import { type SchemaTypeDefinition } from 'sanity'
import { userType } from './user'
import { videoType } from './video'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType , videoType ],
}
