import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Author {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly photo?: string;
  readonly description?: string;
  readonly twitter?: string;
  readonly linkedin?: string;
  readonly facebook?: string;
  readonly github?: string;
  readonly youtube?: string;
  readonly posts?: (AuthorPost | null)[];
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class AuthorPost {
  readonly id: string;
  readonly author: Author;
  readonly post: Post;
  constructor(init: ModelInit<AuthorPost>);
  static copyOf(source: AuthorPost, mutator: (draft: MutableModel<AuthorPost>) => MutableModel<AuthorPost> | void): AuthorPost;
}

export declare class Post {
  readonly id: string;
  readonly authors?: (AuthorPost | null)[];
  readonly title: string;
  readonly content?: string;
  readonly featured_media?: string;
  readonly slug?: string;
  readonly type?: string;
  readonly tags?: (PostTag | null)[];
  readonly createdAt: string;
  readonly excerpt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class PostTag {
  readonly id: string;
  readonly post: Post;
  readonly tag: Tag;
  constructor(init: ModelInit<PostTag>);
  static copyOf(source: PostTag, mutator: (draft: MutableModel<PostTag>) => MutableModel<PostTag> | void): PostTag;
}

export declare class Tag {
  readonly id: string;
  readonly posts?: (PostTag | null)[];
  readonly name?: string;
  readonly slug?: string;
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}