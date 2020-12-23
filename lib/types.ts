export type SchemaTypeName = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array' | 'null';

export type SchemaType = string | number | boolean | SchemaObject | SchemaArray | null;

export interface SchemaObject {
  [key: string]: SchemaType;
}

export interface SchemaArray extends Array<SchemaType> {}

export type SchemaDefinition = Schema | boolean;
export interface Schema {
  type?: SchemaTypeName | SchemaTypeName[];
  enum?: SchemaType[];

  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;

  maxLength?: number;
  minLength?: number;
  pattern?: string;

  items?: SchemaDefinition | SchemaDefinition[];
  additionalItems?: SchemaDefinition;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  contains?: Schema;

  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  properties?: {
    [key: string]: SchemaDefinition;
  };
  patternProperties?: {
    [key: string]: SchemaDefinition;
  };
  additionalProperties?: SchemaDefinition;
  dependencies?: {
    [key: string]: SchemaDefinition | string[];
  };
  propertyNames?: SchemaDefinition;

  if?: SchemaDefinition;
  then?: SchemaDefinition;
  else?: SchemaDefinition;

  allOf?: SchemaDefinition[];
  anyOf?: SchemaDefinition[];
  oneOf?: SchemaDefinition[];
  not?: SchemaDefinition;

  format?: string;

  definitions?: {
    [key: string]: SchemaDefinition;
  };

  default?: SchemaType;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  property: string;
  message: string;
}
