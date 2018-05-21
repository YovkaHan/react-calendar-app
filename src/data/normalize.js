/**
 * Created by Jordan3D on 5/18/2018.
 */
import { schema  } from 'normalizr';

// Here we create the normalizr schemas.  These define the entity names
// (entities.posts, for example) and how we get the ID for each entity.
//
// We could define a function for idAttribute which returns a key (such as
// combining two fields).
export const eventSchema = new schema.Entity(
  'events',
  {},
  { idAttribute: 'id' }
  );

export const dateSwitcherSchema = new schema.Entity(
  'dateSwitchers',
  {},
  { idAttribute: 'id' }
);

export const eventsSchema = [eventSchema];

// Here we define relationships between each resource/schema/entity
// (or whatever you feel like calling them these days)

// The post resource in our API response has an author and comments as children
// postSchema.define({
//   author: postAuthorSchema,
//   comments: arrayOf(commentSchema)
// });
//
// // Each comment has an author
// commentSchema.define({
//   author: commentAuthorSchema
// });
