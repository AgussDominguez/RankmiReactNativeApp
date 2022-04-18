export enum inputFieldNames {
  username = 'username',
  password = 'password',
}

export interface inputField {
  fieldName: inputFieldNames;
  value: string;
}
