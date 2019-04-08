import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const changeIntro = actionCreator('CHANGE_INTRO')
export const changeSkills = actionCreator('CHANGE_SKILLS')
