/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  description: Scalars['String'];
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  active?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metaDescription?: Maybe<Scalars['String']>;
  metaKeyword?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create a new link */
  createLink?: Maybe<Link>;
};


export type RootMutationTypeCreateLinkArgs = {
  description: Scalars['String'];
  url: Scalars['String'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get all products */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /** Get categories by parent */
  getCategoriesByParent?: Maybe<Array<Maybe<Category>>>;
  /** Get parent Categories */
  getParentCategories?: Maybe<Array<Maybe<Category>>>;
  /** Get Product by ID */
  getProductById?: Maybe<Product>;
  /** Get Products by Category id */
  getProductsByCategoryId?: Maybe<Array<Maybe<Product>>>;
};


export type RootQueryTypeGetProductByIdArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeGetProductsByCategoryIdArgs = {
  categoryId: Scalars['ID'];
};

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'RootQueryType', allProducts?: Array<{ __typename?: 'Product', id: string, name: string } | null> | null };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductByIdQuery = { __typename?: 'RootQueryType', getProductById?: { __typename?: 'Product', id: string, name: string } | null };


export const AllProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllProductsQuery, AllProductsQueryVariables>;
export const GetProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;