export type UserDataType = {
    id: number
    firstName: string
    lastName: string
    avatar: string | null
    location: {
        country: string
        city: string
    },
    skills: string[]
    role: string
}

export const UserData: Array<UserDataType> = [
    {
        id: 1,
        firstName: 'Test first',
        lastName: 'Test last',
        avatar: 'https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png',
        location: {
            country: 'Belarus',
            city: 'Minsk',
        },
        skills: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Nest JS', 'Mongo DB', 'C#'],
        role: 'Boss'
    },
  {
        id: 2,
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png',
        location: {
            country: 'Belarus',
            city: 'Vitebsk',
        },
        skills: ['RN'],
        role: 'User'
    },
]
