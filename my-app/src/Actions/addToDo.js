import { ADD_TODO } from '../types'

export const addToDo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})