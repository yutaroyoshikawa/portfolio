import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const increment = actionCreator('INCREMENT')
