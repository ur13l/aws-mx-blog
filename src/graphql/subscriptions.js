/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateAuthorPost = /* GraphQL */ `
  subscription OnCreateAuthorPost {
    onCreateAuthorPost {
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
export const onUpdateAuthorPost = /* GraphQL */ `
  subscription OnUpdateAuthorPost {
    onUpdateAuthorPost {
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
export const onDeleteAuthorPost = /* GraphQL */ `
  subscription OnDeleteAuthorPost {
    onDeleteAuthorPost {
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
export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
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
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
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
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
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
