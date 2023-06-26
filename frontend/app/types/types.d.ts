export interface AuthContextValue {
  isLoggedIn: boolean;
  token: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export enum Sex {
  M = "M",
  F = "F",
}

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}


export interface CreatePet {
  name: string;
  species: string;
  size: Size;
  weight: number;
  race: string;
  sex: Sex;
  image: string;
  city: string;
  state: string;
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
  pet: PetData;
  imageClick: (pet: PetData) => void;
}

export interface PetModalProps {
  pet: PetData | null;
  closeModal: () => void;
}
