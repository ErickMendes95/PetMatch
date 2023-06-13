export function DuplicatedEmailError(){
    return {
        name: 'DuplicatedEmailError',
        message: 'There is already an user with the given email',
    }
}