import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerModule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Module, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly level: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Module, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly level: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Module = LazyLoading extends LazyLoadingDisabled ? EagerModule : LazyModule

export declare const Module: (new (init: ModelInit<Module>) => Module) & {
  copyOf(source: Module, mutator: (draft: MutableModel<Module>) => MutableModel<Module> | void): Module;
}