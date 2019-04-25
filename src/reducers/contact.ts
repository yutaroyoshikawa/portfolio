import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/contact'

export interface IForm {
  title: string
  email: string
  content: string
}

interface IContact {
  isLoading: boolean
  errorMessage: string
  form: IForm
}

export interface IContactState {
  contact: IContact
}

const initialReduceContactState: IContact = {
  isLoading: false,
  errorMessage: '',
  form: {
    title: '',
    email: '',
    content: '',
  }
}

export default reducerWithInitialState(initialReduceContactState)
  .case(actions.setTitle, (state: IContact, payload): IContact => ({
    ...state,
    form: {
      ...state.form,
      title: payload,
    }
  }))
  .case(actions.setEmail, (state: IContact, payload): IContact => ({
    ...state,
    form: {
      ...state.form,
      email: payload,
    }
  }))
  .case(actions.setContent, (state: IContact, payload): IContact => ({
    ...state,
    form: {
      ...state.form,
      content: payload,
    }
  }))
  .case(actions.requestSubmit, (state: IContact): IContact => ({
    ...state,
    isLoading: true,
  }))
  .case(actions.successSubmit, (state: IContact): IContact => ({
    ...state,
    isLoading: false,
    form: {
      ...state.form,
      title: '',
      email: '',
      content: '',
    }
  }))
  .case(actions.faildSubmit, (state: IContact, payload): IContact => ({
    ...state,
    isLoading: false,
    errorMessage: payload,
  }))
  .build()
