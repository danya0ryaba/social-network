import { ProfilePageType, addPostActionCreator, deletePostActionCreator, profileReducer } from "./profile-reducer"

const initialState: ProfilePageType = {
    post: [
        { message: 'Wayww of the samurai', id: 1, like: 20 },
        { message: 'React kabzda kak prostoax', id: 2, like: 0 }
    ],
    profile: null,
    status: ''
}

it('test on profile-reducer', () => {
    // 1 staart test data
    let action = addPostActionCreator('danya testing')

    // 2 action
    let newState = profileReducer(initialState, action)
    // 3 expectation
    expect(newState.post.length).toBe(3)
})

it('testing profile-reducer', () => {
    let action = addPostActionCreator('danya222')
    let newState = profileReducer(initialState, action)
    expect(newState.post[2].message).toBe('danya222')
})

it('after deleting length of message should be decrement', () => {
    let action = deletePostActionCreator(1)
    let newState = profileReducer(initialState, action)

    expect(newState.post.length).toBe(1)
})