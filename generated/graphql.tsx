import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type EqualUser = {
  __typename?: 'EqualUser';
  Address: Scalars['String']['output'];
  Age: Scalars['Float']['output'];
  Birthday: Scalars['DateTime']['output'];
  Face_img: Maybe<Scalars['String']['output']>;
  Hobby: Maybe<Scalars['String']['output']>;
  Intro: Maybe<Scalars['String']['output']>;
  Job: Maybe<Scalars['String']['output']>;
  Mail: Scalars['String']['output'];
  Name: Scalars['String']['output'];
  Pass: Scalars['String']['output'];
  SID: Maybe<Scalars['Float']['output']>;
  User_ID: Scalars['Float']['output'];
};

export type MatchingChatInput = {
  __typename?: 'MatchingChatInput';
  Matching_ID: Scalars['Float']['output'];
  Matching_Talk_Content: Scalars['String']['output'];
  Matching_Talk_ID: Maybe<Scalars['Float']['output']>;
  User_ID: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sendMessage: MatchingChatInput;
};


export type MutationSendMessageArgs = {
  Matching_ID: Scalars['Float']['input'];
  Matching_Talk_Content: Scalars['String']['input'];
  User_ID: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  EqualUser: Array<EqualUser>;
  getUser: EqualUser;
};


export type QueryGetUserArgs = {
  User_ID: Scalars['Float']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageSent: MatchingChatInput;
};

export type GetEqualUserQueryVariables = Exact<{
  User_ID: Scalars['Float']['input'];
}>;


export type GetEqualUserQuery = { __typename?: 'Query', getUser: { __typename?: 'EqualUser', User_ID: number, Face_img: string | null, Name: string, Address: string, Birthday: any, Mail: string, Pass: string, Age: number, Job: string | null, Hobby: string | null, Intro: string | null, SID: number | null } };


export const GetEqualUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEqualUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"User_ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"User_ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"User_ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User_ID"}},{"kind":"Field","name":{"kind":"Name","value":"Face_img"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"Birthday"}},{"kind":"Field","name":{"kind":"Name","value":"Mail"}},{"kind":"Field","name":{"kind":"Name","value":"Pass"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}},{"kind":"Field","name":{"kind":"Name","value":"Job"}},{"kind":"Field","name":{"kind":"Name","value":"Hobby"}},{"kind":"Field","name":{"kind":"Name","value":"Intro"}},{"kind":"Field","name":{"kind":"Name","value":"SID"}}]}}]}}]} as unknown as DocumentNode<GetEqualUserQuery, GetEqualUserQueryVariables>;