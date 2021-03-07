/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      photo
      description
      twitter
      linkedin
      facebook
      github
      youtube
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      photo
      description
      twitter
      linkedin
      facebook
      github
      youtube
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      photo
      description
      twitter
      linkedin
      facebook
      github
      youtube
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      featured_media
      slug
      type
      createdAt
      excerpt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      authors {
        nextToken
        startedAt
      }
      tags {
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      featured_media
      slug
      type
      createdAt
      excerpt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      authors {
        nextToken
        startedAt
      }
      tags {
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      featured_media
      slug
      type
      createdAt
      excerpt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      authors {
        nextToken
        startedAt
      }
      tags {
        nextToken
        startedAt
      }
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      slug
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      slug
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      slug
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const createAuthorPost = /* GraphQL */ `
  mutation CreateAuthorPost(
    $input: CreateAuthorPostInput!
    $condition: ModelAuthorPostConditionInput
  ) {
    createAuthorPost(input: $input, condition: $condition) {
      id
      authorID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        photo
        description
        twitter
        linkedin
        facebook
        github
        youtube
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const updateAuthorPost = /* GraphQL */ `
  mutation UpdateAuthorPost(
    $input: UpdateAuthorPostInput!
    $condition: ModelAuthorPostConditionInput
  ) {
    updateAuthorPost(input: $input, condition: $condition) {
      id
      authorID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        photo
        description
        twitter
        linkedin
        facebook
        github
        youtube
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const deleteAuthorPost = /* GraphQL */ `
  mutation DeleteAuthorPost(
    $input: DeleteAuthorPostInput!
    $condition: ModelAuthorPostConditionInput
  ) {
    deleteAuthorPost(input: $input, condition: $condition) {
      id
      authorID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      author {
        id
        firstName
        lastName
        photo
        description
        twitter
        linkedin
        facebook
        github
        youtube
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      tag {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updatePostTag = /* GraphQL */ `
  mutation UpdatePostTag(
    $input: UpdatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    updatePostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      tag {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        title
        content
        featured_media
        slug
        type
        createdAt
        excerpt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      tag {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
