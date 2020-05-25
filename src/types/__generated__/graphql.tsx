import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** columns and relationships of "fragments" */
export type Fragments = {
   __typename?: 'fragments';
  branched: Scalars['Boolean'];
  content: Scalars['String'];
  created_on: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  stories: Array<Stories_Fragments>;
  /** An aggregated array relationship */
  stories_aggregate: Stories_Fragments_Aggregate;
};


/** columns and relationships of "fragments" */
export type FragmentsStoriesArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** columns and relationships of "fragments" */
export type FragmentsStories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};

/** aggregated selection of "fragments" */
export type Fragments_Aggregate = {
   __typename?: 'fragments_aggregate';
  aggregate?: Maybe<Fragments_Aggregate_Fields>;
  nodes: Array<Fragments>;
};

/** aggregate fields of "fragments" */
export type Fragments_Aggregate_Fields = {
   __typename?: 'fragments_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Fragments_Max_Fields>;
  min?: Maybe<Fragments_Min_Fields>;
};


/** aggregate fields of "fragments" */
export type Fragments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Fragments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Fragments_Max_Fields = {
   __typename?: 'fragments_max_fields';
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Fragments_Min_Fields = {
   __typename?: 'fragments_min_fields';
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "fragments" */
export type Fragments_Mutation_Response = {
   __typename?: 'fragments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Fragments>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "fragments" */
  delete_fragments?: Maybe<Fragments_Mutation_Response>;
  /** delete single row from the table: "fragments" */
  delete_fragments_by_pk?: Maybe<Fragments>;
  /** delete data from the table: "private_fragments" */
  delete_private_fragments?: Maybe<Private_Fragments_Mutation_Response>;
  /** delete single row from the table: "private_fragments" */
  delete_private_fragments_by_pk?: Maybe<Private_Fragments>;
  /** delete data from the table: "private_stories" */
  delete_private_stories?: Maybe<Private_Stories_Mutation_Response>;
  /** delete single row from the table: "private_stories" */
  delete_private_stories_by_pk?: Maybe<Private_Stories>;
  /** delete data from the table: "stories" */
  delete_stories?: Maybe<Stories_Mutation_Response>;
  /** delete single row from the table: "stories" */
  delete_stories_by_pk?: Maybe<Stories>;
  /** delete data from the table: "stories_fragments" */
  delete_stories_fragments?: Maybe<Stories_Fragments_Mutation_Response>;
  /** delete single row from the table: "stories_fragments" */
  delete_stories_fragments_by_pk?: Maybe<Stories_Fragments>;
  /** delete data from the table: "stories_tags" */
  delete_stories_tags?: Maybe<Stories_Tags_Mutation_Response>;
  /** delete single row from the table: "stories_tags" */
  delete_stories_tags_by_pk?: Maybe<Stories_Tags>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** insert data into the table: "fragments" */
  insert_fragments?: Maybe<Fragments_Mutation_Response>;
  /** insert a single row into the table: "fragments" */
  insert_fragments_one?: Maybe<Fragments>;
  /** insert data into the table: "private_fragments" */
  insert_private_fragments?: Maybe<Private_Fragments_Mutation_Response>;
  /** insert a single row into the table: "private_fragments" */
  insert_private_fragments_one?: Maybe<Private_Fragments>;
  /** insert data into the table: "private_stories" */
  insert_private_stories?: Maybe<Private_Stories_Mutation_Response>;
  /** insert a single row into the table: "private_stories" */
  insert_private_stories_one?: Maybe<Private_Stories>;
  /** insert data into the table: "stories" */
  insert_stories?: Maybe<Stories_Mutation_Response>;
  /** insert data into the table: "stories_fragments" */
  insert_stories_fragments?: Maybe<Stories_Fragments_Mutation_Response>;
  /** insert a single row into the table: "stories_fragments" */
  insert_stories_fragments_one?: Maybe<Stories_Fragments>;
  /** insert a single row into the table: "stories" */
  insert_stories_one?: Maybe<Stories>;
  /** insert data into the table: "stories_tags" */
  insert_stories_tags?: Maybe<Stories_Tags_Mutation_Response>;
  /** insert a single row into the table: "stories_tags" */
  insert_stories_tags_one?: Maybe<Stories_Tags>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** update data of the table: "fragments" */
  update_fragments?: Maybe<Fragments_Mutation_Response>;
  /** update single row of the table: "fragments" */
  update_fragments_by_pk?: Maybe<Fragments>;
  /** update data of the table: "private_fragments" */
  update_private_fragments?: Maybe<Private_Fragments_Mutation_Response>;
  /** update single row of the table: "private_fragments" */
  update_private_fragments_by_pk?: Maybe<Private_Fragments>;
  /** update data of the table: "private_stories" */
  update_private_stories?: Maybe<Private_Stories_Mutation_Response>;
  /** update single row of the table: "private_stories" */
  update_private_stories_by_pk?: Maybe<Private_Stories>;
  /** update data of the table: "stories" */
  update_stories?: Maybe<Stories_Mutation_Response>;
  /** update single row of the table: "stories" */
  update_stories_by_pk?: Maybe<Stories>;
  /** update data of the table: "stories_fragments" */
  update_stories_fragments?: Maybe<Stories_Fragments_Mutation_Response>;
  /** update single row of the table: "stories_fragments" */
  update_stories_fragments_by_pk?: Maybe<Stories_Fragments>;
  /** update data of the table: "stories_tags" */
  update_stories_tags?: Maybe<Stories_Tags_Mutation_Response>;
  /** update single row of the table: "stories_tags" */
  update_stories_tags_by_pk?: Maybe<Stories_Tags>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
};


/** mutation root */
export type Mutation_RootDelete_FragmentsArgs = {
  where: Fragments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fragments_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Private_FragmentsArgs = {
  where: Private_Fragments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Private_Fragments_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Private_StoriesArgs = {
  where: Private_Stories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Private_Stories_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_StoriesArgs = {
  where: Stories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stories_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Stories_FragmentsArgs = {
  where: Stories_Fragments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stories_Fragments_By_PkArgs = {
  fragment_id: Scalars['String'];
  story_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Stories_TagsArgs = {
  where: Stories_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stories_Tags_By_PkArgs = {
  story_id: Scalars['String'];
  tag: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_FragmentsArgs = {
  objects: Array<Fragments_Insert_Input>;
  on_conflict?: Maybe<Fragments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fragments_OneArgs = {
  object: Fragments_Insert_Input;
  on_conflict?: Maybe<Fragments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Private_FragmentsArgs = {
  objects: Array<Private_Fragments_Insert_Input>;
  on_conflict?: Maybe<Private_Fragments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Private_Fragments_OneArgs = {
  object: Private_Fragments_Insert_Input;
  on_conflict?: Maybe<Private_Fragments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Private_StoriesArgs = {
  objects: Array<Private_Stories_Insert_Input>;
  on_conflict?: Maybe<Private_Stories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Private_Stories_OneArgs = {
  object: Private_Stories_Insert_Input;
  on_conflict?: Maybe<Private_Stories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoriesArgs = {
  objects: Array<Stories_Insert_Input>;
  on_conflict?: Maybe<Stories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stories_FragmentsArgs = {
  objects: Array<Stories_Fragments_Insert_Input>;
  on_conflict?: Maybe<Stories_Fragments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stories_Fragments_OneArgs = {
  object: Stories_Fragments_Insert_Input;
  on_conflict?: Maybe<Stories_Fragments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stories_OneArgs = {
  object: Stories_Insert_Input;
  on_conflict?: Maybe<Stories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stories_TagsArgs = {
  objects: Array<Stories_Tags_Insert_Input>;
  on_conflict?: Maybe<Stories_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stories_Tags_OneArgs = {
  object: Stories_Tags_Insert_Input;
  on_conflict?: Maybe<Stories_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FragmentsArgs = {
  _set?: Maybe<Fragments_Set_Input>;
  where: Fragments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fragments_By_PkArgs = {
  _set?: Maybe<Fragments_Set_Input>;
  pk_columns: Fragments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Private_FragmentsArgs = {
  _set?: Maybe<Private_Fragments_Set_Input>;
  where: Private_Fragments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Private_Fragments_By_PkArgs = {
  _set?: Maybe<Private_Fragments_Set_Input>;
  pk_columns: Private_Fragments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Private_StoriesArgs = {
  _inc?: Maybe<Private_Stories_Inc_Input>;
  _set?: Maybe<Private_Stories_Set_Input>;
  where: Private_Stories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Private_Stories_By_PkArgs = {
  _inc?: Maybe<Private_Stories_Inc_Input>;
  _set?: Maybe<Private_Stories_Set_Input>;
  pk_columns: Private_Stories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StoriesArgs = {
  _inc?: Maybe<Stories_Inc_Input>;
  _set?: Maybe<Stories_Set_Input>;
  where: Stories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stories_By_PkArgs = {
  _inc?: Maybe<Stories_Inc_Input>;
  _set?: Maybe<Stories_Set_Input>;
  pk_columns: Stories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stories_FragmentsArgs = {
  _set?: Maybe<Stories_Fragments_Set_Input>;
  where: Stories_Fragments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stories_Fragments_By_PkArgs = {
  _set?: Maybe<Stories_Fragments_Set_Input>;
  pk_columns: Stories_Fragments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stories_TagsArgs = {
  _set?: Maybe<Stories_Tags_Set_Input>;
  where: Stories_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stories_Tags_By_PkArgs = {
  _set?: Maybe<Stories_Tags_Set_Input>;
  pk_columns: Stories_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _set?: Maybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _set?: Maybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};

/** columns and relationships of "private_fragments" */
export type Private_Fragments = {
   __typename?: 'private_fragments';
  content: Scalars['String'];
  created_on: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An object relationship */
  story: Private_Stories;
  story_id: Scalars['String'];
};

/** aggregated selection of "private_fragments" */
export type Private_Fragments_Aggregate = {
   __typename?: 'private_fragments_aggregate';
  aggregate?: Maybe<Private_Fragments_Aggregate_Fields>;
  nodes: Array<Private_Fragments>;
};

/** aggregate fields of "private_fragments" */
export type Private_Fragments_Aggregate_Fields = {
   __typename?: 'private_fragments_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Private_Fragments_Max_Fields>;
  min?: Maybe<Private_Fragments_Min_Fields>;
};


/** aggregate fields of "private_fragments" */
export type Private_Fragments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Private_Fragments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Private_Fragments_Max_Fields = {
   __typename?: 'private_fragments_max_fields';
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  story_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Private_Fragments_Min_Fields = {
   __typename?: 'private_fragments_min_fields';
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  story_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "private_fragments" */
export type Private_Fragments_Mutation_Response = {
   __typename?: 'private_fragments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Private_Fragments>;
};

/** columns and relationships of "private_stories" */
export type Private_Stories = {
   __typename?: 'private_stories';
  char_limit: Scalars['Int'];
  cookie?: Maybe<Scalars['String']>;
  created_on: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  fragments: Array<Private_Fragments>;
  /** An aggregated array relationship */
  fragments_aggregate: Private_Fragments_Aggregate;
  hash: Scalars['String'];
  id: Scalars['String'];
  salt: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "private_stories" */
export type Private_StoriesFragmentsArgs = {
  distinct_on?: Maybe<Array<Private_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Fragments_Order_By>>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};


/** columns and relationships of "private_stories" */
export type Private_StoriesFragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Private_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Fragments_Order_By>>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};

/** aggregated selection of "private_stories" */
export type Private_Stories_Aggregate = {
   __typename?: 'private_stories_aggregate';
  aggregate?: Maybe<Private_Stories_Aggregate_Fields>;
  nodes: Array<Private_Stories>;
};

/** aggregate fields of "private_stories" */
export type Private_Stories_Aggregate_Fields = {
   __typename?: 'private_stories_aggregate_fields';
  avg?: Maybe<Private_Stories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Private_Stories_Max_Fields>;
  min?: Maybe<Private_Stories_Min_Fields>;
  stddev?: Maybe<Private_Stories_Stddev_Fields>;
  stddev_pop?: Maybe<Private_Stories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Private_Stories_Stddev_Samp_Fields>;
  sum?: Maybe<Private_Stories_Sum_Fields>;
  var_pop?: Maybe<Private_Stories_Var_Pop_Fields>;
  var_samp?: Maybe<Private_Stories_Var_Samp_Fields>;
  variance?: Maybe<Private_Stories_Variance_Fields>;
};


/** aggregate fields of "private_stories" */
export type Private_Stories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Private_Stories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Private_Stories_Avg_Fields = {
   __typename?: 'private_stories_avg_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Private_Stories_Max_Fields = {
   __typename?: 'private_stories_max_fields';
  char_limit?: Maybe<Scalars['Int']>;
  cookie?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Private_Stories_Min_Fields = {
   __typename?: 'private_stories_min_fields';
  char_limit?: Maybe<Scalars['Int']>;
  cookie?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "private_stories" */
export type Private_Stories_Mutation_Response = {
   __typename?: 'private_stories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Private_Stories>;
};

/** aggregate stddev on columns */
export type Private_Stories_Stddev_Fields = {
   __typename?: 'private_stories_stddev_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Private_Stories_Stddev_Pop_Fields = {
   __typename?: 'private_stories_stddev_pop_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Private_Stories_Stddev_Samp_Fields = {
   __typename?: 'private_stories_stddev_samp_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Private_Stories_Sum_Fields = {
   __typename?: 'private_stories_sum_fields';
  char_limit?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Private_Stories_Var_Pop_Fields = {
   __typename?: 'private_stories_var_pop_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Private_Stories_Var_Samp_Fields = {
   __typename?: 'private_stories_var_samp_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Private_Stories_Variance_Fields = {
   __typename?: 'private_stories_variance_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "fragments" */
  fragments: Array<Fragments>;
  /** fetch aggregated fields from the table: "fragments" */
  fragments_aggregate: Fragments_Aggregate;
  /** fetch data from the table: "fragments" using primary key columns */
  fragments_by_pk?: Maybe<Fragments>;
  /** fetch data from the table: "private_fragments" */
  private_fragments: Array<Private_Fragments>;
  /** fetch aggregated fields from the table: "private_fragments" */
  private_fragments_aggregate: Private_Fragments_Aggregate;
  /** fetch data from the table: "private_fragments" using primary key columns */
  private_fragments_by_pk?: Maybe<Private_Fragments>;
  /** fetch data from the table: "private_stories" */
  private_stories: Array<Private_Stories>;
  /** fetch aggregated fields from the table: "private_stories" */
  private_stories_aggregate: Private_Stories_Aggregate;
  /** fetch data from the table: "private_stories" using primary key columns */
  private_stories_by_pk?: Maybe<Private_Stories>;
  /** fetch data from the table: "stories" */
  stories: Array<Stories>;
  /** fetch aggregated fields from the table: "stories" */
  stories_aggregate: Stories_Aggregate;
  /** fetch data from the table: "stories" using primary key columns */
  stories_by_pk?: Maybe<Stories>;
  /** fetch data from the table: "stories_fragments" */
  stories_fragments: Array<Stories_Fragments>;
  /** fetch aggregated fields from the table: "stories_fragments" */
  stories_fragments_aggregate: Stories_Fragments_Aggregate;
  /** fetch data from the table: "stories_fragments" using primary key columns */
  stories_fragments_by_pk?: Maybe<Stories_Fragments>;
  /** fetch data from the table: "stories_tags" */
  stories_tags: Array<Stories_Tags>;
  /** fetch aggregated fields from the table: "stories_tags" */
  stories_tags_aggregate: Stories_Tags_Aggregate;
  /** fetch data from the table: "stories_tags" using primary key columns */
  stories_tags_by_pk?: Maybe<Stories_Tags>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
};


/** query root */
export type Query_RootFragmentsArgs = {
  distinct_on?: Maybe<Array<Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fragments_Order_By>>;
  where?: Maybe<Fragments_Bool_Exp>;
};


/** query root */
export type Query_RootFragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fragments_Order_By>>;
  where?: Maybe<Fragments_Bool_Exp>;
};


/** query root */
export type Query_RootFragments_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootPrivate_FragmentsArgs = {
  distinct_on?: Maybe<Array<Private_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Fragments_Order_By>>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};


/** query root */
export type Query_RootPrivate_Fragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Private_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Fragments_Order_By>>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};


/** query root */
export type Query_RootPrivate_Fragments_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootPrivate_StoriesArgs = {
  distinct_on?: Maybe<Array<Private_Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Stories_Order_By>>;
  where?: Maybe<Private_Stories_Bool_Exp>;
};


/** query root */
export type Query_RootPrivate_Stories_AggregateArgs = {
  distinct_on?: Maybe<Array<Private_Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Stories_Order_By>>;
  where?: Maybe<Private_Stories_Bool_Exp>;
};


/** query root */
export type Query_RootPrivate_Stories_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootStoriesArgs = {
  distinct_on?: Maybe<Array<Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Order_By>>;
  where?: Maybe<Stories_Bool_Exp>;
};


/** query root */
export type Query_RootStories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Order_By>>;
  where?: Maybe<Stories_Bool_Exp>;
};


/** query root */
export type Query_RootStories_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootStories_FragmentsArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** query root */
export type Query_RootStories_Fragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** query root */
export type Query_RootStories_Fragments_By_PkArgs = {
  fragment_id: Scalars['String'];
  story_id: Scalars['String'];
};


/** query root */
export type Query_RootStories_TagsArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};


/** query root */
export type Query_RootStories_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};


/** query root */
export type Query_RootStories_Tags_By_PkArgs = {
  story_id: Scalars['String'];
  tag: Scalars['String'];
};


/** query root */
export type Query_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** query root */
export type Query_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** query root */
export type Query_RootTags_By_PkArgs = {
  name: Scalars['String'];
};

/** columns and relationships of "stories" */
export type Stories = {
   __typename?: 'stories';
  char_limit: Scalars['Int'];
  created_on: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An array relationship */
  fragments: Array<Stories_Fragments>;
  /** An aggregated array relationship */
  fragments_aggregate: Stories_Fragments_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  tags: Array<Stories_Tags>;
  /** An aggregated array relationship */
  tags_aggregate: Stories_Tags_Aggregate;
  title: Scalars['String'];
};


/** columns and relationships of "stories" */
export type StoriesFragmentsArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** columns and relationships of "stories" */
export type StoriesFragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** columns and relationships of "stories" */
export type StoriesTagsArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};


/** columns and relationships of "stories" */
export type StoriesTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};

/** aggregated selection of "stories" */
export type Stories_Aggregate = {
   __typename?: 'stories_aggregate';
  aggregate?: Maybe<Stories_Aggregate_Fields>;
  nodes: Array<Stories>;
};

/** aggregate fields of "stories" */
export type Stories_Aggregate_Fields = {
   __typename?: 'stories_aggregate_fields';
  avg?: Maybe<Stories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stories_Max_Fields>;
  min?: Maybe<Stories_Min_Fields>;
  stddev?: Maybe<Stories_Stddev_Fields>;
  stddev_pop?: Maybe<Stories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stories_Stddev_Samp_Fields>;
  sum?: Maybe<Stories_Sum_Fields>;
  var_pop?: Maybe<Stories_Var_Pop_Fields>;
  var_samp?: Maybe<Stories_Var_Samp_Fields>;
  variance?: Maybe<Stories_Variance_Fields>;
};


/** aggregate fields of "stories" */
export type Stories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stories_Avg_Fields = {
   __typename?: 'stories_avg_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "stories_fragments" */
export type Stories_Fragments = {
   __typename?: 'stories_fragments';
  /** An object relationship */
  fragment: Fragments;
  fragment_id: Scalars['String'];
  /** An object relationship */
  story: Stories;
  story_id: Scalars['String'];
};

/** aggregated selection of "stories_fragments" */
export type Stories_Fragments_Aggregate = {
   __typename?: 'stories_fragments_aggregate';
  aggregate?: Maybe<Stories_Fragments_Aggregate_Fields>;
  nodes: Array<Stories_Fragments>;
};

/** aggregate fields of "stories_fragments" */
export type Stories_Fragments_Aggregate_Fields = {
   __typename?: 'stories_fragments_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stories_Fragments_Max_Fields>;
  min?: Maybe<Stories_Fragments_Min_Fields>;
};


/** aggregate fields of "stories_fragments" */
export type Stories_Fragments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stories_Fragments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Stories_Fragments_Max_Fields = {
   __typename?: 'stories_fragments_max_fields';
  fragment_id?: Maybe<Scalars['String']>;
  story_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stories_Fragments_Min_Fields = {
   __typename?: 'stories_fragments_min_fields';
  fragment_id?: Maybe<Scalars['String']>;
  story_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stories_fragments" */
export type Stories_Fragments_Mutation_Response = {
   __typename?: 'stories_fragments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stories_Fragments>;
};

/** aggregate max on columns */
export type Stories_Max_Fields = {
   __typename?: 'stories_max_fields';
  char_limit?: Maybe<Scalars['Int']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stories_Min_Fields = {
   __typename?: 'stories_min_fields';
  char_limit?: Maybe<Scalars['Int']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stories" */
export type Stories_Mutation_Response = {
   __typename?: 'stories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stories>;
};

/** aggregate stddev on columns */
export type Stories_Stddev_Fields = {
   __typename?: 'stories_stddev_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stories_Stddev_Pop_Fields = {
   __typename?: 'stories_stddev_pop_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stories_Stddev_Samp_Fields = {
   __typename?: 'stories_stddev_samp_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stories_Sum_Fields = {
   __typename?: 'stories_sum_fields';
  char_limit?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "stories_tags" */
export type Stories_Tags = {
   __typename?: 'stories_tags';
  /** An object relationship */
  story: Stories;
  story_id: Scalars['String'];
  tag: Scalars['String'];
  /** An object relationship */
  tagByTag: Tags;
};

/** aggregated selection of "stories_tags" */
export type Stories_Tags_Aggregate = {
   __typename?: 'stories_tags_aggregate';
  aggregate?: Maybe<Stories_Tags_Aggregate_Fields>;
  nodes: Array<Stories_Tags>;
};

/** aggregate fields of "stories_tags" */
export type Stories_Tags_Aggregate_Fields = {
   __typename?: 'stories_tags_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stories_Tags_Max_Fields>;
  min?: Maybe<Stories_Tags_Min_Fields>;
};


/** aggregate fields of "stories_tags" */
export type Stories_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stories_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Stories_Tags_Max_Fields = {
   __typename?: 'stories_tags_max_fields';
  story_id?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stories_Tags_Min_Fields = {
   __typename?: 'stories_tags_min_fields';
  story_id?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stories_tags" */
export type Stories_Tags_Mutation_Response = {
   __typename?: 'stories_tags_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stories_Tags>;
};

/** aggregate var_pop on columns */
export type Stories_Var_Pop_Fields = {
   __typename?: 'stories_var_pop_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stories_Var_Samp_Fields = {
   __typename?: 'stories_var_samp_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stories_Variance_Fields = {
   __typename?: 'stories_variance_fields';
  char_limit?: Maybe<Scalars['Float']>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "fragments" */
  fragments: Array<Fragments>;
  /** fetch aggregated fields from the table: "fragments" */
  fragments_aggregate: Fragments_Aggregate;
  /** fetch data from the table: "fragments" using primary key columns */
  fragments_by_pk?: Maybe<Fragments>;
  /** fetch data from the table: "private_fragments" */
  private_fragments: Array<Private_Fragments>;
  /** fetch aggregated fields from the table: "private_fragments" */
  private_fragments_aggregate: Private_Fragments_Aggregate;
  /** fetch data from the table: "private_fragments" using primary key columns */
  private_fragments_by_pk?: Maybe<Private_Fragments>;
  /** fetch data from the table: "private_stories" */
  private_stories: Array<Private_Stories>;
  /** fetch aggregated fields from the table: "private_stories" */
  private_stories_aggregate: Private_Stories_Aggregate;
  /** fetch data from the table: "private_stories" using primary key columns */
  private_stories_by_pk?: Maybe<Private_Stories>;
  /** fetch data from the table: "stories" */
  stories: Array<Stories>;
  /** fetch aggregated fields from the table: "stories" */
  stories_aggregate: Stories_Aggregate;
  /** fetch data from the table: "stories" using primary key columns */
  stories_by_pk?: Maybe<Stories>;
  /** fetch data from the table: "stories_fragments" */
  stories_fragments: Array<Stories_Fragments>;
  /** fetch aggregated fields from the table: "stories_fragments" */
  stories_fragments_aggregate: Stories_Fragments_Aggregate;
  /** fetch data from the table: "stories_fragments" using primary key columns */
  stories_fragments_by_pk?: Maybe<Stories_Fragments>;
  /** fetch data from the table: "stories_tags" */
  stories_tags: Array<Stories_Tags>;
  /** fetch aggregated fields from the table: "stories_tags" */
  stories_tags_aggregate: Stories_Tags_Aggregate;
  /** fetch data from the table: "stories_tags" using primary key columns */
  stories_tags_by_pk?: Maybe<Stories_Tags>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
};


/** subscription root */
export type Subscription_RootFragmentsArgs = {
  distinct_on?: Maybe<Array<Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fragments_Order_By>>;
  where?: Maybe<Fragments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fragments_Order_By>>;
  where?: Maybe<Fragments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFragments_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPrivate_FragmentsArgs = {
  distinct_on?: Maybe<Array<Private_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Fragments_Order_By>>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrivate_Fragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Private_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Fragments_Order_By>>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrivate_Fragments_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPrivate_StoriesArgs = {
  distinct_on?: Maybe<Array<Private_Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Stories_Order_By>>;
  where?: Maybe<Private_Stories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrivate_Stories_AggregateArgs = {
  distinct_on?: Maybe<Array<Private_Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Private_Stories_Order_By>>;
  where?: Maybe<Private_Stories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrivate_Stories_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootStoriesArgs = {
  distinct_on?: Maybe<Array<Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Order_By>>;
  where?: Maybe<Stories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Order_By>>;
  where?: Maybe<Stories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStories_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootStories_FragmentsArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStories_Fragments_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Fragments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Fragments_Order_By>>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStories_Fragments_By_PkArgs = {
  fragment_id: Scalars['String'];
  story_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootStories_TagsArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStories_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStories_Tags_By_PkArgs = {
  story_id: Scalars['String'];
  tag: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTags_By_PkArgs = {
  name: Scalars['String'];
};

/** columns and relationships of "tags" */
export type Tags = {
   __typename?: 'tags';
  name: Scalars['String'];
  /** An array relationship */
  stories: Array<Stories_Tags>;
  /** An aggregated array relationship */
  stories_aggregate: Stories_Tags_Aggregate;
};


/** columns and relationships of "tags" */
export type TagsStoriesArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsStories_AggregateArgs = {
  distinct_on?: Maybe<Array<Stories_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stories_Tags_Order_By>>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
   __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
   __typename?: 'tags_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
   __typename?: 'tags_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
   __typename?: 'tags_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
   __typename?: 'tags_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tags>;
};

/** unique or primary key constraints on table "fragments" */
export enum Fragments_Constraint {
  /** unique or primary key constraint */
  FragmentsPkey = 'fragments_pkey'
}

/** select columns of table "fragments" */
export enum Fragments_Select_Column {
  /** column name */
  Branched = 'branched',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Id = 'id'
}

/** update columns of table "fragments" */
export enum Fragments_Update_Column {
  /** column name */
  Branched = 'branched',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Id = 'id'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "private_fragments" */
export enum Private_Fragments_Constraint {
  /** unique or primary key constraint */
  PrivateFragmentsPkey = 'private_fragments_pkey'
}

/** select columns of table "private_fragments" */
export enum Private_Fragments_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Id = 'id',
  /** column name */
  StoryId = 'story_id'
}

/** update columns of table "private_fragments" */
export enum Private_Fragments_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Id = 'id',
  /** column name */
  StoryId = 'story_id'
}

/** unique or primary key constraints on table "private_stories" */
export enum Private_Stories_Constraint {
  /** unique or primary key constraint */
  PrivateStoriesCookieKey = 'private_stories_cookie_key',
  /** unique or primary key constraint */
  PrivateStoriesHashKey = 'private_stories_hash_key',
  /** unique or primary key constraint */
  PrivateStoriesPkey = 'private_stories_pkey'
}

/** select columns of table "private_stories" */
export enum Private_Stories_Select_Column {
  /** column name */
  CharLimit = 'char_limit',
  /** column name */
  Cookie = 'cookie',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Description = 'description',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Salt = 'salt',
  /** column name */
  Title = 'title'
}

/** update columns of table "private_stories" */
export enum Private_Stories_Update_Column {
  /** column name */
  CharLimit = 'char_limit',
  /** column name */
  Cookie = 'cookie',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Description = 'description',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Salt = 'salt',
  /** column name */
  Title = 'title'
}

/** unique or primary key constraints on table "stories" */
export enum Stories_Constraint {
  /** unique or primary key constraint */
  StoriesPkey = 'stories_pkey'
}

/** unique or primary key constraints on table "stories_fragments" */
export enum Stories_Fragments_Constraint {
  /** unique or primary key constraint */
  StoriesFragmentsPkey = 'stories_fragments_pkey'
}

/** select columns of table "stories_fragments" */
export enum Stories_Fragments_Select_Column {
  /** column name */
  FragmentId = 'fragment_id',
  /** column name */
  StoryId = 'story_id'
}

/** update columns of table "stories_fragments" */
export enum Stories_Fragments_Update_Column {
  /** column name */
  FragmentId = 'fragment_id',
  /** column name */
  StoryId = 'story_id'
}

/** select columns of table "stories" */
export enum Stories_Select_Column {
  /** column name */
  CharLimit = 'char_limit',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** unique or primary key constraints on table "stories_tags" */
export enum Stories_Tags_Constraint {
  /** unique or primary key constraint */
  StoriesTagsPkey = 'stories_tags_pkey'
}

/** select columns of table "stories_tags" */
export enum Stories_Tags_Select_Column {
  /** column name */
  StoryId = 'story_id',
  /** column name */
  Tag = 'tag'
}

/** update columns of table "stories_tags" */
export enum Stories_Tags_Update_Column {
  /** column name */
  StoryId = 'story_id',
  /** column name */
  Tag = 'tag'
}

/** update columns of table "stories" */
export enum Stories_Update_Column {
  /** column name */
  CharLimit = 'char_limit',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TabsPkey = 'tabs_pkey'
}

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Name = 'name'
}

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "fragments" */
export type Fragments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Fragments_Max_Order_By>;
  min?: Maybe<Fragments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "fragments" */
export type Fragments_Arr_Rel_Insert_Input = {
  data: Array<Fragments_Insert_Input>;
  on_conflict?: Maybe<Fragments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "fragments". All fields are combined with a logical 'AND'. */
export type Fragments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Fragments_Bool_Exp>>>;
  _not?: Maybe<Fragments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Fragments_Bool_Exp>>>;
  branched?: Maybe<Boolean_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_on?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  stories?: Maybe<Stories_Fragments_Bool_Exp>;
};

/** input type for inserting data into table "fragments" */
export type Fragments_Insert_Input = {
  branched?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  stories?: Maybe<Stories_Fragments_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "fragments" */
export type Fragments_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by min() on columns of table "fragments" */
export type Fragments_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "fragments" */
export type Fragments_Obj_Rel_Insert_Input = {
  data: Fragments_Insert_Input;
  on_conflict?: Maybe<Fragments_On_Conflict>;
};

/** on conflict condition type for table "fragments" */
export type Fragments_On_Conflict = {
  constraint: Fragments_Constraint;
  update_columns: Array<Fragments_Update_Column>;
  where?: Maybe<Fragments_Bool_Exp>;
};

/** ordering options when selecting data from "fragments" */
export type Fragments_Order_By = {
  branched?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stories_aggregate?: Maybe<Stories_Fragments_Aggregate_Order_By>;
};

/** primary key columns input for table: "fragments" */
export type Fragments_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "fragments" */
export type Fragments_Set_Input = {
  branched?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "private_fragments" */
export type Private_Fragments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Private_Fragments_Max_Order_By>;
  min?: Maybe<Private_Fragments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "private_fragments" */
export type Private_Fragments_Arr_Rel_Insert_Input = {
  data: Array<Private_Fragments_Insert_Input>;
  on_conflict?: Maybe<Private_Fragments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "private_fragments". All fields are combined with a logical 'AND'. */
export type Private_Fragments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Private_Fragments_Bool_Exp>>>;
  _not?: Maybe<Private_Fragments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Private_Fragments_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  created_on?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  story?: Maybe<Private_Stories_Bool_Exp>;
  story_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "private_fragments" */
export type Private_Fragments_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  story?: Maybe<Private_Stories_Obj_Rel_Insert_Input>;
  story_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "private_fragments" */
export type Private_Fragments_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  story_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "private_fragments" */
export type Private_Fragments_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  story_id?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "private_fragments" */
export type Private_Fragments_Obj_Rel_Insert_Input = {
  data: Private_Fragments_Insert_Input;
  on_conflict?: Maybe<Private_Fragments_On_Conflict>;
};

/** on conflict condition type for table "private_fragments" */
export type Private_Fragments_On_Conflict = {
  constraint: Private_Fragments_Constraint;
  update_columns: Array<Private_Fragments_Update_Column>;
  where?: Maybe<Private_Fragments_Bool_Exp>;
};

/** ordering options when selecting data from "private_fragments" */
export type Private_Fragments_Order_By = {
  content?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  story?: Maybe<Private_Stories_Order_By>;
  story_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "private_fragments" */
export type Private_Fragments_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "private_fragments" */
export type Private_Fragments_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  story_id?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "private_stories" */
export type Private_Stories_Aggregate_Order_By = {
  avg?: Maybe<Private_Stories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Private_Stories_Max_Order_By>;
  min?: Maybe<Private_Stories_Min_Order_By>;
  stddev?: Maybe<Private_Stories_Stddev_Order_By>;
  stddev_pop?: Maybe<Private_Stories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Private_Stories_Stddev_Samp_Order_By>;
  sum?: Maybe<Private_Stories_Sum_Order_By>;
  var_pop?: Maybe<Private_Stories_Var_Pop_Order_By>;
  var_samp?: Maybe<Private_Stories_Var_Samp_Order_By>;
  variance?: Maybe<Private_Stories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "private_stories" */
export type Private_Stories_Arr_Rel_Insert_Input = {
  data: Array<Private_Stories_Insert_Input>;
  on_conflict?: Maybe<Private_Stories_On_Conflict>;
};

/** order by avg() on columns of table "private_stories" */
export type Private_Stories_Avg_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "private_stories". All fields are combined with a logical 'AND'. */
export type Private_Stories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Private_Stories_Bool_Exp>>>;
  _not?: Maybe<Private_Stories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Private_Stories_Bool_Exp>>>;
  char_limit?: Maybe<Int_Comparison_Exp>;
  cookie?: Maybe<String_Comparison_Exp>;
  created_on?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  fragments?: Maybe<Private_Fragments_Bool_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  salt?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing integer column in table "private_stories" */
export type Private_Stories_Inc_Input = {
  char_limit?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "private_stories" */
export type Private_Stories_Insert_Input = {
  char_limit?: Maybe<Scalars['Int']>;
  cookie?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fragments?: Maybe<Private_Fragments_Arr_Rel_Insert_Input>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "private_stories" */
export type Private_Stories_Max_Order_By = {
  char_limit?: Maybe<Order_By>;
  cookie?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** order by min() on columns of table "private_stories" */
export type Private_Stories_Min_Order_By = {
  char_limit?: Maybe<Order_By>;
  cookie?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "private_stories" */
export type Private_Stories_Obj_Rel_Insert_Input = {
  data: Private_Stories_Insert_Input;
  on_conflict?: Maybe<Private_Stories_On_Conflict>;
};

/** on conflict condition type for table "private_stories" */
export type Private_Stories_On_Conflict = {
  constraint: Private_Stories_Constraint;
  update_columns: Array<Private_Stories_Update_Column>;
  where?: Maybe<Private_Stories_Bool_Exp>;
};

/** ordering options when selecting data from "private_stories" */
export type Private_Stories_Order_By = {
  char_limit?: Maybe<Order_By>;
  cookie?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fragments_aggregate?: Maybe<Private_Fragments_Aggregate_Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "private_stories" */
export type Private_Stories_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "private_stories" */
export type Private_Stories_Set_Input = {
  char_limit?: Maybe<Scalars['Int']>;
  cookie?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "private_stories" */
export type Private_Stories_Stddev_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "private_stories" */
export type Private_Stories_Stddev_Pop_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "private_stories" */
export type Private_Stories_Stddev_Samp_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by sum() on columns of table "private_stories" */
export type Private_Stories_Sum_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "private_stories" */
export type Private_Stories_Var_Pop_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "private_stories" */
export type Private_Stories_Var_Samp_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by variance() on columns of table "private_stories" */
export type Private_Stories_Variance_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by aggregate values of table "stories" */
export type Stories_Aggregate_Order_By = {
  avg?: Maybe<Stories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stories_Max_Order_By>;
  min?: Maybe<Stories_Min_Order_By>;
  stddev?: Maybe<Stories_Stddev_Order_By>;
  stddev_pop?: Maybe<Stories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stories_Stddev_Samp_Order_By>;
  sum?: Maybe<Stories_Sum_Order_By>;
  var_pop?: Maybe<Stories_Var_Pop_Order_By>;
  var_samp?: Maybe<Stories_Var_Samp_Order_By>;
  variance?: Maybe<Stories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stories" */
export type Stories_Arr_Rel_Insert_Input = {
  data: Array<Stories_Insert_Input>;
  on_conflict?: Maybe<Stories_On_Conflict>;
};

/** order by avg() on columns of table "stories" */
export type Stories_Avg_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stories". All fields are combined with a logical 'AND'. */
export type Stories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stories_Bool_Exp>>>;
  _not?: Maybe<Stories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stories_Bool_Exp>>>;
  char_limit?: Maybe<Int_Comparison_Exp>;
  created_on?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  fragments?: Maybe<Stories_Fragments_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  tags?: Maybe<Stories_Tags_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** order by aggregate values of table "stories_fragments" */
export type Stories_Fragments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stories_Fragments_Max_Order_By>;
  min?: Maybe<Stories_Fragments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stories_fragments" */
export type Stories_Fragments_Arr_Rel_Insert_Input = {
  data: Array<Stories_Fragments_Insert_Input>;
  on_conflict?: Maybe<Stories_Fragments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stories_fragments". All fields are combined with a logical 'AND'. */
export type Stories_Fragments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stories_Fragments_Bool_Exp>>>;
  _not?: Maybe<Stories_Fragments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stories_Fragments_Bool_Exp>>>;
  fragment?: Maybe<Fragments_Bool_Exp>;
  fragment_id?: Maybe<String_Comparison_Exp>;
  story?: Maybe<Stories_Bool_Exp>;
  story_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "stories_fragments" */
export type Stories_Fragments_Insert_Input = {
  fragment?: Maybe<Fragments_Obj_Rel_Insert_Input>;
  fragment_id?: Maybe<Scalars['String']>;
  story?: Maybe<Stories_Obj_Rel_Insert_Input>;
  story_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stories_fragments" */
export type Stories_Fragments_Max_Order_By = {
  fragment_id?: Maybe<Order_By>;
  story_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "stories_fragments" */
export type Stories_Fragments_Min_Order_By = {
  fragment_id?: Maybe<Order_By>;
  story_id?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "stories_fragments" */
export type Stories_Fragments_Obj_Rel_Insert_Input = {
  data: Stories_Fragments_Insert_Input;
  on_conflict?: Maybe<Stories_Fragments_On_Conflict>;
};

/** on conflict condition type for table "stories_fragments" */
export type Stories_Fragments_On_Conflict = {
  constraint: Stories_Fragments_Constraint;
  update_columns: Array<Stories_Fragments_Update_Column>;
  where?: Maybe<Stories_Fragments_Bool_Exp>;
};

/** ordering options when selecting data from "stories_fragments" */
export type Stories_Fragments_Order_By = {
  fragment?: Maybe<Fragments_Order_By>;
  fragment_id?: Maybe<Order_By>;
  story?: Maybe<Stories_Order_By>;
  story_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "stories_fragments" */
export type Stories_Fragments_Pk_Columns_Input = {
  fragment_id: Scalars['String'];
  story_id: Scalars['String'];
};

/** input type for updating data in table "stories_fragments" */
export type Stories_Fragments_Set_Input = {
  fragment_id?: Maybe<Scalars['String']>;
  story_id?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "stories" */
export type Stories_Inc_Input = {
  char_limit?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "stories" */
export type Stories_Insert_Input = {
  char_limit?: Maybe<Scalars['Int']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fragments?: Maybe<Stories_Fragments_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  tags?: Maybe<Stories_Tags_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stories" */
export type Stories_Max_Order_By = {
  char_limit?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** order by min() on columns of table "stories" */
export type Stories_Min_Order_By = {
  char_limit?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "stories" */
export type Stories_Obj_Rel_Insert_Input = {
  data: Stories_Insert_Input;
  on_conflict?: Maybe<Stories_On_Conflict>;
};

/** on conflict condition type for table "stories" */
export type Stories_On_Conflict = {
  constraint: Stories_Constraint;
  update_columns: Array<Stories_Update_Column>;
  where?: Maybe<Stories_Bool_Exp>;
};

/** ordering options when selecting data from "stories" */
export type Stories_Order_By = {
  char_limit?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fragments_aggregate?: Maybe<Stories_Fragments_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  tags_aggregate?: Maybe<Stories_Tags_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "stories" */
export type Stories_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "stories" */
export type Stories_Set_Input = {
  char_limit?: Maybe<Scalars['Int']>;
  created_on?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "stories" */
export type Stories_Stddev_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "stories" */
export type Stories_Stddev_Pop_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "stories" */
export type Stories_Stddev_Samp_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by sum() on columns of table "stories" */
export type Stories_Sum_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by aggregate values of table "stories_tags" */
export type Stories_Tags_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stories_Tags_Max_Order_By>;
  min?: Maybe<Stories_Tags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stories_tags" */
export type Stories_Tags_Arr_Rel_Insert_Input = {
  data: Array<Stories_Tags_Insert_Input>;
  on_conflict?: Maybe<Stories_Tags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stories_tags". All fields are combined with a logical 'AND'. */
export type Stories_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stories_Tags_Bool_Exp>>>;
  _not?: Maybe<Stories_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stories_Tags_Bool_Exp>>>;
  story?: Maybe<Stories_Bool_Exp>;
  story_id?: Maybe<String_Comparison_Exp>;
  tag?: Maybe<String_Comparison_Exp>;
  tagByTag?: Maybe<Tags_Bool_Exp>;
};

/** input type for inserting data into table "stories_tags" */
export type Stories_Tags_Insert_Input = {
  story?: Maybe<Stories_Obj_Rel_Insert_Input>;
  story_id?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  tagByTag?: Maybe<Tags_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "stories_tags" */
export type Stories_Tags_Max_Order_By = {
  story_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** order by min() on columns of table "stories_tags" */
export type Stories_Tags_Min_Order_By = {
  story_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "stories_tags" */
export type Stories_Tags_Obj_Rel_Insert_Input = {
  data: Stories_Tags_Insert_Input;
  on_conflict?: Maybe<Stories_Tags_On_Conflict>;
};

/** on conflict condition type for table "stories_tags" */
export type Stories_Tags_On_Conflict = {
  constraint: Stories_Tags_Constraint;
  update_columns: Array<Stories_Tags_Update_Column>;
  where?: Maybe<Stories_Tags_Bool_Exp>;
};

/** ordering options when selecting data from "stories_tags" */
export type Stories_Tags_Order_By = {
  story?: Maybe<Stories_Order_By>;
  story_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
  tagByTag?: Maybe<Tags_Order_By>;
};

/** primary key columns input for table: "stories_tags" */
export type Stories_Tags_Pk_Columns_Input = {
  story_id: Scalars['String'];
  tag: Scalars['String'];
};

/** input type for updating data in table "stories_tags" */
export type Stories_Tags_Set_Input = {
  story_id?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

/** order by var_pop() on columns of table "stories" */
export type Stories_Var_Pop_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "stories" */
export type Stories_Var_Samp_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by variance() on columns of table "stories" */
export type Stories_Variance_Order_By = {
  char_limit?: Maybe<Order_By>;
};

/** order by aggregate values of table "tags" */
export type Tags_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tags_Max_Order_By>;
  min?: Maybe<Tags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tags" */
export type Tags_Arr_Rel_Insert_Input = {
  data: Array<Tags_Insert_Input>;
  on_conflict?: Maybe<Tags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tags_Bool_Exp>>>;
  _not?: Maybe<Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tags_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  stories?: Maybe<Stories_Tags_Bool_Exp>;
};

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  stories?: Maybe<Stories_Tags_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "tags" */
export type Tags_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** order by min() on columns of table "tags" */
export type Tags_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  on_conflict?: Maybe<Tags_On_Conflict>;
};

/** on conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns: Array<Tags_Update_Column>;
  where?: Maybe<Tags_Bool_Exp>;
};

/** ordering options when selecting data from "tags" */
export type Tags_Order_By = {
  name?: Maybe<Order_By>;
  stories_aggregate?: Maybe<Stories_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: "tags" */
export type Tags_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


export type GetRefQueryVariables = {};


export type GetRefQuery = (
  { __typename?: 'query_root' }
  & { stories: Array<(
    { __typename?: 'stories' }
    & Pick<Stories, 'id'>
  )> }
);


export const GetRefDocument = gql`
    query getRef {
  stories(limit: 1) {
    id
  }
}
    `;

/**
 * __useGetRefQuery__
 *
 * To run a query within a React component, call `useGetRefQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRefQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRefQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRefQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRefQuery, GetRefQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRefQuery, GetRefQueryVariables>(GetRefDocument, baseOptions);
      }
export function useGetRefLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRefQuery, GetRefQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRefQuery, GetRefQueryVariables>(GetRefDocument, baseOptions);
        }
export type GetRefQueryHookResult = ReturnType<typeof useGetRefQuery>;
export type GetRefLazyQueryHookResult = ReturnType<typeof useGetRefLazyQuery>;
export type GetRefQueryResult = ApolloReactCommon.QueryResult<GetRefQuery, GetRefQueryVariables>;