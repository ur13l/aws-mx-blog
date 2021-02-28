// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, AuthorPost, Post, PostTag, Tag } = initSchema(schema);

export {
  Author,
  AuthorPost,
  Post,
  PostTag,
  Tag
};