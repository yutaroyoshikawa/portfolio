import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const showAleart = actionCreator('SHOW_ALEART')
export const hideAleart = actionCreator('HIDE_ALEART')
