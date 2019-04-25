import actionCreatorFactory from 'typescript-fsa'
import { ISkills } from '../reducers/about'

const actionCreator = actionCreatorFactory()

export const setSkills = actionCreator<ISkills[]>('SET_SKILLS')
