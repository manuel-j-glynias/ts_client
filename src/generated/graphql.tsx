import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
};










/** Filter Input Type for Author */
export type _AuthorFilter = {
  /** AND */
  AND?: Maybe<Array<_AuthorFilter>>;
  /** OR */
  OR?: Maybe<Array<_AuthorFilter>>;
  /** first_initial */
  first_initial?: Maybe<Scalars['String']>;
  /** first_initial_contains */
  first_initial_contains?: Maybe<Scalars['String']>;
  /** first_initial_ends_with */
  first_initial_ends_with?: Maybe<Scalars['String']>;
  /** first_initial_gt */
  first_initial_gt?: Maybe<Scalars['String']>;
  /** first_initial_gte */
  first_initial_gte?: Maybe<Scalars['String']>;
  /** first_initial_in */
  first_initial_in?: Maybe<Array<Scalars['String']>>;
  /** first_initial_lt */
  first_initial_lt?: Maybe<Scalars['String']>;
  /** first_initial_lte */
  first_initial_lte?: Maybe<Scalars['String']>;
  /** first_initial_not */
  first_initial_not?: Maybe<Scalars['String']>;
  /** first_initial_not_contains */
  first_initial_not_contains?: Maybe<Scalars['String']>;
  /** first_initial_not_ends_with */
  first_initial_not_ends_with?: Maybe<Scalars['String']>;
  /** first_initial_not_in */
  first_initial_not_in?: Maybe<Array<Scalars['String']>>;
  /** first_initial_not_starts_with */
  first_initial_not_starts_with?: Maybe<Scalars['String']>;
  /** first_initial_starts_with */
  first_initial_starts_with?: Maybe<Scalars['String']>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** middle_initial */
  middle_initial?: Maybe<Scalars['String']>;
  /** middle_initial_contains */
  middle_initial_contains?: Maybe<Scalars['String']>;
  /** middle_initial_ends_with */
  middle_initial_ends_with?: Maybe<Scalars['String']>;
  /** middle_initial_gt */
  middle_initial_gt?: Maybe<Scalars['String']>;
  /** middle_initial_gte */
  middle_initial_gte?: Maybe<Scalars['String']>;
  /** middle_initial_in */
  middle_initial_in?: Maybe<Array<Scalars['String']>>;
  /** middle_initial_lt */
  middle_initial_lt?: Maybe<Scalars['String']>;
  /** middle_initial_lte */
  middle_initial_lte?: Maybe<Scalars['String']>;
  /** middle_initial_not */
  middle_initial_not?: Maybe<Scalars['String']>;
  /** middle_initial_not_contains */
  middle_initial_not_contains?: Maybe<Scalars['String']>;
  /** middle_initial_not_ends_with */
  middle_initial_not_ends_with?: Maybe<Scalars['String']>;
  /** middle_initial_not_in */
  middle_initial_not_in?: Maybe<Array<Scalars['String']>>;
  /** middle_initial_not_starts_with */
  middle_initial_not_starts_with?: Maybe<Scalars['String']>;
  /** middle_initial_starts_with */
  middle_initial_starts_with?: Maybe<Scalars['String']>;
  /** references */
  references?: Maybe<_LiteratureReferenceFilter>;
  /** references_every */
  references_every?: Maybe<_LiteratureReferenceFilter>;
  /** references_in */
  references_in?: Maybe<_LiteratureReferenceFilter>;
  /** references_none */
  references_none?: Maybe<_LiteratureReferenceFilter>;
  /** references_not */
  references_not?: Maybe<_LiteratureReferenceFilter>;
  /** references_not_in */
  references_not_in?: Maybe<_LiteratureReferenceFilter>;
  /** references_single */
  references_single?: Maybe<_LiteratureReferenceFilter>;
  /** references_some */
  references_some?: Maybe<_LiteratureReferenceFilter>;
  /** surname */
  surname?: Maybe<Scalars['String']>;
  /** surname_contains */
  surname_contains?: Maybe<Scalars['String']>;
  /** surname_ends_with */
  surname_ends_with?: Maybe<Scalars['String']>;
  /** surname_gt */
  surname_gt?: Maybe<Scalars['String']>;
  /** surname_gte */
  surname_gte?: Maybe<Scalars['String']>;
  /** surname_in */
  surname_in?: Maybe<Array<Scalars['String']>>;
  /** surname_lt */
  surname_lt?: Maybe<Scalars['String']>;
  /** surname_lte */
  surname_lte?: Maybe<Scalars['String']>;
  /** surname_not */
  surname_not?: Maybe<Scalars['String']>;
  /** surname_not_contains */
  surname_not_contains?: Maybe<Scalars['String']>;
  /** surname_not_ends_with */
  surname_not_ends_with?: Maybe<Scalars['String']>;
  /** surname_not_in */
  surname_not_in?: Maybe<Array<Scalars['String']>>;
  /** surname_not_starts_with */
  surname_not_starts_with?: Maybe<Scalars['String']>;
  /** surname_starts_with */
  surname_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for Author */
export enum _AuthorOrdering {
  /** Ascending sort for first_initial */
  FirstInitialAsc = 'first_initial_asc',
  /** Descending sort for first_initial */
  FirstInitialDesc = 'first_initial_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for middle_initial */
  MiddleInitialAsc = 'middle_initial_asc',
  /** Descending sort for middle_initial */
  MiddleInitialDesc = 'middle_initial_desc',
  /** Ascending sort for surname */
  SurnameAsc = 'surname_asc',
  /** Descending sort for surname */
  SurnameDesc = 'surname_desc'
}

/** Filter Input Type for Drug */
export type _DrugFilter = {
  /** AND */
  AND?: Maybe<Array<_DrugFilter>>;
  /** OR */
  OR?: Maybe<Array<_DrugFilter>>;
  /** annotationDate */
  annotationDate?: Maybe<Scalars['String']>;
  /** annotationDate_contains */
  annotationDate_contains?: Maybe<Scalars['String']>;
  /** annotationDate_ends_with */
  annotationDate_ends_with?: Maybe<Scalars['String']>;
  /** annotationDate_gt */
  annotationDate_gt?: Maybe<Scalars['String']>;
  /** annotationDate_gte */
  annotationDate_gte?: Maybe<Scalars['String']>;
  /** annotationDate_in */
  annotationDate_in?: Maybe<Array<Scalars['String']>>;
  /** annotationDate_lt */
  annotationDate_lt?: Maybe<Scalars['String']>;
  /** annotationDate_lte */
  annotationDate_lte?: Maybe<Scalars['String']>;
  /** annotationDate_not */
  annotationDate_not?: Maybe<Scalars['String']>;
  /** annotationDate_not_contains */
  annotationDate_not_contains?: Maybe<Scalars['String']>;
  /** annotationDate_not_ends_with */
  annotationDate_not_ends_with?: Maybe<Scalars['String']>;
  /** annotationDate_not_in */
  annotationDate_not_in?: Maybe<Array<Scalars['String']>>;
  /** annotationDate_not_starts_with */
  annotationDate_not_starts_with?: Maybe<Scalars['String']>;
  /** annotationDate_starts_with */
  annotationDate_starts_with?: Maybe<Scalars['String']>;
  /** concept */
  concept?: Maybe<Scalars['String']>;
  /** concept_contains */
  concept_contains?: Maybe<Scalars['String']>;
  /** concept_ends_with */
  concept_ends_with?: Maybe<Scalars['String']>;
  /** concept_gt */
  concept_gt?: Maybe<Scalars['String']>;
  /** concept_gte */
  concept_gte?: Maybe<Scalars['String']>;
  /** concept_in */
  concept_in?: Maybe<Array<Scalars['String']>>;
  /** concept_lt */
  concept_lt?: Maybe<Scalars['String']>;
  /** concept_lte */
  concept_lte?: Maybe<Scalars['String']>;
  /** concept_not */
  concept_not?: Maybe<Scalars['String']>;
  /** concept_not_contains */
  concept_not_contains?: Maybe<Scalars['String']>;
  /** concept_not_ends_with */
  concept_not_ends_with?: Maybe<Scalars['String']>;
  /** concept_not_in */
  concept_not_in?: Maybe<Array<Scalars['String']>>;
  /** concept_not_starts_with */
  concept_not_starts_with?: Maybe<Scalars['String']>;
  /** concept_starts_with */
  concept_starts_with?: Maybe<Scalars['String']>;
  /** definition */
  definition?: Maybe<Scalars['String']>;
  /** definition_contains */
  definition_contains?: Maybe<Scalars['String']>;
  /** definition_ends_with */
  definition_ends_with?: Maybe<Scalars['String']>;
  /** definition_gt */
  definition_gt?: Maybe<Scalars['String']>;
  /** definition_gte */
  definition_gte?: Maybe<Scalars['String']>;
  /** definition_in */
  definition_in?: Maybe<Array<Scalars['String']>>;
  /** definition_lt */
  definition_lt?: Maybe<Scalars['String']>;
  /** definition_lte */
  definition_lte?: Maybe<Scalars['String']>;
  /** definition_not */
  definition_not?: Maybe<Scalars['String']>;
  /** definition_not_contains */
  definition_not_contains?: Maybe<Scalars['String']>;
  /** definition_not_ends_with */
  definition_not_ends_with?: Maybe<Scalars['String']>;
  /** definition_not_in */
  definition_not_in?: Maybe<Array<Scalars['String']>>;
  /** definition_not_starts_with */
  definition_not_starts_with?: Maybe<Scalars['String']>;
  /** definition_starts_with */
  definition_starts_with?: Maybe<Scalars['String']>;
  /** drugCategory */
  drugCategory?: Maybe<Scalars['String']>;
  /** drugCategory_contains */
  drugCategory_contains?: Maybe<Scalars['String']>;
  /** drugCategory_ends_with */
  drugCategory_ends_with?: Maybe<Scalars['String']>;
  /** drugCategory_gt */
  drugCategory_gt?: Maybe<Scalars['String']>;
  /** drugCategory_gte */
  drugCategory_gte?: Maybe<Scalars['String']>;
  /** drugCategory_in */
  drugCategory_in?: Maybe<Array<Scalars['String']>>;
  /** drugCategory_lt */
  drugCategory_lt?: Maybe<Scalars['String']>;
  /** drugCategory_lte */
  drugCategory_lte?: Maybe<Scalars['String']>;
  /** drugCategory_not */
  drugCategory_not?: Maybe<Scalars['String']>;
  /** drugCategory_not_contains */
  drugCategory_not_contains?: Maybe<Scalars['String']>;
  /** drugCategory_not_ends_with */
  drugCategory_not_ends_with?: Maybe<Scalars['String']>;
  /** drugCategory_not_in */
  drugCategory_not_in?: Maybe<Array<Scalars['String']>>;
  /** drugCategory_not_starts_with */
  drugCategory_not_starts_with?: Maybe<Scalars['String']>;
  /** drugCategory_starts_with */
  drugCategory_starts_with?: Maybe<Scalars['String']>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** isAntineoplastic */
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  /** isAntineoplastic_not */
  isAntineoplastic_not?: Maybe<Scalars['Boolean']>;
  /** isImmuno */
  isImmuno?: Maybe<Scalars['Boolean']>;
  /** isImmuno_not */
  isImmuno_not?: Maybe<Scalars['Boolean']>;
  /** modulator */
  modulator?: Maybe<Scalars['String']>;
  /** modulator_contains */
  modulator_contains?: Maybe<Scalars['String']>;
  /** modulator_ends_with */
  modulator_ends_with?: Maybe<Scalars['String']>;
  /** modulator_gt */
  modulator_gt?: Maybe<Scalars['String']>;
  /** modulator_gte */
  modulator_gte?: Maybe<Scalars['String']>;
  /** modulator_in */
  modulator_in?: Maybe<Array<Scalars['String']>>;
  /** modulator_lt */
  modulator_lt?: Maybe<Scalars['String']>;
  /** modulator_lte */
  modulator_lte?: Maybe<Scalars['String']>;
  /** modulator_not */
  modulator_not?: Maybe<Scalars['String']>;
  /** modulator_not_contains */
  modulator_not_contains?: Maybe<Scalars['String']>;
  /** modulator_not_ends_with */
  modulator_not_ends_with?: Maybe<Scalars['String']>;
  /** modulator_not_in */
  modulator_not_in?: Maybe<Array<Scalars['String']>>;
  /** modulator_not_starts_with */
  modulator_not_starts_with?: Maybe<Scalars['String']>;
  /** modulator_starts_with */
  modulator_starts_with?: Maybe<Scalars['String']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** synonyms */
  synonyms?: Maybe<Scalars['String']>;
  /** synonyms_contains */
  synonyms_contains?: Maybe<Scalars['String']>;
  /** synonyms_ends_with */
  synonyms_ends_with?: Maybe<Scalars['String']>;
  /** synonyms_gt */
  synonyms_gt?: Maybe<Scalars['String']>;
  /** synonyms_gte */
  synonyms_gte?: Maybe<Scalars['String']>;
  /** synonyms_in */
  synonyms_in?: Maybe<Array<Scalars['String']>>;
  /** synonyms_lt */
  synonyms_lt?: Maybe<Scalars['String']>;
  /** synonyms_lte */
  synonyms_lte?: Maybe<Scalars['String']>;
  /** synonyms_not */
  synonyms_not?: Maybe<Scalars['String']>;
  /** synonyms_not_contains */
  synonyms_not_contains?: Maybe<Scalars['String']>;
  /** synonyms_not_ends_with */
  synonyms_not_ends_with?: Maybe<Scalars['String']>;
  /** synonyms_not_in */
  synonyms_not_in?: Maybe<Array<Scalars['String']>>;
  /** synonyms_not_starts_with */
  synonyms_not_starts_with?: Maybe<Scalars['String']>;
  /** synonyms_starts_with */
  synonyms_starts_with?: Maybe<Scalars['String']>;
  /** target */
  target?: Maybe<_TargetFilter>;
  /** target_every */
  target_every?: Maybe<_TargetFilter>;
  /** target_in */
  target_in?: Maybe<_TargetFilter>;
  /** target_none */
  target_none?: Maybe<_TargetFilter>;
  /** target_not */
  target_not?: Maybe<_TargetFilter>;
  /** target_not_in */
  target_not_in?: Maybe<_TargetFilter>;
  /** target_single */
  target_single?: Maybe<_TargetFilter>;
  /** target_some */
  target_some?: Maybe<_TargetFilter>;
};

/** Ordering Enum for Drug */
export enum _DrugOrdering {
  /** Ascending sort for annotationDate */
  AnnotationDateAsc = 'annotationDate_asc',
  /** Descending sort for annotationDate */
  AnnotationDateDesc = 'annotationDate_desc',
  /** Ascending sort for concept */
  ConceptAsc = 'concept_asc',
  /** Descending sort for concept */
  ConceptDesc = 'concept_desc',
  /** Ascending sort for definition */
  DefinitionAsc = 'definition_asc',
  /** Descending sort for definition */
  DefinitionDesc = 'definition_desc',
  /** Ascending sort for drugCategory */
  DrugCategoryAsc = 'drugCategory_asc',
  /** Descending sort for drugCategory */
  DrugCategoryDesc = 'drugCategory_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for isAntineoplastic */
  IsAntineoplasticAsc = 'isAntineoplastic_asc',
  /** Descending sort for isAntineoplastic */
  IsAntineoplasticDesc = 'isAntineoplastic_desc',
  /** Ascending sort for isImmuno */
  IsImmunoAsc = 'isImmuno_asc',
  /** Descending sort for isImmuno */
  IsImmunoDesc = 'isImmuno_desc',
  /** Ascending sort for modulator */
  ModulatorAsc = 'modulator_asc',
  /** Descending sort for modulator */
  ModulatorDesc = 'modulator_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for synonyms */
  SynonymsAsc = 'synonyms_asc',
  /** Descending sort for synonyms */
  SynonymsDesc = 'synonyms_desc'
}

/** Filter Input Type for Gene */
export type _GeneFilter = {
  /** AND */
  AND?: Maybe<Array<_GeneFilter>>;
  /** OR */
  OR?: Maybe<Array<_GeneFilter>>;
  /** chromosome */
  chromosome?: Maybe<Scalars['String']>;
  /** chromosome_contains */
  chromosome_contains?: Maybe<Scalars['String']>;
  /** chromosome_ends_with */
  chromosome_ends_with?: Maybe<Scalars['String']>;
  /** chromosome_gt */
  chromosome_gt?: Maybe<Scalars['String']>;
  /** chromosome_gte */
  chromosome_gte?: Maybe<Scalars['String']>;
  /** chromosome_in */
  chromosome_in?: Maybe<Array<Scalars['String']>>;
  /** chromosome_lt */
  chromosome_lt?: Maybe<Scalars['String']>;
  /** chromosome_lte */
  chromosome_lte?: Maybe<Scalars['String']>;
  /** chromosome_not */
  chromosome_not?: Maybe<Scalars['String']>;
  /** chromosome_not_contains */
  chromosome_not_contains?: Maybe<Scalars['String']>;
  /** chromosome_not_ends_with */
  chromosome_not_ends_with?: Maybe<Scalars['String']>;
  /** chromosome_not_in */
  chromosome_not_in?: Maybe<Array<Scalars['String']>>;
  /** chromosome_not_starts_with */
  chromosome_not_starts_with?: Maybe<Scalars['String']>;
  /** chromosome_starts_with */
  chromosome_starts_with?: Maybe<Scalars['String']>;
  /** end */
  end?: Maybe<Scalars['Int']>;
  /** end_gt */
  end_gt?: Maybe<Scalars['Int']>;
  /** end_gte */
  end_gte?: Maybe<Scalars['Int']>;
  /** end_in */
  end_in?: Maybe<Array<Scalars['Int']>>;
  /** end_lt */
  end_lt?: Maybe<Scalars['Int']>;
  /** end_lte */
  end_lte?: Maybe<Scalars['Int']>;
  /** end_not */
  end_not?: Maybe<Scalars['Int']>;
  /** end_not_in */
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** reference */
  reference?: Maybe<_InternetReferenceFilter>;
  /** reference_in */
  reference_in?: Maybe<_InternetReferenceFilter>;
  /** reference_not */
  reference_not?: Maybe<_InternetReferenceFilter>;
  /** reference_not_in */
  reference_not_in?: Maybe<_InternetReferenceFilter>;
  /** start */
  start?: Maybe<Scalars['Int']>;
  /** start_gt */
  start_gt?: Maybe<Scalars['Int']>;
  /** start_gte */
  start_gte?: Maybe<Scalars['Int']>;
  /** start_in */
  start_in?: Maybe<Array<Scalars['Int']>>;
  /** start_lt */
  start_lt?: Maybe<Scalars['Int']>;
  /** start_lte */
  start_lte?: Maybe<Scalars['Int']>;
  /** start_not */
  start_not?: Maybe<Scalars['Int']>;
  /** start_not_in */
  start_not_in?: Maybe<Array<Scalars['Int']>>;
  /** statement */
  statement?: Maybe<Scalars['String']>;
  /** statement_contains */
  statement_contains?: Maybe<Scalars['String']>;
  /** statement_ends_with */
  statement_ends_with?: Maybe<Scalars['String']>;
  /** statement_gt */
  statement_gt?: Maybe<Scalars['String']>;
  /** statement_gte */
  statement_gte?: Maybe<Scalars['String']>;
  /** statement_in */
  statement_in?: Maybe<Array<Scalars['String']>>;
  /** statement_lt */
  statement_lt?: Maybe<Scalars['String']>;
  /** statement_lte */
  statement_lte?: Maybe<Scalars['String']>;
  /** statement_not */
  statement_not?: Maybe<Scalars['String']>;
  /** statement_not_contains */
  statement_not_contains?: Maybe<Scalars['String']>;
  /** statement_not_ends_with */
  statement_not_ends_with?: Maybe<Scalars['String']>;
  /** statement_not_in */
  statement_not_in?: Maybe<Array<Scalars['String']>>;
  /** statement_not_starts_with */
  statement_not_starts_with?: Maybe<Scalars['String']>;
  /** statement_starts_with */
  statement_starts_with?: Maybe<Scalars['String']>;
  /** strand */
  strand?: Maybe<Strand>;
  /** strand_in */
  strand_in?: Maybe<Array<Strand>>;
  /** strand_not */
  strand_not?: Maybe<Strand>;
  /** strand_not_in */
  strand_not_in?: Maybe<Array<Strand>>;
};

/** Ordering Enum for Gene */
export enum _GeneOrdering {
  /** Ascending sort for chromosome */
  ChromosomeAsc = 'chromosome_asc',
  /** Descending sort for chromosome */
  ChromosomeDesc = 'chromosome_desc',
  /** Ascending sort for end */
  EndAsc = 'end_asc',
  /** Descending sort for end */
  EndDesc = 'end_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for start */
  StartAsc = 'start_asc',
  /** Descending sort for start */
  StartDesc = 'start_desc',
  /** Ascending sort for statement */
  StatementAsc = 'statement_asc',
  /** Descending sort for statement */
  StatementDesc = 'statement_desc',
  /** Ascending sort for strand */
  StrandAsc = 'strand_asc',
  /** Descending sort for strand */
  StrandDesc = 'strand_desc'
}

/** Filter Input Type for ImmunePhenotype */
export type _ImmunePhenotypeFilter = {
  /** AND */
  AND?: Maybe<Array<_ImmunePhenotypeFilter>>;
  /** OR */
  OR?: Maybe<Array<_ImmunePhenotypeFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** proteins */
  proteins?: Maybe<_ProteinFilter>;
  /** proteins_every */
  proteins_every?: Maybe<_ProteinFilter>;
  /** proteins_in */
  proteins_in?: Maybe<_ProteinFilter>;
  /** proteins_none */
  proteins_none?: Maybe<_ProteinFilter>;
  /** proteins_not */
  proteins_not?: Maybe<_ProteinFilter>;
  /** proteins_not_in */
  proteins_not_in?: Maybe<_ProteinFilter>;
  /** proteins_single */
  proteins_single?: Maybe<_ProteinFilter>;
  /** proteins_some */
  proteins_some?: Maybe<_ProteinFilter>;
};

/** Ordering Enum for ImmunePhenotype */
export enum _ImmunePhenotypeOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for InternetReference */
export type _InternetReferenceFilter = {
  /** AND */
  AND?: Maybe<Array<_InternetReferenceFilter>>;
  /** OR */
  OR?: Maybe<Array<_InternetReferenceFilter>>;
  /** accessed_date */
  accessed_date?: Maybe<Scalars['String']>;
  /** accessed_date_contains */
  accessed_date_contains?: Maybe<Scalars['String']>;
  /** accessed_date_ends_with */
  accessed_date_ends_with?: Maybe<Scalars['String']>;
  /** accessed_date_gt */
  accessed_date_gt?: Maybe<Scalars['String']>;
  /** accessed_date_gte */
  accessed_date_gte?: Maybe<Scalars['String']>;
  /** accessed_date_in */
  accessed_date_in?: Maybe<Array<Scalars['String']>>;
  /** accessed_date_lt */
  accessed_date_lt?: Maybe<Scalars['String']>;
  /** accessed_date_lte */
  accessed_date_lte?: Maybe<Scalars['String']>;
  /** accessed_date_not */
  accessed_date_not?: Maybe<Scalars['String']>;
  /** accessed_date_not_contains */
  accessed_date_not_contains?: Maybe<Scalars['String']>;
  /** accessed_date_not_ends_with */
  accessed_date_not_ends_with?: Maybe<Scalars['String']>;
  /** accessed_date_not_in */
  accessed_date_not_in?: Maybe<Array<Scalars['String']>>;
  /** accessed_date_not_starts_with */
  accessed_date_not_starts_with?: Maybe<Scalars['String']>;
  /** accessed_date_starts_with */
  accessed_date_starts_with?: Maybe<Scalars['String']>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** shortReference */
  shortReference?: Maybe<Scalars['String']>;
  /** shortReference_contains */
  shortReference_contains?: Maybe<Scalars['String']>;
  /** shortReference_ends_with */
  shortReference_ends_with?: Maybe<Scalars['String']>;
  /** shortReference_gt */
  shortReference_gt?: Maybe<Scalars['String']>;
  /** shortReference_gte */
  shortReference_gte?: Maybe<Scalars['String']>;
  /** shortReference_in */
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  /** shortReference_lt */
  shortReference_lt?: Maybe<Scalars['String']>;
  /** shortReference_lte */
  shortReference_lte?: Maybe<Scalars['String']>;
  /** shortReference_not */
  shortReference_not?: Maybe<Scalars['String']>;
  /** shortReference_not_contains */
  shortReference_not_contains?: Maybe<Scalars['String']>;
  /** shortReference_not_ends_with */
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  /** shortReference_not_in */
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  /** shortReference_not_starts_with */
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  /** shortReference_starts_with */
  shortReference_starts_with?: Maybe<Scalars['String']>;
  /** statements_referenced */
  statements_referenced?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_every */
  statements_referenced_every?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_in */
  statements_referenced_in?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_none */
  statements_referenced_none?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_not */
  statements_referenced_not?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_not_in */
  statements_referenced_not_in?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_single */
  statements_referenced_single?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_some */
  statements_referenced_some?: Maybe<_StatementWithEvidenceFilter>;
  /** web_address */
  web_address?: Maybe<Scalars['String']>;
  /** web_address_contains */
  web_address_contains?: Maybe<Scalars['String']>;
  /** web_address_ends_with */
  web_address_ends_with?: Maybe<Scalars['String']>;
  /** web_address_gt */
  web_address_gt?: Maybe<Scalars['String']>;
  /** web_address_gte */
  web_address_gte?: Maybe<Scalars['String']>;
  /** web_address_in */
  web_address_in?: Maybe<Array<Scalars['String']>>;
  /** web_address_lt */
  web_address_lt?: Maybe<Scalars['String']>;
  /** web_address_lte */
  web_address_lte?: Maybe<Scalars['String']>;
  /** web_address_not */
  web_address_not?: Maybe<Scalars['String']>;
  /** web_address_not_contains */
  web_address_not_contains?: Maybe<Scalars['String']>;
  /** web_address_not_ends_with */
  web_address_not_ends_with?: Maybe<Scalars['String']>;
  /** web_address_not_in */
  web_address_not_in?: Maybe<Array<Scalars['String']>>;
  /** web_address_not_starts_with */
  web_address_not_starts_with?: Maybe<Scalars['String']>;
  /** web_address_starts_with */
  web_address_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for InternetReference */
export enum _InternetReferenceOrdering {
  /** Ascending sort for accessed_date */
  AccessedDateAsc = 'accessed_date_asc',
  /** Descending sort for accessed_date */
  AccessedDateDesc = 'accessed_date_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for shortReference */
  ShortReferenceAsc = 'shortReference_asc',
  /** Descending sort for shortReference */
  ShortReferenceDesc = 'shortReference_desc',
  /** Ascending sort for web_address */
  WebAddressAsc = 'web_address_asc',
  /** Descending sort for web_address */
  WebAddressDesc = 'web_address_desc'
}

/** Filter Input Type for Isoform */
export type _IsoformFilter = {
  /** AND */
  AND?: Maybe<Array<_IsoformFilter>>;
  /** OR */
  OR?: Maybe<Array<_IsoformFilter>>;
  /** gene */
  gene?: Maybe<_GeneFilter>;
  /** gene_in */
  gene_in?: Maybe<_GeneFilter>;
  /** gene_not */
  gene_not?: Maybe<_GeneFilter>;
  /** gene_not_in */
  gene_not_in?: Maybe<_GeneFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for Isoform */
export enum _IsoformOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for Journal */
export type _JournalFilter = {
  /** AND */
  AND?: Maybe<Array<_JournalFilter>>;
  /** OR */
  OR?: Maybe<Array<_JournalFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for Journal */
export enum _JournalOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for LiteratureReference */
export type _LiteratureReferenceFilter = {
  /** AND */
  AND?: Maybe<Array<_LiteratureReferenceFilter>>;
  /** DOI */
  DOI?: Maybe<Scalars['String']>;
  /** DOI_contains */
  DOI_contains?: Maybe<Scalars['String']>;
  /** DOI_ends_with */
  DOI_ends_with?: Maybe<Scalars['String']>;
  /** DOI_gt */
  DOI_gt?: Maybe<Scalars['String']>;
  /** DOI_gte */
  DOI_gte?: Maybe<Scalars['String']>;
  /** DOI_in */
  DOI_in?: Maybe<Array<Scalars['String']>>;
  /** DOI_lt */
  DOI_lt?: Maybe<Scalars['String']>;
  /** DOI_lte */
  DOI_lte?: Maybe<Scalars['String']>;
  /** DOI_not */
  DOI_not?: Maybe<Scalars['String']>;
  /** DOI_not_contains */
  DOI_not_contains?: Maybe<Scalars['String']>;
  /** DOI_not_ends_with */
  DOI_not_ends_with?: Maybe<Scalars['String']>;
  /** DOI_not_in */
  DOI_not_in?: Maybe<Array<Scalars['String']>>;
  /** DOI_not_starts_with */
  DOI_not_starts_with?: Maybe<Scalars['String']>;
  /** DOI_starts_with */
  DOI_starts_with?: Maybe<Scalars['String']>;
  /** OR */
  OR?: Maybe<Array<_LiteratureReferenceFilter>>;
  /** PMID */
  PMID?: Maybe<Scalars['String']>;
  /** PMID_contains */
  PMID_contains?: Maybe<Scalars['String']>;
  /** PMID_ends_with */
  PMID_ends_with?: Maybe<Scalars['String']>;
  /** PMID_gt */
  PMID_gt?: Maybe<Scalars['String']>;
  /** PMID_gte */
  PMID_gte?: Maybe<Scalars['String']>;
  /** PMID_in */
  PMID_in?: Maybe<Array<Scalars['String']>>;
  /** PMID_lt */
  PMID_lt?: Maybe<Scalars['String']>;
  /** PMID_lte */
  PMID_lte?: Maybe<Scalars['String']>;
  /** PMID_not */
  PMID_not?: Maybe<Scalars['String']>;
  /** PMID_not_contains */
  PMID_not_contains?: Maybe<Scalars['String']>;
  /** PMID_not_ends_with */
  PMID_not_ends_with?: Maybe<Scalars['String']>;
  /** PMID_not_in */
  PMID_not_in?: Maybe<Array<Scalars['String']>>;
  /** PMID_not_starts_with */
  PMID_not_starts_with?: Maybe<Scalars['String']>;
  /** PMID_starts_with */
  PMID_starts_with?: Maybe<Scalars['String']>;
  /** authors */
  authors?: Maybe<_AuthorFilter>;
  /** authors_every */
  authors_every?: Maybe<_AuthorFilter>;
  /** authors_in */
  authors_in?: Maybe<_AuthorFilter>;
  /** authors_none */
  authors_none?: Maybe<_AuthorFilter>;
  /** authors_not */
  authors_not?: Maybe<_AuthorFilter>;
  /** authors_not_in */
  authors_not_in?: Maybe<_AuthorFilter>;
  /** authors_single */
  authors_single?: Maybe<_AuthorFilter>;
  /** authors_some */
  authors_some?: Maybe<_AuthorFilter>;
  /** first_page */
  first_page?: Maybe<Scalars['String']>;
  /** first_page_contains */
  first_page_contains?: Maybe<Scalars['String']>;
  /** first_page_ends_with */
  first_page_ends_with?: Maybe<Scalars['String']>;
  /** first_page_gt */
  first_page_gt?: Maybe<Scalars['String']>;
  /** first_page_gte */
  first_page_gte?: Maybe<Scalars['String']>;
  /** first_page_in */
  first_page_in?: Maybe<Array<Scalars['String']>>;
  /** first_page_lt */
  first_page_lt?: Maybe<Scalars['String']>;
  /** first_page_lte */
  first_page_lte?: Maybe<Scalars['String']>;
  /** first_page_not */
  first_page_not?: Maybe<Scalars['String']>;
  /** first_page_not_contains */
  first_page_not_contains?: Maybe<Scalars['String']>;
  /** first_page_not_ends_with */
  first_page_not_ends_with?: Maybe<Scalars['String']>;
  /** first_page_not_in */
  first_page_not_in?: Maybe<Array<Scalars['String']>>;
  /** first_page_not_starts_with */
  first_page_not_starts_with?: Maybe<Scalars['String']>;
  /** first_page_starts_with */
  first_page_starts_with?: Maybe<Scalars['String']>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** journal */
  journal?: Maybe<_JournalFilter>;
  /** journal_in */
  journal_in?: Maybe<_JournalFilter>;
  /** journal_not */
  journal_not?: Maybe<_JournalFilter>;
  /** journal_not_in */
  journal_not_in?: Maybe<_JournalFilter>;
  /** last_page */
  last_page?: Maybe<Scalars['String']>;
  /** last_page_contains */
  last_page_contains?: Maybe<Scalars['String']>;
  /** last_page_ends_with */
  last_page_ends_with?: Maybe<Scalars['String']>;
  /** last_page_gt */
  last_page_gt?: Maybe<Scalars['String']>;
  /** last_page_gte */
  last_page_gte?: Maybe<Scalars['String']>;
  /** last_page_in */
  last_page_in?: Maybe<Array<Scalars['String']>>;
  /** last_page_lt */
  last_page_lt?: Maybe<Scalars['String']>;
  /** last_page_lte */
  last_page_lte?: Maybe<Scalars['String']>;
  /** last_page_not */
  last_page_not?: Maybe<Scalars['String']>;
  /** last_page_not_contains */
  last_page_not_contains?: Maybe<Scalars['String']>;
  /** last_page_not_ends_with */
  last_page_not_ends_with?: Maybe<Scalars['String']>;
  /** last_page_not_in */
  last_page_not_in?: Maybe<Array<Scalars['String']>>;
  /** last_page_not_starts_with */
  last_page_not_starts_with?: Maybe<Scalars['String']>;
  /** last_page_starts_with */
  last_page_starts_with?: Maybe<Scalars['String']>;
  /** publication_Year */
  publication_Year?: Maybe<Scalars['String']>;
  /** publication_Year_contains */
  publication_Year_contains?: Maybe<Scalars['String']>;
  /** publication_Year_ends_with */
  publication_Year_ends_with?: Maybe<Scalars['String']>;
  /** publication_Year_gt */
  publication_Year_gt?: Maybe<Scalars['String']>;
  /** publication_Year_gte */
  publication_Year_gte?: Maybe<Scalars['String']>;
  /** publication_Year_in */
  publication_Year_in?: Maybe<Array<Scalars['String']>>;
  /** publication_Year_lt */
  publication_Year_lt?: Maybe<Scalars['String']>;
  /** publication_Year_lte */
  publication_Year_lte?: Maybe<Scalars['String']>;
  /** publication_Year_not */
  publication_Year_not?: Maybe<Scalars['String']>;
  /** publication_Year_not_contains */
  publication_Year_not_contains?: Maybe<Scalars['String']>;
  /** publication_Year_not_ends_with */
  publication_Year_not_ends_with?: Maybe<Scalars['String']>;
  /** publication_Year_not_in */
  publication_Year_not_in?: Maybe<Array<Scalars['String']>>;
  /** publication_Year_not_starts_with */
  publication_Year_not_starts_with?: Maybe<Scalars['String']>;
  /** publication_Year_starts_with */
  publication_Year_starts_with?: Maybe<Scalars['String']>;
  /** shortReference */
  shortReference?: Maybe<Scalars['String']>;
  /** shortReference_contains */
  shortReference_contains?: Maybe<Scalars['String']>;
  /** shortReference_ends_with */
  shortReference_ends_with?: Maybe<Scalars['String']>;
  /** shortReference_gt */
  shortReference_gt?: Maybe<Scalars['String']>;
  /** shortReference_gte */
  shortReference_gte?: Maybe<Scalars['String']>;
  /** shortReference_in */
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  /** shortReference_lt */
  shortReference_lt?: Maybe<Scalars['String']>;
  /** shortReference_lte */
  shortReference_lte?: Maybe<Scalars['String']>;
  /** shortReference_not */
  shortReference_not?: Maybe<Scalars['String']>;
  /** shortReference_not_contains */
  shortReference_not_contains?: Maybe<Scalars['String']>;
  /** shortReference_not_ends_with */
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  /** shortReference_not_in */
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  /** shortReference_not_starts_with */
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  /** shortReference_starts_with */
  shortReference_starts_with?: Maybe<Scalars['String']>;
  /** statements_referenced */
  statements_referenced?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_every */
  statements_referenced_every?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_in */
  statements_referenced_in?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_none */
  statements_referenced_none?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_not */
  statements_referenced_not?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_not_in */
  statements_referenced_not_in?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_single */
  statements_referenced_single?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_some */
  statements_referenced_some?: Maybe<_StatementWithEvidenceFilter>;
  /** title */
  title?: Maybe<Scalars['String']>;
  /** title_contains */
  title_contains?: Maybe<Scalars['String']>;
  /** title_ends_with */
  title_ends_with?: Maybe<Scalars['String']>;
  /** title_gt */
  title_gt?: Maybe<Scalars['String']>;
  /** title_gte */
  title_gte?: Maybe<Scalars['String']>;
  /** title_in */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** title_lt */
  title_lt?: Maybe<Scalars['String']>;
  /** title_lte */
  title_lte?: Maybe<Scalars['String']>;
  /** title_not */
  title_not?: Maybe<Scalars['String']>;
  /** title_not_contains */
  title_not_contains?: Maybe<Scalars['String']>;
  /** title_not_ends_with */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** title_not_in */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** title_not_starts_with */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** title_starts_with */
  title_starts_with?: Maybe<Scalars['String']>;
  /** volume */
  volume?: Maybe<Scalars['String']>;
  /** volume_contains */
  volume_contains?: Maybe<Scalars['String']>;
  /** volume_ends_with */
  volume_ends_with?: Maybe<Scalars['String']>;
  /** volume_gt */
  volume_gt?: Maybe<Scalars['String']>;
  /** volume_gte */
  volume_gte?: Maybe<Scalars['String']>;
  /** volume_in */
  volume_in?: Maybe<Array<Scalars['String']>>;
  /** volume_lt */
  volume_lt?: Maybe<Scalars['String']>;
  /** volume_lte */
  volume_lte?: Maybe<Scalars['String']>;
  /** volume_not */
  volume_not?: Maybe<Scalars['String']>;
  /** volume_not_contains */
  volume_not_contains?: Maybe<Scalars['String']>;
  /** volume_not_ends_with */
  volume_not_ends_with?: Maybe<Scalars['String']>;
  /** volume_not_in */
  volume_not_in?: Maybe<Array<Scalars['String']>>;
  /** volume_not_starts_with */
  volume_not_starts_with?: Maybe<Scalars['String']>;
  /** volume_starts_with */
  volume_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for LiteratureReference */
export enum _LiteratureReferenceOrdering {
  /** Ascending sort for DOI */
  DoiAsc = 'DOI_asc',
  /** Descending sort for DOI */
  DoiDesc = 'DOI_desc',
  /** Ascending sort for PMID */
  PmidAsc = 'PMID_asc',
  /** Descending sort for PMID */
  PmidDesc = 'PMID_desc',
  /** Ascending sort for first_page */
  FirstPageAsc = 'first_page_asc',
  /** Descending sort for first_page */
  FirstPageDesc = 'first_page_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for last_page */
  LastPageAsc = 'last_page_asc',
  /** Descending sort for last_page */
  LastPageDesc = 'last_page_desc',
  /** Ascending sort for publication_Year */
  PublicationYearAsc = 'publication_Year_asc',
  /** Descending sort for publication_Year */
  PublicationYearDesc = 'publication_Year_desc',
  /** Ascending sort for shortReference */
  ShortReferenceAsc = 'shortReference_asc',
  /** Descending sort for shortReference */
  ShortReferenceDesc = 'shortReference_desc',
  /** Ascending sort for title */
  TitleAsc = 'title_asc',
  /** Descending sort for title */
  TitleDesc = 'title_desc',
  /** Ascending sort for volume */
  VolumeAsc = 'volume_asc',
  /** Descending sort for volume */
  VolumeDesc = 'volume_desc'
}

/** Filter Input Type for NamedEntity */
export type _NamedEntityFilter = {
  /** AND */
  AND?: Maybe<Array<_NamedEntityFilter>>;
  /** OR */
  OR?: Maybe<Array<_NamedEntityFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for NamedEntity */
export enum _NamedEntityOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for Pathway */
export type _PathwayFilter = {
  /** AND */
  AND?: Maybe<Array<_PathwayFilter>>;
  /** OR */
  OR?: Maybe<Array<_PathwayFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** proteins */
  proteins?: Maybe<_ProteinFilter>;
  /** proteins_every */
  proteins_every?: Maybe<_ProteinFilter>;
  /** proteins_in */
  proteins_in?: Maybe<_ProteinFilter>;
  /** proteins_none */
  proteins_none?: Maybe<_ProteinFilter>;
  /** proteins_not */
  proteins_not?: Maybe<_ProteinFilter>;
  /** proteins_not_in */
  proteins_not_in?: Maybe<_ProteinFilter>;
  /** proteins_single */
  proteins_single?: Maybe<_ProteinFilter>;
  /** proteins_some */
  proteins_some?: Maybe<_ProteinFilter>;
};

/** Ordering Enum for Pathway */
export enum _PathwayOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for Polypeptide */
export type _PolypeptideFilter = {
  /** AND */
  AND?: Maybe<Array<_PolypeptideFilter>>;
  /** OR */
  OR?: Maybe<Array<_PolypeptideFilter>>;
  /** accessionNumber */
  accessionNumber?: Maybe<Scalars['String']>;
  /** accessionNumber_contains */
  accessionNumber_contains?: Maybe<Scalars['String']>;
  /** accessionNumber_ends_with */
  accessionNumber_ends_with?: Maybe<Scalars['String']>;
  /** accessionNumber_gt */
  accessionNumber_gt?: Maybe<Scalars['String']>;
  /** accessionNumber_gte */
  accessionNumber_gte?: Maybe<Scalars['String']>;
  /** accessionNumber_in */
  accessionNumber_in?: Maybe<Array<Scalars['String']>>;
  /** accessionNumber_lt */
  accessionNumber_lt?: Maybe<Scalars['String']>;
  /** accessionNumber_lte */
  accessionNumber_lte?: Maybe<Scalars['String']>;
  /** accessionNumber_not */
  accessionNumber_not?: Maybe<Scalars['String']>;
  /** accessionNumber_not_contains */
  accessionNumber_not_contains?: Maybe<Scalars['String']>;
  /** accessionNumber_not_ends_with */
  accessionNumber_not_ends_with?: Maybe<Scalars['String']>;
  /** accessionNumber_not_in */
  accessionNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** accessionNumber_not_starts_with */
  accessionNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** accessionNumber_starts_with */
  accessionNumber_starts_with?: Maybe<Scalars['String']>;
  /** gene */
  gene?: Maybe<_GeneFilter>;
  /** gene_in */
  gene_in?: Maybe<_GeneFilter>;
  /** gene_not */
  gene_not?: Maybe<_GeneFilter>;
  /** gene_not_in */
  gene_not_in?: Maybe<_GeneFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** transcript */
  transcript?: Maybe<_IsoformFilter>;
  /** transcript_in */
  transcript_in?: Maybe<_IsoformFilter>;
  /** transcript_not */
  transcript_not?: Maybe<_IsoformFilter>;
  /** transcript_not_in */
  transcript_not_in?: Maybe<_IsoformFilter>;
  /** uniprot_id */
  uniprot_id?: Maybe<Scalars['String']>;
  /** uniprot_id_contains */
  uniprot_id_contains?: Maybe<Scalars['String']>;
  /** uniprot_id_ends_with */
  uniprot_id_ends_with?: Maybe<Scalars['String']>;
  /** uniprot_id_gt */
  uniprot_id_gt?: Maybe<Scalars['String']>;
  /** uniprot_id_gte */
  uniprot_id_gte?: Maybe<Scalars['String']>;
  /** uniprot_id_in */
  uniprot_id_in?: Maybe<Array<Scalars['String']>>;
  /** uniprot_id_lt */
  uniprot_id_lt?: Maybe<Scalars['String']>;
  /** uniprot_id_lte */
  uniprot_id_lte?: Maybe<Scalars['String']>;
  /** uniprot_id_not */
  uniprot_id_not?: Maybe<Scalars['String']>;
  /** uniprot_id_not_contains */
  uniprot_id_not_contains?: Maybe<Scalars['String']>;
  /** uniprot_id_not_ends_with */
  uniprot_id_not_ends_with?: Maybe<Scalars['String']>;
  /** uniprot_id_not_in */
  uniprot_id_not_in?: Maybe<Array<Scalars['String']>>;
  /** uniprot_id_not_starts_with */
  uniprot_id_not_starts_with?: Maybe<Scalars['String']>;
  /** uniprot_id_starts_with */
  uniprot_id_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for Polypeptide */
export enum _PolypeptideOrdering {
  /** Ascending sort for accessionNumber */
  AccessionNumberAsc = 'accessionNumber_asc',
  /** Descending sort for accessionNumber */
  AccessionNumberDesc = 'accessionNumber_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for uniprot_id */
  UniprotIdAsc = 'uniprot_id_asc',
  /** Descending sort for uniprot_id */
  UniprotIdDesc = 'uniprot_id_desc'
}

/** Filter Input Type for Protein */
export type _ProteinFilter = {
  /** AND */
  AND?: Maybe<Array<_ProteinFilter>>;
  /** OR */
  OR?: Maybe<Array<_ProteinFilter>>;
  /** asTarget */
  asTarget?: Maybe<_ProteinTargetFilter>;
  /** asTarget_every */
  asTarget_every?: Maybe<_ProteinTargetFilter>;
  /** asTarget_in */
  asTarget_in?: Maybe<_ProteinTargetFilter>;
  /** asTarget_none */
  asTarget_none?: Maybe<_ProteinTargetFilter>;
  /** asTarget_not */
  asTarget_not?: Maybe<_ProteinTargetFilter>;
  /** asTarget_not_in */
  asTarget_not_in?: Maybe<_ProteinTargetFilter>;
  /** asTarget_single */
  asTarget_single?: Maybe<_ProteinTargetFilter>;
  /** asTarget_some */
  asTarget_some?: Maybe<_ProteinTargetFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** location */
  location?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_every */
  location_every?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_in */
  location_in?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_none */
  location_none?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_not */
  location_not?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_not_in */
  location_not_in?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_single */
  location_single?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** location_some */
  location_some?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** pathways */
  pathways?: Maybe<_PathwayFilter>;
  /** pathways_every */
  pathways_every?: Maybe<_PathwayFilter>;
  /** pathways_in */
  pathways_in?: Maybe<_PathwayFilter>;
  /** pathways_none */
  pathways_none?: Maybe<_PathwayFilter>;
  /** pathways_not */
  pathways_not?: Maybe<_PathwayFilter>;
  /** pathways_not_in */
  pathways_not_in?: Maybe<_PathwayFilter>;
  /** pathways_single */
  pathways_single?: Maybe<_PathwayFilter>;
  /** pathways_some */
  pathways_some?: Maybe<_PathwayFilter>;
  /** phenotype */
  phenotype?: Maybe<_ImmunePhenotypeFilter>;
  /** phenotype_in */
  phenotype_in?: Maybe<_ImmunePhenotypeFilter>;
  /** phenotype_not */
  phenotype_not?: Maybe<_ImmunePhenotypeFilter>;
  /** phenotype_not_in */
  phenotype_not_in?: Maybe<_ImmunePhenotypeFilter>;
  /** polypeptide_chains */
  polypeptide_chains?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_every */
  polypeptide_chains_every?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_in */
  polypeptide_chains_in?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_none */
  polypeptide_chains_none?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_not */
  polypeptide_chains_not?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_not_in */
  polypeptide_chains_not_in?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_single */
  polypeptide_chains_single?: Maybe<_PolypeptideFilter>;
  /** polypeptide_chains_some */
  polypeptide_chains_some?: Maybe<_PolypeptideFilter>;
  /** synonyms */
  synonyms?: Maybe<Scalars['String']>;
  /** synonyms_contains */
  synonyms_contains?: Maybe<Scalars['String']>;
  /** synonyms_ends_with */
  synonyms_ends_with?: Maybe<Scalars['String']>;
  /** synonyms_gt */
  synonyms_gt?: Maybe<Scalars['String']>;
  /** synonyms_gte */
  synonyms_gte?: Maybe<Scalars['String']>;
  /** synonyms_in */
  synonyms_in?: Maybe<Array<Scalars['String']>>;
  /** synonyms_lt */
  synonyms_lt?: Maybe<Scalars['String']>;
  /** synonyms_lte */
  synonyms_lte?: Maybe<Scalars['String']>;
  /** synonyms_not */
  synonyms_not?: Maybe<Scalars['String']>;
  /** synonyms_not_contains */
  synonyms_not_contains?: Maybe<Scalars['String']>;
  /** synonyms_not_ends_with */
  synonyms_not_ends_with?: Maybe<Scalars['String']>;
  /** synonyms_not_in */
  synonyms_not_in?: Maybe<Array<Scalars['String']>>;
  /** synonyms_not_starts_with */
  synonyms_not_starts_with?: Maybe<Scalars['String']>;
  /** synonyms_starts_with */
  synonyms_starts_with?: Maybe<Scalars['String']>;
  /** variants */
  variants?: Maybe<_VariantTargetFilter>;
  /** variants_every */
  variants_every?: Maybe<_VariantTargetFilter>;
  /** variants_in */
  variants_in?: Maybe<_VariantTargetFilter>;
  /** variants_none */
  variants_none?: Maybe<_VariantTargetFilter>;
  /** variants_not */
  variants_not?: Maybe<_VariantTargetFilter>;
  /** variants_not_in */
  variants_not_in?: Maybe<_VariantTargetFilter>;
  /** variants_single */
  variants_single?: Maybe<_VariantTargetFilter>;
  /** variants_some */
  variants_some?: Maybe<_VariantTargetFilter>;
};

/** Ordering Enum for Protein */
export enum _ProteinOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for synonyms */
  SynonymsAsc = 'synonyms_asc',
  /** Descending sort for synonyms */
  SynonymsDesc = 'synonyms_desc'
}

/** Filter Input Type for ProteinTarget */
export type _ProteinTargetFilter = {
  /** AND */
  AND?: Maybe<Array<_ProteinTargetFilter>>;
  /** OR */
  OR?: Maybe<Array<_ProteinTargetFilter>>;
  /** drugs */
  drugs?: Maybe<_DrugFilter>;
  /** drugs_every */
  drugs_every?: Maybe<_DrugFilter>;
  /** drugs_in */
  drugs_in?: Maybe<_DrugFilter>;
  /** drugs_none */
  drugs_none?: Maybe<_DrugFilter>;
  /** drugs_not */
  drugs_not?: Maybe<_DrugFilter>;
  /** drugs_not_in */
  drugs_not_in?: Maybe<_DrugFilter>;
  /** drugs_single */
  drugs_single?: Maybe<_DrugFilter>;
  /** drugs_some */
  drugs_some?: Maybe<_DrugFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** protein */
  protein?: Maybe<_ProteinFilter>;
  /** protein_in */
  protein_in?: Maybe<_ProteinFilter>;
  /** protein_not */
  protein_not?: Maybe<_ProteinFilter>;
  /** protein_not_in */
  protein_not_in?: Maybe<_ProteinFilter>;
};

/** Ordering Enum for ProteinTarget */
export enum _ProteinTargetOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for Reference */
export type _ReferenceFilter = {
  /** AND */
  AND?: Maybe<Array<_ReferenceFilter>>;
  /** OR */
  OR?: Maybe<Array<_ReferenceFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** shortReference */
  shortReference?: Maybe<Scalars['String']>;
  /** shortReference_contains */
  shortReference_contains?: Maybe<Scalars['String']>;
  /** shortReference_ends_with */
  shortReference_ends_with?: Maybe<Scalars['String']>;
  /** shortReference_gt */
  shortReference_gt?: Maybe<Scalars['String']>;
  /** shortReference_gte */
  shortReference_gte?: Maybe<Scalars['String']>;
  /** shortReference_in */
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  /** shortReference_lt */
  shortReference_lt?: Maybe<Scalars['String']>;
  /** shortReference_lte */
  shortReference_lte?: Maybe<Scalars['String']>;
  /** shortReference_not */
  shortReference_not?: Maybe<Scalars['String']>;
  /** shortReference_not_contains */
  shortReference_not_contains?: Maybe<Scalars['String']>;
  /** shortReference_not_ends_with */
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  /** shortReference_not_in */
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  /** shortReference_not_starts_with */
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  /** shortReference_starts_with */
  shortReference_starts_with?: Maybe<Scalars['String']>;
  /** statements_referenced */
  statements_referenced?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_every */
  statements_referenced_every?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_in */
  statements_referenced_in?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_none */
  statements_referenced_none?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_not */
  statements_referenced_not?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_not_in */
  statements_referenced_not_in?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_single */
  statements_referenced_single?: Maybe<_StatementWithEvidenceFilter>;
  /** statements_referenced_some */
  statements_referenced_some?: Maybe<_StatementWithEvidenceFilter>;
};

/** Ordering Enum for Reference */
export enum _ReferenceOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for shortReference */
  ShortReferenceAsc = 'shortReference_asc',
  /** Descending sort for shortReference */
  ShortReferenceDesc = 'shortReference_desc'
}

/** Filter Input Type for StatementWithEvidence */
export type _StatementWithEvidenceFilter = {
  /** AND */
  AND?: Maybe<Array<_StatementWithEvidenceFilter>>;
  /** OR */
  OR?: Maybe<Array<_StatementWithEvidenceFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** statement */
  statement?: Maybe<Scalars['String']>;
  /** statement_contains */
  statement_contains?: Maybe<Scalars['String']>;
  /** statement_ends_with */
  statement_ends_with?: Maybe<Scalars['String']>;
  /** statement_gt */
  statement_gt?: Maybe<Scalars['String']>;
  /** statement_gte */
  statement_gte?: Maybe<Scalars['String']>;
  /** statement_in */
  statement_in?: Maybe<Array<Scalars['String']>>;
  /** statement_lt */
  statement_lt?: Maybe<Scalars['String']>;
  /** statement_lte */
  statement_lte?: Maybe<Scalars['String']>;
  /** statement_not */
  statement_not?: Maybe<Scalars['String']>;
  /** statement_not_contains */
  statement_not_contains?: Maybe<Scalars['String']>;
  /** statement_not_ends_with */
  statement_not_ends_with?: Maybe<Scalars['String']>;
  /** statement_not_in */
  statement_not_in?: Maybe<Array<Scalars['String']>>;
  /** statement_not_starts_with */
  statement_not_starts_with?: Maybe<Scalars['String']>;
  /** statement_starts_with */
  statement_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for StatementWithEvidence */
export enum _StatementWithEvidenceOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for statement */
  StatementAsc = 'statement_asc',
  /** Descending sort for statement */
  StatementDesc = 'statement_desc'
}

/** Filter Input Type for SubcellularLocation */
export type _SubcellularLocationFilter = {
  /** AND */
  AND?: Maybe<Array<_SubcellularLocationFilter>>;
  /** OR */
  OR?: Maybe<Array<_SubcellularLocationFilter>>;
  /** evidence */
  evidence?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_every */
  evidence_every?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_in */
  evidence_in?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_none */
  evidence_none?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_not */
  evidence_not?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_not_in */
  evidence_not_in?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_single */
  evidence_single?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** evidence_some */
  evidence_some?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for SubcellularLocation */
export enum _SubcellularLocationOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for SubcellularLocationWithEvidence */
export type _SubcellularLocationWithEvidenceFilter = {
  /** AND */
  AND?: Maybe<Array<_SubcellularLocationWithEvidenceFilter>>;
  /** OR */
  OR?: Maybe<Array<_SubcellularLocationWithEvidenceFilter>>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** location */
  location?: Maybe<_SubcellularLocationFilter>;
  /** location_in */
  location_in?: Maybe<_SubcellularLocationFilter>;
  /** location_not */
  location_not?: Maybe<_SubcellularLocationFilter>;
  /** location_not_in */
  location_not_in?: Maybe<_SubcellularLocationFilter>;
  /** protein */
  protein?: Maybe<_ProteinFilter>;
  /** protein_in */
  protein_in?: Maybe<_ProteinFilter>;
  /** protein_not */
  protein_not?: Maybe<_ProteinFilter>;
  /** protein_not_in */
  protein_not_in?: Maybe<_ProteinFilter>;
  /** reference */
  reference?: Maybe<_LiteratureReferenceFilter>;
  /** reference_every */
  reference_every?: Maybe<_LiteratureReferenceFilter>;
  /** reference_in */
  reference_in?: Maybe<_LiteratureReferenceFilter>;
  /** reference_none */
  reference_none?: Maybe<_LiteratureReferenceFilter>;
  /** reference_not */
  reference_not?: Maybe<_LiteratureReferenceFilter>;
  /** reference_not_in */
  reference_not_in?: Maybe<_LiteratureReferenceFilter>;
  /** reference_single */
  reference_single?: Maybe<_LiteratureReferenceFilter>;
  /** reference_some */
  reference_some?: Maybe<_LiteratureReferenceFilter>;
  /** statement */
  statement?: Maybe<Scalars['String']>;
  /** statement_contains */
  statement_contains?: Maybe<Scalars['String']>;
  /** statement_ends_with */
  statement_ends_with?: Maybe<Scalars['String']>;
  /** statement_gt */
  statement_gt?: Maybe<Scalars['String']>;
  /** statement_gte */
  statement_gte?: Maybe<Scalars['String']>;
  /** statement_in */
  statement_in?: Maybe<Array<Scalars['String']>>;
  /** statement_lt */
  statement_lt?: Maybe<Scalars['String']>;
  /** statement_lte */
  statement_lte?: Maybe<Scalars['String']>;
  /** statement_not */
  statement_not?: Maybe<Scalars['String']>;
  /** statement_not_contains */
  statement_not_contains?: Maybe<Scalars['String']>;
  /** statement_not_ends_with */
  statement_not_ends_with?: Maybe<Scalars['String']>;
  /** statement_not_in */
  statement_not_in?: Maybe<Array<Scalars['String']>>;
  /** statement_not_starts_with */
  statement_not_starts_with?: Maybe<Scalars['String']>;
  /** statement_starts_with */
  statement_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for SubcellularLocationWithEvidence */
export enum _SubcellularLocationWithEvidenceOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for statement */
  StatementAsc = 'statement_asc',
  /** Descending sort for statement */
  StatementDesc = 'statement_desc'
}

/** Filter Input Type for Target */
export type _TargetFilter = {
  /** AND */
  AND?: Maybe<Array<_TargetFilter>>;
  /** OR */
  OR?: Maybe<Array<_TargetFilter>>;
  /** drugs */
  drugs?: Maybe<_DrugFilter>;
  /** drugs_every */
  drugs_every?: Maybe<_DrugFilter>;
  /** drugs_in */
  drugs_in?: Maybe<_DrugFilter>;
  /** drugs_none */
  drugs_none?: Maybe<_DrugFilter>;
  /** drugs_not */
  drugs_not?: Maybe<_DrugFilter>;
  /** drugs_not_in */
  drugs_not_in?: Maybe<_DrugFilter>;
  /** drugs_single */
  drugs_single?: Maybe<_DrugFilter>;
  /** drugs_some */
  drugs_some?: Maybe<_DrugFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
};

/** Ordering Enum for Target */
export enum _TargetOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Filter Input Type for VariantTarget */
export type _VariantTargetFilter = {
  /** AND */
  AND?: Maybe<Array<_VariantTargetFilter>>;
  /** OR */
  OR?: Maybe<Array<_VariantTargetFilter>>;
  /** drugs */
  drugs?: Maybe<_DrugFilter>;
  /** drugs_every */
  drugs_every?: Maybe<_DrugFilter>;
  /** drugs_in */
  drugs_in?: Maybe<_DrugFilter>;
  /** drugs_none */
  drugs_none?: Maybe<_DrugFilter>;
  /** drugs_not */
  drugs_not?: Maybe<_DrugFilter>;
  /** drugs_not_in */
  drugs_not_in?: Maybe<_DrugFilter>;
  /** drugs_single */
  drugs_single?: Maybe<_DrugFilter>;
  /** drugs_some */
  drugs_some?: Maybe<_DrugFilter>;
  /** id */
  id?: Maybe<Scalars['ID']>;
  /** id_contains */
  id_contains?: Maybe<Scalars['ID']>;
  /** id_ends_with */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** id_gt */
  id_gt?: Maybe<Scalars['ID']>;
  /** id_gte */
  id_gte?: Maybe<Scalars['ID']>;
  /** id_in */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** id_lt */
  id_lt?: Maybe<Scalars['ID']>;
  /** id_lte */
  id_lte?: Maybe<Scalars['ID']>;
  /** id_not */
  id_not?: Maybe<Scalars['ID']>;
  /** id_not_contains */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** id_not_ends_with */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** id_not_in */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** id_not_starts_with */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** id_starts_with */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** name */
  name?: Maybe<Scalars['String']>;
  /** name_contains */
  name_contains?: Maybe<Scalars['String']>;
  /** name_ends_with */
  name_ends_with?: Maybe<Scalars['String']>;
  /** name_gt */
  name_gt?: Maybe<Scalars['String']>;
  /** name_gte */
  name_gte?: Maybe<Scalars['String']>;
  /** name_in */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** name_lt */
  name_lt?: Maybe<Scalars['String']>;
  /** name_lte */
  name_lte?: Maybe<Scalars['String']>;
  /** name_not */
  name_not?: Maybe<Scalars['String']>;
  /** name_not_contains */
  name_not_contains?: Maybe<Scalars['String']>;
  /** name_not_ends_with */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** name_not_in */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** name_not_starts_with */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** name_starts_with */
  name_starts_with?: Maybe<Scalars['String']>;
  /** protein */
  protein?: Maybe<_ProteinFilter>;
  /** protein_in */
  protein_in?: Maybe<_ProteinFilter>;
  /** protein_not */
  protein_not?: Maybe<_ProteinFilter>;
  /** protein_not_in */
  protein_not_in?: Maybe<_ProteinFilter>;
};

/** Ordering Enum for VariantTarget */
export enum _VariantTargetOrdering {
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Author-Node */
export type Author = {
   __typename?: 'Author';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** first_initial of  Author */
  first_initial: Scalars['String'];
  /** id of  Author */
  id: Scalars['ID'];
  /** middle_initial of  Author */
  middle_initial?: Maybe<Scalars['String']>;
  /** Author references LiteratureReference */
  references: Array<LiteratureReference>;
  /** surname of  Author */
  surname: Scalars['String'];
};


/** Author-Node */
export type AuthorReferencesArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  first_page?: Maybe<Scalars['String']>;
  first_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_page?: Maybe<Scalars['String']>;
  last_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publication_Year?: Maybe<Scalars['String']>;
  publication_Years?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Drug-Node */
export type Drug = NamedEntity & {
   __typename?: 'Drug';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** annotationDate of  Drug */
  annotationDate: Scalars['String'];
  /** concept of  Drug */
  concept: Scalars['String'];
  /** definition of  Drug */
  definition: Scalars['String'];
  /** drugCategory of  Drug */
  drugCategory: Scalars['String'];
  /** id of  Drug */
  id: Scalars['ID'];
  /** isAntineoplastic of  Drug */
  isAntineoplastic: Scalars['Boolean'];
  /** isImmuno of  Drug */
  isImmuno: Scalars['Boolean'];
  /** modulator of  Drug */
  modulator: Scalars['String'];
  /** name of  Drug */
  name: Scalars['String'];
  /** synonyms of  Drug */
  synonyms: Array<Maybe<Scalars['String']>>;
  /** Drug target Target */
  target: Array<Maybe<Target>>;
};


/** Drug-Node */
export type DrugTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TargetOrdering>>>;
};

/** Gene-Node */
export type Gene = NamedEntity & StatementWithEvidence & {
   __typename?: 'Gene';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** chromosome of  Gene */
  chromosome: Scalars['String'];
  /** end of  Gene */
  end?: Maybe<Scalars['Int']>;
  /** id of  Gene */
  id: Scalars['ID'];
  /** name of  Gene */
  name: Scalars['String'];
  /** Gene reference InternetReference */
  reference: InternetReference;
  /** start of  Gene */
  start?: Maybe<Scalars['Int']>;
  /** statement of  Gene */
  statement: Scalars['String'];
  /** strand of  Gene */
  strand: Strand;
};


/** Gene-Node */
export type GeneReferenceArgs = {
  accessed_date?: Maybe<Scalars['String']>;
  accessed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_InternetReferenceFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_InternetReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  web_address?: Maybe<Scalars['String']>;
  web_addresss?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** ImmunePhenotype-Node */
export type ImmunePhenotype = NamedEntity & {
   __typename?: 'ImmunePhenotype';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  ImmunePhenotype */
  id: Scalars['ID'];
  /** name of  ImmunePhenotype */
  name: Scalars['String'];
  /** ImmunePhenotype proteins Protein */
  proteins: Array<Maybe<Protein>>;
};


/** ImmunePhenotype-Node */
export type ImmunePhenotypeProteinsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

/** InternetReference-Node */
export type InternetReference = Reference & {
   __typename?: 'InternetReference';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** accessed_date of  InternetReference */
  accessed_date: Scalars['String'];
  /** id of  InternetReference */
  id: Scalars['ID'];
  /** shortReference of  InternetReference */
  shortReference: Scalars['String'];
  /** InternetReference statements_referenced StatementWithEvidence */
  statements_referenced: Array<StatementWithEvidence>;
  /** web_address of  InternetReference */
  web_address: Scalars['String'];
};


/** InternetReference-Node */
export type InternetReferenceStatements_ReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Isoform-Node */
export type Isoform = NamedEntity & {
   __typename?: 'Isoform';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** Isoform gene Gene */
  gene: Gene;
  /** id of  Isoform */
  id: Scalars['ID'];
  /** name of  Isoform */
  name: Scalars['String'];
};


/** Isoform-Node */
export type IsoformGeneArgs = {
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_GeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
};

/** Journal-Node */
export type Journal = NamedEntity & {
   __typename?: 'Journal';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  Journal */
  id: Scalars['ID'];
  /** name of  Journal */
  name: Scalars['String'];
};

/** LiteratureReference-Node */
export type LiteratureReference = Reference & {
   __typename?: 'LiteratureReference';
  /** DOI of  LiteratureReference */
  DOI?: Maybe<Scalars['String']>;
  /** PMID of  LiteratureReference */
  PMID?: Maybe<Scalars['String']>;
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** LiteratureReference authors Author */
  authors: Array<Author>;
  /** first_page of  LiteratureReference */
  first_page: Scalars['String'];
  /** id of  LiteratureReference */
  id: Scalars['ID'];
  /** LiteratureReference journal Journal */
  journal: Journal;
  /** last_page of  LiteratureReference */
  last_page: Scalars['String'];
  /** publication_Year of  LiteratureReference */
  publication_Year: Scalars['String'];
  /** shortReference of  LiteratureReference */
  shortReference: Scalars['String'];
  /** LiteratureReference statements_referenced StatementWithEvidence */
  statements_referenced: Array<StatementWithEvidence>;
  /** title of  LiteratureReference */
  title: Scalars['String'];
  /** volume of  LiteratureReference */
  volume: Scalars['String'];
};


/** LiteratureReference-Node */
export type LiteratureReferenceAuthorsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  first_initial?: Maybe<Scalars['String']>;
  first_initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  middle_initial?: Maybe<Scalars['String']>;
  middle_initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** LiteratureReference-Node */
export type LiteratureReferenceJournalArgs = {
  filter?: Maybe<_JournalFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JournalOrdering>>>;
};


/** LiteratureReference-Node */
export type LiteratureReferenceStatements_ReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationType = {
   __typename?: 'MutationType';
  /** Adds References to Author entity */
  addAuthorReferences?: Maybe<Scalars['String']>;
  /** Adds Target to Drug entity */
  addDrugTarget?: Maybe<Scalars['String']>;
  /** Adds Reference to Gene entity */
  addGeneReference?: Maybe<Scalars['String']>;
  /** Adds Proteins to ImmunePhenotype entity */
  addImmunePhenotypeProteins?: Maybe<Scalars['String']>;
  /** Adds Statements_referenced to InternetReference entity */
  addInternetReferenceStatements_referenced?: Maybe<Scalars['String']>;
  /** Adds Gene to Isoform entity */
  addIsoformGene?: Maybe<Scalars['String']>;
  /** Adds Authors to LiteratureReference entity */
  addLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  /** Adds Journal to LiteratureReference entity */
  addLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  /** Adds Statements_referenced to LiteratureReference entity */
  addLiteratureReferenceStatements_referenced?: Maybe<Scalars['String']>;
  /** Adds Proteins to Pathway entity */
  addPathwayProteins?: Maybe<Scalars['String']>;
  /** Adds Gene to Polypeptide entity */
  addPolypeptideGene?: Maybe<Scalars['String']>;
  /** Adds Transcript to Polypeptide entity */
  addPolypeptideTranscript?: Maybe<Scalars['String']>;
  /** Adds AsTarget to Protein entity */
  addProteinAsTarget?: Maybe<Scalars['String']>;
  /** Adds Location to Protein entity */
  addProteinLocation?: Maybe<Scalars['String']>;
  /** Adds Pathways to Protein entity */
  addProteinPathways?: Maybe<Scalars['String']>;
  /** Adds Phenotype to Protein entity */
  addProteinPhenotype?: Maybe<Scalars['String']>;
  /** Adds Polypeptide_chains to Protein entity */
  addProteinPolypeptide_chains?: Maybe<Scalars['String']>;
  /** Adds Drugs to ProteinTarget entity */
  addProteinTargetDrugs?: Maybe<Scalars['String']>;
  /** Adds Protein to ProteinTarget entity */
  addProteinTargetProtein?: Maybe<Scalars['String']>;
  /** Adds Variants to Protein entity */
  addProteinVariants?: Maybe<Scalars['String']>;
  /** Adds Statements_referenced to Reference entity */
  addReferenceStatements_referenced?: Maybe<Scalars['String']>;
  /** Adds Evidence to SubcellularLocation entity */
  addSubcellularLocationEvidence?: Maybe<Scalars['String']>;
  /** Adds Location to SubcellularLocationWithEvidence entity */
  addSubcellularLocationWithEvidenceLocation?: Maybe<Scalars['String']>;
  /** Adds Protein to SubcellularLocationWithEvidence entity */
  addSubcellularLocationWithEvidenceProtein?: Maybe<Scalars['String']>;
  /** Adds Reference to SubcellularLocationWithEvidence entity */
  addSubcellularLocationWithEvidenceReference?: Maybe<Scalars['String']>;
  /** Adds Drugs to Target entity */
  addTargetDrugs?: Maybe<Scalars['String']>;
  /** Adds Drugs to VariantTarget entity */
  addVariantTargetDrugs?: Maybe<Scalars['String']>;
  /** Adds Protein to VariantTarget entity */
  addVariantTargetProtein?: Maybe<Scalars['String']>;
  /** Creates a Author entity */
  createAuthor?: Maybe<Scalars['String']>;
  /** Creates a Drug entity */
  createDrug?: Maybe<Scalars['String']>;
  /** Creates a Gene entity */
  createGene?: Maybe<Scalars['String']>;
  /** Creates a ImmunePhenotype entity */
  createImmunePhenotype?: Maybe<Scalars['String']>;
  /** Creates a InternetReference entity */
  createInternetReference?: Maybe<Scalars['String']>;
  /** Creates a Isoform entity */
  createIsoform?: Maybe<Scalars['String']>;
  /** Creates a Journal entity */
  createJournal?: Maybe<Scalars['String']>;
  /** Creates a LiteratureReference entity */
  createLiteratureReference?: Maybe<Scalars['String']>;
  /** Creates a NamedEntity entity */
  createNamedEntity?: Maybe<Scalars['String']>;
  /** Creates a Pathway entity */
  createPathway?: Maybe<Scalars['String']>;
  /** Creates a Polypeptide entity */
  createPolypeptide?: Maybe<Scalars['String']>;
  /** Creates a Protein entity */
  createProtein?: Maybe<Scalars['String']>;
  /** Creates a ProteinTarget entity */
  createProteinTarget?: Maybe<Scalars['String']>;
  /** Creates a Reference entity */
  createReference?: Maybe<Scalars['String']>;
  /** Creates a StatementWithEvidence entity */
  createStatementWithEvidence?: Maybe<Scalars['String']>;
  /** Creates a SubcellularLocation entity */
  createSubcellularLocation?: Maybe<Scalars['String']>;
  /** Creates a SubcellularLocationWithEvidence entity */
  createSubcellularLocationWithEvidence?: Maybe<Scalars['String']>;
  /** Creates a Target entity */
  createTarget?: Maybe<Scalars['String']>;
  /** Creates a VariantTarget entity */
  createVariantTarget?: Maybe<Scalars['String']>;
  /** Deletes a Author entity */
  deleteAuthor?: Maybe<Scalars['String']>;
  /** Deletes References from Author entity */
  deleteAuthorReferences?: Maybe<Scalars['String']>;
  /** Deletes a Drug entity */
  deleteDrug?: Maybe<Scalars['String']>;
  /** Deletes Target from Drug entity */
  deleteDrugTarget?: Maybe<Scalars['String']>;
  /** Deletes a Gene entity */
  deleteGene?: Maybe<Scalars['String']>;
  /** Deletes Reference from Gene entity */
  deleteGeneReference?: Maybe<Scalars['String']>;
  /** Deletes a ImmunePhenotype entity */
  deleteImmunePhenotype?: Maybe<Scalars['String']>;
  /** Deletes Proteins from ImmunePhenotype entity */
  deleteImmunePhenotypeProteins?: Maybe<Scalars['String']>;
  /** Deletes a InternetReference entity */
  deleteInternetReference?: Maybe<Scalars['String']>;
  /** Deletes Statements_referenced from InternetReference entity */
  deleteInternetReferenceStatements_referenced?: Maybe<Scalars['String']>;
  /** Deletes a Isoform entity */
  deleteIsoform?: Maybe<Scalars['String']>;
  /** Deletes Gene from Isoform entity */
  deleteIsoformGene?: Maybe<Scalars['String']>;
  /** Deletes a Journal entity */
  deleteJournal?: Maybe<Scalars['String']>;
  /** Deletes a LiteratureReference entity */
  deleteLiteratureReference?: Maybe<Scalars['String']>;
  /** Deletes Authors from LiteratureReference entity */
  deleteLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  /** Deletes Journal from LiteratureReference entity */
  deleteLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  /** Deletes Statements_referenced from LiteratureReference entity */
  deleteLiteratureReferenceStatements_referenced?: Maybe<Scalars['String']>;
  /** Deletes a NamedEntity entity */
  deleteNamedEntity?: Maybe<Scalars['String']>;
  /** Deletes a Pathway entity */
  deletePathway?: Maybe<Scalars['String']>;
  /** Deletes Proteins from Pathway entity */
  deletePathwayProteins?: Maybe<Scalars['String']>;
  /** Deletes a Polypeptide entity */
  deletePolypeptide?: Maybe<Scalars['String']>;
  /** Deletes Gene from Polypeptide entity */
  deletePolypeptideGene?: Maybe<Scalars['String']>;
  /** Deletes Transcript from Polypeptide entity */
  deletePolypeptideTranscript?: Maybe<Scalars['String']>;
  /** Deletes a Protein entity */
  deleteProtein?: Maybe<Scalars['String']>;
  /** Deletes AsTarget from Protein entity */
  deleteProteinAsTarget?: Maybe<Scalars['String']>;
  /** Deletes Location from Protein entity */
  deleteProteinLocation?: Maybe<Scalars['String']>;
  /** Deletes Pathways from Protein entity */
  deleteProteinPathways?: Maybe<Scalars['String']>;
  /** Deletes Phenotype from Protein entity */
  deleteProteinPhenotype?: Maybe<Scalars['String']>;
  /** Deletes Polypeptide_chains from Protein entity */
  deleteProteinPolypeptide_chains?: Maybe<Scalars['String']>;
  /** Deletes a ProteinTarget entity */
  deleteProteinTarget?: Maybe<Scalars['String']>;
  /** Deletes Drugs from ProteinTarget entity */
  deleteProteinTargetDrugs?: Maybe<Scalars['String']>;
  /** Deletes Protein from ProteinTarget entity */
  deleteProteinTargetProtein?: Maybe<Scalars['String']>;
  /** Deletes Variants from Protein entity */
  deleteProteinVariants?: Maybe<Scalars['String']>;
  /** Deletes a Reference entity */
  deleteReference?: Maybe<Scalars['String']>;
  /** Deletes Statements_referenced from Reference entity */
  deleteReferenceStatements_referenced?: Maybe<Scalars['String']>;
  /** Deletes a StatementWithEvidence entity */
  deleteStatementWithEvidence?: Maybe<Scalars['String']>;
  /** Deletes a SubcellularLocation entity */
  deleteSubcellularLocation?: Maybe<Scalars['String']>;
  /** Deletes Evidence from SubcellularLocation entity */
  deleteSubcellularLocationEvidence?: Maybe<Scalars['String']>;
  /** Deletes a SubcellularLocationWithEvidence entity */
  deleteSubcellularLocationWithEvidence?: Maybe<Scalars['String']>;
  /** Deletes Location from SubcellularLocationWithEvidence entity */
  deleteSubcellularLocationWithEvidenceLocation?: Maybe<Scalars['String']>;
  /** Deletes Protein from SubcellularLocationWithEvidence entity */
  deleteSubcellularLocationWithEvidenceProtein?: Maybe<Scalars['String']>;
  /** Deletes Reference from SubcellularLocationWithEvidence entity */
  deleteSubcellularLocationWithEvidenceReference?: Maybe<Scalars['String']>;
  /** Deletes a Target entity */
  deleteTarget?: Maybe<Scalars['String']>;
  /** Deletes Drugs from Target entity */
  deleteTargetDrugs?: Maybe<Scalars['String']>;
  /** Deletes a VariantTarget entity */
  deleteVariantTarget?: Maybe<Scalars['String']>;
  /** Deletes Drugs from VariantTarget entity */
  deleteVariantTargetDrugs?: Maybe<Scalars['String']>;
  /** Deletes Protein from VariantTarget entity */
  deleteVariantTargetProtein?: Maybe<Scalars['String']>;
  /** Merge a Author entity */
  mergeAuthor?: Maybe<Scalars['String']>;
  /** Merge a Drug entity */
  mergeDrug?: Maybe<Scalars['String']>;
  /** Merge a Gene entity */
  mergeGene?: Maybe<Scalars['String']>;
  /** Merge a ImmunePhenotype entity */
  mergeImmunePhenotype?: Maybe<Scalars['String']>;
  /** Merge a InternetReference entity */
  mergeInternetReference?: Maybe<Scalars['String']>;
  /** Merge a Isoform entity */
  mergeIsoform?: Maybe<Scalars['String']>;
  /** Merge a Journal entity */
  mergeJournal?: Maybe<Scalars['String']>;
  /** Merge a LiteratureReference entity */
  mergeLiteratureReference?: Maybe<Scalars['String']>;
  /** Merge a NamedEntity entity */
  mergeNamedEntity?: Maybe<Scalars['String']>;
  /** Merge a Pathway entity */
  mergePathway?: Maybe<Scalars['String']>;
  /** Merge a Polypeptide entity */
  mergePolypeptide?: Maybe<Scalars['String']>;
  /** Merge a Protein entity */
  mergeProtein?: Maybe<Scalars['String']>;
  /** Merge a ProteinTarget entity */
  mergeProteinTarget?: Maybe<Scalars['String']>;
  /** Merge a Reference entity */
  mergeReference?: Maybe<Scalars['String']>;
  /** Merge a StatementWithEvidence entity */
  mergeStatementWithEvidence?: Maybe<Scalars['String']>;
  /** Merge a SubcellularLocation entity */
  mergeSubcellularLocation?: Maybe<Scalars['String']>;
  /** Merge a SubcellularLocationWithEvidence entity */
  mergeSubcellularLocationWithEvidence?: Maybe<Scalars['String']>;
  /** Merge a Target entity */
  mergeTarget?: Maybe<Scalars['String']>;
  /** Merge a VariantTarget entity */
  mergeVariantTarget?: Maybe<Scalars['String']>;
  /** Updates a Author entity */
  updateAuthor?: Maybe<Scalars['String']>;
  /** Updates a Drug entity */
  updateDrug?: Maybe<Scalars['String']>;
  /** Updates a Gene entity */
  updateGene?: Maybe<Scalars['String']>;
  /** Updates a ImmunePhenotype entity */
  updateImmunePhenotype?: Maybe<Scalars['String']>;
  /** Updates a InternetReference entity */
  updateInternetReference?: Maybe<Scalars['String']>;
  /** Updates a Isoform entity */
  updateIsoform?: Maybe<Scalars['String']>;
  /** Updates a Journal entity */
  updateJournal?: Maybe<Scalars['String']>;
  /** Updates a LiteratureReference entity */
  updateLiteratureReference?: Maybe<Scalars['String']>;
  /** Updates a NamedEntity entity */
  updateNamedEntity?: Maybe<Scalars['String']>;
  /** Updates a Pathway entity */
  updatePathway?: Maybe<Scalars['String']>;
  /** Updates a Polypeptide entity */
  updatePolypeptide?: Maybe<Scalars['String']>;
  /** Updates a Protein entity */
  updateProtein?: Maybe<Scalars['String']>;
  /** Updates a ProteinTarget entity */
  updateProteinTarget?: Maybe<Scalars['String']>;
  /** Updates a Reference entity */
  updateReference?: Maybe<Scalars['String']>;
  /** Updates a StatementWithEvidence entity */
  updateStatementWithEvidence?: Maybe<Scalars['String']>;
  /** Updates a SubcellularLocation entity */
  updateSubcellularLocation?: Maybe<Scalars['String']>;
  /** Updates a SubcellularLocationWithEvidence entity */
  updateSubcellularLocationWithEvidence?: Maybe<Scalars['String']>;
  /** Updates a Target entity */
  updateTarget?: Maybe<Scalars['String']>;
  /** Updates a VariantTarget entity */
  updateVariantTarget?: Maybe<Scalars['String']>;
};


export type MutationTypeAddAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddDrugTargetArgs = {
  id: Scalars['ID'];
  target: Array<Scalars['ID']>;
};


export type MutationTypeAddGeneReferenceArgs = {
  id: Scalars['ID'];
  reference: Array<Scalars['ID']>;
};


export type MutationTypeAddImmunePhenotypeProteinsArgs = {
  id: Scalars['ID'];
  proteins: Array<Scalars['ID']>;
};


export type MutationTypeAddInternetReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeAddIsoformGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeAddLiteratureReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeAddPathwayProteinsArgs = {
  id: Scalars['ID'];
  proteins: Array<Scalars['ID']>;
};


export type MutationTypeAddPolypeptideGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddPolypeptideTranscriptArgs = {
  id: Scalars['ID'];
  transcript: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinAsTargetArgs = {
  asTarget: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinLocationArgs = {
  id: Scalars['ID'];
  location: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinPathwaysArgs = {
  id: Scalars['ID'];
  pathways: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinPhenotypeArgs = {
  id: Scalars['ID'];
  phenotype: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinPolypeptide_ChainsArgs = {
  id: Scalars['ID'];
  polypeptide_chains: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinTargetDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinTargetProteinArgs = {
  id: Scalars['ID'];
  protein: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinVariantsArgs = {
  id: Scalars['ID'];
  variants: Array<Scalars['ID']>;
};


export type MutationTypeAddReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeAddSubcellularLocationEvidenceArgs = {
  evidence: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddSubcellularLocationWithEvidenceLocationArgs = {
  id: Scalars['ID'];
  location: Array<Scalars['ID']>;
};


export type MutationTypeAddSubcellularLocationWithEvidenceProteinArgs = {
  id: Scalars['ID'];
  protein: Array<Scalars['ID']>;
};


export type MutationTypeAddSubcellularLocationWithEvidenceReferenceArgs = {
  id: Scalars['ID'];
  reference: Array<Scalars['ID']>;
};


export type MutationTypeAddTargetDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantTargetDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantTargetProteinArgs = {
  id: Scalars['ID'];
  protein: Array<Scalars['ID']>;
};


export type MutationTypeCreateAuthorArgs = {
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  middle_initial?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
};


export type MutationTypeCreateDrugArgs = {
  annotationDate: Scalars['String'];
  concept: Scalars['String'];
  definition: Scalars['String'];
  drugCategory: Scalars['String'];
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
  modulator: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeCreateGeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  statement: Scalars['String'];
  strand: Strand;
};


export type MutationTypeCreateImmunePhenotypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateInternetReferenceArgs = {
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  web_address: Scalars['String'];
};


export type MutationTypeCreateIsoformArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeCreateNamedEntityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreatePathwayArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreatePolypeptideArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type MutationTypeCreateProteinArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeCreateProteinTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeCreateStatementWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeCreateSubcellularLocationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateSubcellularLocationWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeCreateTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateVariantTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteDrugTargetArgs = {
  id: Scalars['ID'];
  target: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGeneArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteGeneReferenceArgs = {
  id: Scalars['ID'];
  reference: Array<Scalars['ID']>;
};


export type MutationTypeDeleteImmunePhenotypeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteImmunePhenotypeProteinsArgs = {
  id: Scalars['ID'];
  proteins: Array<Scalars['ID']>;
};


export type MutationTypeDeleteInternetReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteInternetReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIsoformArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteIsoformGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJournalArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeDeleteLiteratureReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNamedEntityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePathwayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePathwayProteinsArgs = {
  id: Scalars['ID'];
  proteins: Array<Scalars['ID']>;
};


export type MutationTypeDeletePolypeptideArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePolypeptideGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeletePolypeptideTranscriptArgs = {
  id: Scalars['ID'];
  transcript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinAsTargetArgs = {
  asTarget: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinLocationArgs = {
  id: Scalars['ID'];
  location: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinPathwaysArgs = {
  id: Scalars['ID'];
  pathways: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinPhenotypeArgs = {
  id: Scalars['ID'];
  phenotype: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinPolypeptide_ChainsArgs = {
  id: Scalars['ID'];
  polypeptide_chains: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinTargetArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinTargetDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinTargetProteinArgs = {
  id: Scalars['ID'];
  protein: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinVariantsArgs = {
  id: Scalars['ID'];
  variants: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteStatementWithEvidenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteSubcellularLocationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteSubcellularLocationEvidenceArgs = {
  evidence: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteSubcellularLocationWithEvidenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteSubcellularLocationWithEvidenceLocationArgs = {
  id: Scalars['ID'];
  location: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSubcellularLocationWithEvidenceProteinArgs = {
  id: Scalars['ID'];
  protein: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSubcellularLocationWithEvidenceReferenceArgs = {
  id: Scalars['ID'];
  reference: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTargetArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTargetDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantTargetArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantTargetDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantTargetProteinArgs = {
  id: Scalars['ID'];
  protein: Array<Scalars['ID']>;
};


export type MutationTypeMergeAuthorArgs = {
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  middle_initial?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
};


export type MutationTypeMergeDrugArgs = {
  annotationDate: Scalars['String'];
  concept: Scalars['String'];
  definition: Scalars['String'];
  drugCategory: Scalars['String'];
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
  modulator: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeMergeGeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  statement: Scalars['String'];
  strand: Strand;
};


export type MutationTypeMergeImmunePhenotypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeInternetReferenceArgs = {
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  web_address: Scalars['String'];
};


export type MutationTypeMergeIsoformArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeMergeNamedEntityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergePathwayArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergePolypeptideArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type MutationTypeMergeProteinArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeMergeProteinTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeMergeStatementWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeMergeSubcellularLocationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeSubcellularLocationWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeMergeTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeVariantTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateAuthorArgs = {
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  middle_initial?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
};


export type MutationTypeUpdateDrugArgs = {
  annotationDate: Scalars['String'];
  concept: Scalars['String'];
  definition: Scalars['String'];
  drugCategory: Scalars['String'];
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
  modulator: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeUpdateGeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  statement: Scalars['String'];
  strand: Strand;
};


export type MutationTypeUpdateImmunePhenotypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateInternetReferenceArgs = {
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  web_address: Scalars['String'];
};


export type MutationTypeUpdateIsoformArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeUpdateNamedEntityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdatePathwayArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdatePolypeptideArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type MutationTypeUpdateProteinArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeUpdateProteinTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeUpdateStatementWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeUpdateSubcellularLocationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateSubcellularLocationWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeUpdateTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateVariantTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** NamedEntity-Node */
export type NamedEntity = {
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  NamedEntity */
  id: Scalars['ID'];
  /** name of  NamedEntity */
  name: Scalars['String'];
};

/** Pathway-Node */
export type Pathway = NamedEntity & {
   __typename?: 'Pathway';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  Pathway */
  id: Scalars['ID'];
  /** name of  Pathway */
  name: Scalars['String'];
  /** Pathway proteins Protein */
  proteins: Array<Maybe<Protein>>;
};


/** Pathway-Node */
export type PathwayProteinsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

/** Polypeptide-Node */
export type Polypeptide = NamedEntity & {
   __typename?: 'Polypeptide';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** accessionNumber of  Polypeptide */
  accessionNumber: Scalars['String'];
  /** Polypeptide gene Gene */
  gene: Gene;
  /** id of  Polypeptide */
  id: Scalars['ID'];
  /** name of  Polypeptide */
  name: Scalars['String'];
  /** Polypeptide transcript Isoform */
  transcript: Isoform;
  /** uniprot_id of  Polypeptide */
  uniprot_id: Scalars['String'];
};


/** Polypeptide-Node */
export type PolypeptideGeneArgs = {
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_GeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
};


/** Polypeptide-Node */
export type PolypeptideTranscriptArgs = {
  filter?: Maybe<_IsoformFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_IsoformOrdering>>>;
};

/** Protein-Node */
export type Protein = NamedEntity & {
   __typename?: 'Protein';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** Protein asTarget ProteinTarget */
  asTarget: Array<ProteinTarget>;
  /** id of  Protein */
  id: Scalars['ID'];
  /** Protein location SubcellularLocationWithEvidence */
  location: Array<Maybe<SubcellularLocationWithEvidence>>;
  /** name of  Protein */
  name: Scalars['String'];
  /** Protein pathways Pathway */
  pathways: Array<Maybe<Pathway>>;
  /** Protein phenotype ImmunePhenotype */
  phenotype?: Maybe<ImmunePhenotype>;
  /** Protein polypeptide_chains Polypeptide */
  polypeptide_chains: Array<Maybe<Polypeptide>>;
  /** synonyms of  Protein */
  synonyms: Array<Maybe<Scalars['String']>>;
  /** Protein variants VariantTarget */
  variants: Array<VariantTarget>;
};


/** Protein-Node */
export type ProteinAsTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinTargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinTargetOrdering>>>;
};


/** Protein-Node */
export type ProteinLocationArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubcellularLocationWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Protein-Node */
export type ProteinPathwaysArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_PathwayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PathwayOrdering>>>;
};


/** Protein-Node */
export type ProteinPhenotypeArgs = {
  filter?: Maybe<_ImmunePhenotypeFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_ImmunePhenotypeOrdering>>>;
};


/** Protein-Node */
export type ProteinPolypeptide_ChainsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_PolypeptideFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PolypeptideOrdering>>>;
  uniprot_id?: Maybe<Scalars['String']>;
  uniprot_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Protein-Node */
export type ProteinVariantsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_VariantTargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VariantTargetOrdering>>>;
};

/** ProteinTarget-Node */
export type ProteinTarget = Target & {
   __typename?: 'ProteinTarget';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** ProteinTarget drugs Drug */
  drugs: Array<Maybe<Drug>>;
  /** id of  ProteinTarget */
  id: Scalars['ID'];
  /** name of  ProteinTarget */
  name: Scalars['String'];
  /** ProteinTarget protein Protein */
  protein: Protein;
};


/** ProteinTarget-Node */
export type ProteinTargetDrugsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  annotationDate?: Maybe<Scalars['String']>;
  annotationDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  concept?: Maybe<Scalars['String']>;
  concepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  definition?: Maybe<Scalars['String']>;
  definitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugCategory?: Maybe<Scalars['String']>;
  drugCategorys?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastics?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmunos?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  modulator?: Maybe<Scalars['String']>;
  modulators?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DrugOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


/** ProteinTarget-Node */
export type ProteinTargetProteinArgs = {
  filter?: Maybe<_ProteinFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type QueryType = {
   __typename?: 'QueryType';
  Author?: Maybe<Array<Maybe<Author>>>;
  Drug?: Maybe<Array<Maybe<Drug>>>;
  Gene?: Maybe<Array<Maybe<Gene>>>;
  ImmunePhenotype?: Maybe<Array<Maybe<ImmunePhenotype>>>;
  InternetReference?: Maybe<Array<Maybe<InternetReference>>>;
  Isoform?: Maybe<Array<Maybe<Isoform>>>;
  Journal?: Maybe<Array<Maybe<Journal>>>;
  LiteratureReference?: Maybe<Array<Maybe<LiteratureReference>>>;
  NamedEntity?: Maybe<Array<Maybe<NamedEntity>>>;
  Pathway?: Maybe<Array<Maybe<Pathway>>>;
  Polypeptide?: Maybe<Array<Maybe<Polypeptide>>>;
  Protein?: Maybe<Array<Maybe<Protein>>>;
  ProteinTarget?: Maybe<Array<Maybe<ProteinTarget>>>;
  Reference?: Maybe<Array<Maybe<Reference>>>;
  StatementWithEvidence?: Maybe<Array<Maybe<StatementWithEvidence>>>;
  SubcellularLocation?: Maybe<Array<Maybe<SubcellularLocation>>>;
  SubcellularLocationWithEvidence?: Maybe<Array<Maybe<SubcellularLocationWithEvidence>>>;
  Target?: Maybe<Array<Maybe<Target>>>;
  VariantTarget?: Maybe<Array<Maybe<VariantTarget>>>;
};


export type QueryTypeAuthorArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  first_initial?: Maybe<Scalars['String']>;
  first_initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  middle_initial?: Maybe<Scalars['String']>;
  middle_initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeDrugArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  annotationDate?: Maybe<Scalars['String']>;
  annotationDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  concept?: Maybe<Scalars['String']>;
  concepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  definition?: Maybe<Scalars['String']>;
  definitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugCategory?: Maybe<Scalars['String']>;
  drugCategorys?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastics?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmunos?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  modulator?: Maybe<Scalars['String']>;
  modulators?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DrugOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type QueryTypeGeneArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  filter?: Maybe<_GeneFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
};


export type QueryTypeImmunePhenotypeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ImmunePhenotypeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ImmunePhenotypeOrdering>>>;
};


export type QueryTypeInternetReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessed_date?: Maybe<Scalars['String']>;
  accessed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_InternetReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InternetReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  web_address?: Maybe<Scalars['String']>;
  web_addresss?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeIsoformArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_IsoformFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_IsoformOrdering>>>;
};


export type QueryTypeJournalArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JournalFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JournalOrdering>>>;
};


export type QueryTypeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  first_page?: Maybe<Scalars['String']>;
  first_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_page?: Maybe<Scalars['String']>;
  last_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publication_Year?: Maybe<Scalars['String']>;
  publication_Years?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeNamedEntityArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_NamedEntityFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NamedEntityOrdering>>>;
};


export type QueryTypePathwayArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_PathwayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PathwayOrdering>>>;
};


export type QueryTypePolypeptideArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_PolypeptideFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PolypeptideOrdering>>>;
  uniprot_id?: Maybe<Scalars['String']>;
  uniprot_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeProteinArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type QueryTypeProteinTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinTargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinTargetOrdering>>>;
};


export type QueryTypeReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeStatementWithEvidenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeSubcellularLocationArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_SubcellularLocationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubcellularLocationOrdering>>>;
};


export type QueryTypeSubcellularLocationWithEvidenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubcellularLocationWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TargetOrdering>>>;
};


export type QueryTypeVariantTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_VariantTargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VariantTargetOrdering>>>;
};

/** Reference-Node */
export type Reference = {
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  Reference */
  id: Scalars['ID'];
  /** shortReference of  Reference */
  shortReference: Scalars['String'];
  /** Reference statements_referenced StatementWithEvidence */
  statements_referenced: Array<StatementWithEvidence>;
};


/** Reference-Node */
export type ReferenceStatements_ReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** StatementWithEvidence-Node */
export type StatementWithEvidence = {
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  StatementWithEvidence */
  id: Scalars['ID'];
  /** statement of  StatementWithEvidence */
  statement: Scalars['String'];
};

/** Enum for Strand */
export enum Strand {
  /** Value for FORWARD */
  Forward = 'FORWARD',
  /** Value for REVERSE */
  Reverse = 'REVERSE'
}

/** SubcellularLocation-Node */
export type SubcellularLocation = NamedEntity & {
   __typename?: 'SubcellularLocation';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** SubcellularLocation evidence SubcellularLocationWithEvidence */
  evidence: Array<Maybe<SubcellularLocationWithEvidence>>;
  /** id of  SubcellularLocation */
  id: Scalars['ID'];
  /** name of  SubcellularLocation */
  name: Scalars['String'];
};


/** SubcellularLocation-Node */
export type SubcellularLocationEvidenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_SubcellularLocationWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubcellularLocationWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** SubcellularLocationWithEvidence-Node */
export type SubcellularLocationWithEvidence = StatementWithEvidence & {
   __typename?: 'SubcellularLocationWithEvidence';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** id of  SubcellularLocationWithEvidence */
  id: Scalars['ID'];
  /** SubcellularLocationWithEvidence location SubcellularLocation */
  location: SubcellularLocation;
  /** SubcellularLocationWithEvidence protein Protein */
  protein: Protein;
  /** SubcellularLocationWithEvidence reference LiteratureReference */
  reference: Array<Maybe<LiteratureReference>>;
  /** statement of  SubcellularLocationWithEvidence */
  statement: Scalars['String'];
};


/** SubcellularLocationWithEvidence-Node */
export type SubcellularLocationWithEvidenceLocationArgs = {
  filter?: Maybe<_SubcellularLocationFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_SubcellularLocationOrdering>>>;
};


/** SubcellularLocationWithEvidence-Node */
export type SubcellularLocationWithEvidenceProteinArgs = {
  filter?: Maybe<_ProteinFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


/** SubcellularLocationWithEvidence-Node */
export type SubcellularLocationWithEvidenceReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  first_page?: Maybe<Scalars['String']>;
  first_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_page?: Maybe<Scalars['String']>;
  last_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publication_Year?: Maybe<Scalars['String']>;
  publication_Years?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Target-Node */
export type Target = {
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** Target drugs Drug */
  drugs: Array<Maybe<Drug>>;
  /** id of  Target */
  id: Scalars['ID'];
  /** name of  Target */
  name: Scalars['String'];
};


/** Target-Node */
export type TargetDrugsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  annotationDate?: Maybe<Scalars['String']>;
  annotationDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  concept?: Maybe<Scalars['String']>;
  concepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  definition?: Maybe<Scalars['String']>;
  definitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugCategory?: Maybe<Scalars['String']>;
  drugCategorys?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastics?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmunos?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  modulator?: Maybe<Scalars['String']>;
  modulators?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DrugOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

/** VariantTarget-Node */
export type VariantTarget = Target & {
   __typename?: 'VariantTarget';
  /** internal node id */
  _id?: Maybe<Scalars['Long']>;
  /** VariantTarget drugs Drug */
  drugs: Array<Maybe<Drug>>;
  /** id of  VariantTarget */
  id: Scalars['ID'];
  /** name of  VariantTarget */
  name: Scalars['String'];
  /** VariantTarget protein Protein */
  protein: Protein;
};


/** VariantTarget-Node */
export type VariantTargetDrugsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  annotationDate?: Maybe<Scalars['String']>;
  annotationDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  concept?: Maybe<Scalars['String']>;
  concepts?: Maybe<Array<Maybe<Scalars['String']>>>;
  definition?: Maybe<Scalars['String']>;
  definitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  drugCategory?: Maybe<Scalars['String']>;
  drugCategorys?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastics?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmunos?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  modulator?: Maybe<Scalars['String']>;
  modulators?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DrugOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


/** VariantTarget-Node */
export type VariantTargetProteinArgs = {
  filter?: Maybe<_ProteinFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type DrugQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DrugQuery = (
  { __typename?: 'QueryType' }
  & { Drug: Maybe<Array<Maybe<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'name' | 'drugCategory' | 'definition' | 'concept' | 'isAntineoplastic' | 'isImmuno' | 'modulator' | 'synonyms' | 'annotationDate'>
    & { target: Array<Maybe<(
      { __typename: 'ProteinTarget' }
      & Pick<ProteinTarget, 'id' | 'name'>
    ) | (
      { __typename: 'VariantTarget' }
      & Pick<VariantTarget, 'id' | 'name'>
    )>> }
  )>>> }
);

export type DrugListQueryVariables = {
  str?: Maybe<Scalars['String']>;
  ustr?: Maybe<Scalars['String']>;
};


export type DrugListQuery = (
  { __typename?: 'QueryType' }
  & { Drug: Maybe<Array<Maybe<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'name' | 'drugCategory'>
  )>>> }
);

export type PolypeptideQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type PolypeptideQuery = (
  { __typename?: 'QueryType' }
  & { Polypeptide: Maybe<Array<Maybe<(
    { __typename?: 'Polypeptide' }
    & Pick<Polypeptide, 'id' | 'name' | 'uniprot_id' | 'accessionNumber'>
    & { gene: (
      { __typename?: 'Gene' }
      & Pick<Gene, 'name' | 'id' | 'chromosome' | 'start' | 'end' | 'strand'>
      & { reference: (
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'shortReference' | 'web_address'>
      ) }
    ), transcript: (
      { __typename?: 'Isoform' }
      & Pick<Isoform, 'name' | 'id'>
    ) }
  )>>> }
);

export type ProteinQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type ProteinQuery = (
  { __typename?: 'QueryType' }
  & { Protein: Maybe<Array<Maybe<(
    { __typename?: 'Protein' }
    & Pick<Protein, 'id' | 'name'>
    & { polypeptide_chains: Array<Maybe<(
      { __typename?: 'Polypeptide' }
      & Pick<Polypeptide, 'name' | 'id'>
    )>>, location: Array<Maybe<(
      { __typename?: 'SubcellularLocationWithEvidence' }
      & Pick<SubcellularLocationWithEvidence, 'id'>
    )>> }
  )>>> }
);

export type ProteinTargetQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type ProteinTargetQuery = (
  { __typename?: 'QueryType' }
  & { ProteinTarget: Maybe<Array<Maybe<(
    { __typename?: 'ProteinTarget' }
    & Pick<ProteinTarget, 'id' | 'name'>
    & { protein: (
      { __typename?: 'Protein' }
      & Pick<Protein, 'id' | 'name'>
    ), drugs: Array<Maybe<(
      { __typename?: 'Drug' }
      & Pick<Drug, 'name' | 'id'>
    )>> }
  )>>> }
);

export type SubcellularLocationWithEvidenceQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type SubcellularLocationWithEvidenceQuery = (
  { __typename?: 'QueryType' }
  & { SubcellularLocationWithEvidence: Maybe<Array<Maybe<(
    { __typename?: 'SubcellularLocationWithEvidence' }
    & { location: (
      { __typename?: 'SubcellularLocation' }
      & Pick<SubcellularLocation, 'name'>
    ), reference: Array<Maybe<(
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference' | 'PMID'>
    )>> }
  )>>> }
);

export type VariantTargetQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type VariantTargetQuery = (
  { __typename?: 'QueryType' }
  & { VariantTarget: Maybe<Array<Maybe<(
    { __typename?: 'VariantTarget' }
    & Pick<VariantTarget, 'id' | 'name'>
    & { protein: (
      { __typename?: 'Protein' }
      & Pick<Protein, 'id' | 'name'>
    ), drugs: Array<Maybe<(
      { __typename?: 'Drug' }
      & Pick<Drug, 'name' | 'id'>
    )>> }
  )>>> }
);


export const DrugDocument = gql`
    query Drug($id: ID) {
  Drug(id: $id) {
    id
    name
    drugCategory
    definition
    concept
    isAntineoplastic
    isImmuno
    modulator
    synonyms
    annotationDate
    target {
      id
      name
      __typename
    }
  }
}
    `;
export type DrugComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DrugQuery, DrugQueryVariables>, 'query'>;

    export const DrugComponent = (props: DrugComponentProps) => (
      <ApolloReactComponents.Query<DrugQuery, DrugQueryVariables> query={DrugDocument} {...props} />
    );
    
export type DrugProps<TChildProps = {}> = ApolloReactHoc.DataProps<DrugQuery, DrugQueryVariables> & TChildProps;
export function withDrug<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DrugQuery,
  DrugQueryVariables,
  DrugProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, DrugQuery, DrugQueryVariables, DrugProps<TChildProps>>(DrugDocument, {
      alias: 'drug',
      ...operationOptions
    });
};

/**
 * __useDrugQuery__
 *
 * To run a query within a React component, call `useDrugQuery` and pass it any options that fit your needs.
 * When your component renders, `useDrugQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDrugQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDrugQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DrugQuery, DrugQueryVariables>) {
        return ApolloReactHooks.useQuery<DrugQuery, DrugQueryVariables>(DrugDocument, baseOptions);
      }
export function useDrugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DrugQuery, DrugQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DrugQuery, DrugQueryVariables>(DrugDocument, baseOptions);
        }
export type DrugQueryHookResult = ReturnType<typeof useDrugQuery>;
export type DrugLazyQueryHookResult = ReturnType<typeof useDrugLazyQuery>;
export type DrugQueryResult = ApolloReactCommon.QueryResult<DrugQuery, DrugQueryVariables>;
export const DrugListDocument = gql`
    query DrugList($str: String, $ustr: String) {
  Drug(orderBy: name_asc, filter: {OR: [{name_contains: $str}, {name_contains: $ustr}]}) {
    id
    name
    drugCategory
  }
}
    `;
export type DrugListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DrugListQuery, DrugListQueryVariables>, 'query'>;

    export const DrugListComponent = (props: DrugListComponentProps) => (
      <ApolloReactComponents.Query<DrugListQuery, DrugListQueryVariables> query={DrugListDocument} {...props} />
    );
    
export type DrugListProps<TChildProps = {}> = ApolloReactHoc.DataProps<DrugListQuery, DrugListQueryVariables> & TChildProps;
export function withDrugList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DrugListQuery,
  DrugListQueryVariables,
  DrugListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, DrugListQuery, DrugListQueryVariables, DrugListProps<TChildProps>>(DrugListDocument, {
      alias: 'drugList',
      ...operationOptions
    });
};

/**
 * __useDrugListQuery__
 *
 * To run a query within a React component, call `useDrugListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDrugListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDrugListQuery({
 *   variables: {
 *      str: // value for 'str'
 *      ustr: // value for 'ustr'
 *   },
 * });
 */
export function useDrugListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DrugListQuery, DrugListQueryVariables>) {
        return ApolloReactHooks.useQuery<DrugListQuery, DrugListQueryVariables>(DrugListDocument, baseOptions);
      }
export function useDrugListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DrugListQuery, DrugListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DrugListQuery, DrugListQueryVariables>(DrugListDocument, baseOptions);
        }
export type DrugListQueryHookResult = ReturnType<typeof useDrugListQuery>;
export type DrugListLazyQueryHookResult = ReturnType<typeof useDrugListLazyQuery>;
export type DrugListQueryResult = ApolloReactCommon.QueryResult<DrugListQuery, DrugListQueryVariables>;
export const PolypeptideDocument = gql`
    query Polypeptide($id: ID) {
  Polypeptide(id: $id) {
    id
    name
    uniprot_id
    accessionNumber
    gene {
      name
      id
      chromosome
      start
      end
      strand
      reference {
        shortReference
        web_address
      }
    }
    transcript {
      name
      id
    }
  }
}
    `;
export type PolypeptideComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PolypeptideQuery, PolypeptideQueryVariables>, 'query'>;

    export const PolypeptideComponent = (props: PolypeptideComponentProps) => (
      <ApolloReactComponents.Query<PolypeptideQuery, PolypeptideQueryVariables> query={PolypeptideDocument} {...props} />
    );
    
export type PolypeptideProps<TChildProps = {}> = ApolloReactHoc.DataProps<PolypeptideQuery, PolypeptideQueryVariables> & TChildProps;
export function withPolypeptide<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PolypeptideQuery,
  PolypeptideQueryVariables,
  PolypeptideProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PolypeptideQuery, PolypeptideQueryVariables, PolypeptideProps<TChildProps>>(PolypeptideDocument, {
      alias: 'polypeptide',
      ...operationOptions
    });
};

/**
 * __usePolypeptideQuery__
 *
 * To run a query within a React component, call `usePolypeptideQuery` and pass it any options that fit your needs.
 * When your component renders, `usePolypeptideQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePolypeptideQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePolypeptideQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PolypeptideQuery, PolypeptideQueryVariables>) {
        return ApolloReactHooks.useQuery<PolypeptideQuery, PolypeptideQueryVariables>(PolypeptideDocument, baseOptions);
      }
export function usePolypeptideLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PolypeptideQuery, PolypeptideQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PolypeptideQuery, PolypeptideQueryVariables>(PolypeptideDocument, baseOptions);
        }
export type PolypeptideQueryHookResult = ReturnType<typeof usePolypeptideQuery>;
export type PolypeptideLazyQueryHookResult = ReturnType<typeof usePolypeptideLazyQuery>;
export type PolypeptideQueryResult = ApolloReactCommon.QueryResult<PolypeptideQuery, PolypeptideQueryVariables>;
export const ProteinDocument = gql`
    query Protein($id: ID) {
  Protein(id: $id) {
    id
    name
    polypeptide_chains {
      name
      id
    }
    location {
      id
    }
  }
}
    `;
export type ProteinComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProteinQuery, ProteinQueryVariables>, 'query'>;

    export const ProteinComponent = (props: ProteinComponentProps) => (
      <ApolloReactComponents.Query<ProteinQuery, ProteinQueryVariables> query={ProteinDocument} {...props} />
    );
    
export type ProteinProps<TChildProps = {}> = ApolloReactHoc.DataProps<ProteinQuery, ProteinQueryVariables> & TChildProps;
export function withProtein<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProteinQuery,
  ProteinQueryVariables,
  ProteinProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ProteinQuery, ProteinQueryVariables, ProteinProps<TChildProps>>(ProteinDocument, {
      alias: 'protein',
      ...operationOptions
    });
};

/**
 * __useProteinQuery__
 *
 * To run a query within a React component, call `useProteinQuery` and pass it any options that fit your needs.
 * When your component renders, `useProteinQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProteinQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProteinQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProteinQuery, ProteinQueryVariables>) {
        return ApolloReactHooks.useQuery<ProteinQuery, ProteinQueryVariables>(ProteinDocument, baseOptions);
      }
export function useProteinLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProteinQuery, ProteinQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProteinQuery, ProteinQueryVariables>(ProteinDocument, baseOptions);
        }
export type ProteinQueryHookResult = ReturnType<typeof useProteinQuery>;
export type ProteinLazyQueryHookResult = ReturnType<typeof useProteinLazyQuery>;
export type ProteinQueryResult = ApolloReactCommon.QueryResult<ProteinQuery, ProteinQueryVariables>;
export const ProteinTargetDocument = gql`
    query ProteinTarget($id: ID) {
  ProteinTarget(id: $id) {
    id
    name
    protein {
      id
      name
    }
    drugs {
      name
      id
    }
  }
}
    `;
export type ProteinTargetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProteinTargetQuery, ProteinTargetQueryVariables>, 'query'>;

    export const ProteinTargetComponent = (props: ProteinTargetComponentProps) => (
      <ApolloReactComponents.Query<ProteinTargetQuery, ProteinTargetQueryVariables> query={ProteinTargetDocument} {...props} />
    );
    
export type ProteinTargetProps<TChildProps = {}> = ApolloReactHoc.DataProps<ProteinTargetQuery, ProteinTargetQueryVariables> & TChildProps;
export function withProteinTarget<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProteinTargetQuery,
  ProteinTargetQueryVariables,
  ProteinTargetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ProteinTargetQuery, ProteinTargetQueryVariables, ProteinTargetProps<TChildProps>>(ProteinTargetDocument, {
      alias: 'proteinTarget',
      ...operationOptions
    });
};

/**
 * __useProteinTargetQuery__
 *
 * To run a query within a React component, call `useProteinTargetQuery` and pass it any options that fit your needs.
 * When your component renders, `useProteinTargetQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProteinTargetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProteinTargetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProteinTargetQuery, ProteinTargetQueryVariables>) {
        return ApolloReactHooks.useQuery<ProteinTargetQuery, ProteinTargetQueryVariables>(ProteinTargetDocument, baseOptions);
      }
export function useProteinTargetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProteinTargetQuery, ProteinTargetQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProteinTargetQuery, ProteinTargetQueryVariables>(ProteinTargetDocument, baseOptions);
        }
export type ProteinTargetQueryHookResult = ReturnType<typeof useProteinTargetQuery>;
export type ProteinTargetLazyQueryHookResult = ReturnType<typeof useProteinTargetLazyQuery>;
export type ProteinTargetQueryResult = ApolloReactCommon.QueryResult<ProteinTargetQuery, ProteinTargetQueryVariables>;
export const SubcellularLocationWithEvidenceDocument = gql`
    query SubcellularLocationWithEvidence($id: ID) {
  SubcellularLocationWithEvidence(id: $id) {
    location {
      name
    }
    reference {
      shortReference
      PMID
    }
  }
}
    `;
export type SubcellularLocationWithEvidenceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables>, 'query'>;

    export const SubcellularLocationWithEvidenceComponent = (props: SubcellularLocationWithEvidenceComponentProps) => (
      <ApolloReactComponents.Query<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables> query={SubcellularLocationWithEvidenceDocument} {...props} />
    );
    
export type SubcellularLocationWithEvidenceProps<TChildProps = {}> = ApolloReactHoc.DataProps<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables> & TChildProps;
export function withSubcellularLocationWithEvidence<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SubcellularLocationWithEvidenceQuery,
  SubcellularLocationWithEvidenceQueryVariables,
  SubcellularLocationWithEvidenceProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables, SubcellularLocationWithEvidenceProps<TChildProps>>(SubcellularLocationWithEvidenceDocument, {
      alias: 'subcellularLocationWithEvidence',
      ...operationOptions
    });
};

/**
 * __useSubcellularLocationWithEvidenceQuery__
 *
 * To run a query within a React component, call `useSubcellularLocationWithEvidenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubcellularLocationWithEvidenceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubcellularLocationWithEvidenceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubcellularLocationWithEvidenceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables>) {
        return ApolloReactHooks.useQuery<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables>(SubcellularLocationWithEvidenceDocument, baseOptions);
      }
export function useSubcellularLocationWithEvidenceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables>(SubcellularLocationWithEvidenceDocument, baseOptions);
        }
export type SubcellularLocationWithEvidenceQueryHookResult = ReturnType<typeof useSubcellularLocationWithEvidenceQuery>;
export type SubcellularLocationWithEvidenceLazyQueryHookResult = ReturnType<typeof useSubcellularLocationWithEvidenceLazyQuery>;
export type SubcellularLocationWithEvidenceQueryResult = ApolloReactCommon.QueryResult<SubcellularLocationWithEvidenceQuery, SubcellularLocationWithEvidenceQueryVariables>;
export const VariantTargetDocument = gql`
    query VariantTarget($id: ID) {
  VariantTarget(id: $id) {
    id
    name
    protein {
      id
      name
    }
    drugs {
      name
      id
    }
  }
}
    `;
export type VariantTargetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VariantTargetQuery, VariantTargetQueryVariables>, 'query'>;

    export const VariantTargetComponent = (props: VariantTargetComponentProps) => (
      <ApolloReactComponents.Query<VariantTargetQuery, VariantTargetQueryVariables> query={VariantTargetDocument} {...props} />
    );
    
export type VariantTargetProps<TChildProps = {}> = ApolloReactHoc.DataProps<VariantTargetQuery, VariantTargetQueryVariables> & TChildProps;
export function withVariantTarget<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantTargetQuery,
  VariantTargetQueryVariables,
  VariantTargetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, VariantTargetQuery, VariantTargetQueryVariables, VariantTargetProps<TChildProps>>(VariantTargetDocument, {
      alias: 'variantTarget',
      ...operationOptions
    });
};

/**
 * __useVariantTargetQuery__
 *
 * To run a query within a React component, call `useVariantTargetQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantTargetQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantTargetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVariantTargetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VariantTargetQuery, VariantTargetQueryVariables>) {
        return ApolloReactHooks.useQuery<VariantTargetQuery, VariantTargetQueryVariables>(VariantTargetDocument, baseOptions);
      }
export function useVariantTargetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VariantTargetQuery, VariantTargetQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VariantTargetQuery, VariantTargetQueryVariables>(VariantTargetDocument, baseOptions);
        }
export type VariantTargetQueryHookResult = ReturnType<typeof useVariantTargetQuery>;
export type VariantTargetLazyQueryHookResult = ReturnType<typeof useVariantTargetLazyQuery>;
export type VariantTargetQueryResult = ApolloReactCommon.QueryResult<VariantTargetQuery, VariantTargetQueryVariables>;