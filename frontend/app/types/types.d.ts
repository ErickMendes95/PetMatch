export enum Sex {
  M = "M",
  F = "F",
}

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface PetData {
  id: number;
  name: string;
  isAdopted: boolean;
  species: string;
  size: Size;
  weight: number;
  race: string;
  sex: Sex;
  image: string;
  city: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface PetCardProps {
  key: number;
  pet: PetData
}