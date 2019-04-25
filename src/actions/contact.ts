import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const setTitle = actionCreator<string>('SET_TITLE')
export const setEmail = actionCreator<string>('SET_EMAIL')
export const setContent = actionCreator<string>('SET_CONTENT')
export const setToken = actionCreator<string>('SET_TOKEN')

export const requestSubmit = actionCreator('REQUEST_SUBMIT')
export const successSubmit = actionCreator('SUCCESS_SUBMIT')
export const faildSubmit = actionCreator<any>('FAILD_SUBMIT')
