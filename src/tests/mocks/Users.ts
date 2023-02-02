import { IUser } from "interfaces/IUsers"

export const userMock: IUser = {
  id: 1,
  name: 'usermock',
  tax: 43
}

export const listUsersMock: IUser[] = [
  {
    id: 1,
    name: 'usermock',
    tax: 43
  },
  {
    id: 2,
    name: 'otherMock',
    tax: 75
  },
]