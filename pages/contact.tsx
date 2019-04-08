import * as Styled from '../src/styles/contact'
import { ChangeEvent, FormEvent, useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { SlideInType } from '../src/components'
import * as actions from '../src/actions/contact'
import { IContactState } from '../src/reducers/contact'
import { isEmail } from 'validator'

export default () => {
  const titleMapState = useCallback(
    (state: IContactState) => state.contact.form.title,
    []
  )

  const emailMapState = useCallback(
    (state: IContactState) => state.contact.form.email,
    []
  )

  const contentMapState = useCallback(
    (state: IContactState) => state.contact.form.content,
    []
  )

  const title = useMappedState(titleMapState)
  const email = useMappedState(emailMapState)
  const content = useMappedState(contentMapState)

  const dispatch = useDispatch()
  const setTitle = (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setTitle(e.target.value))
  const setEmail = (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setEmail(e.target.value))
  const setContent = (e: ChangeEvent) => dispatch(actions.setContent(e.target.value))

  const hundleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(actions.requestSubmit())
  }

  return (
    <Styled.Entire>
      <Styled.FormWrapper>
        <Styled.FormTitle>
          <SlideInType content="contact" baseDelay={300} />
        </Styled.FormTitle>
        <Styled.Form
          onSubmit={hundleSubmit}
        >
          <Styled.InputWrapper>
            <Styled.ContactTitle
              type="text"
              placeholder="title"
              value={title}
              onChange={setTitle}
              required={true}
            />
            <Styled.ContactFrom
              type="email"
              placeholder="email"
              value={email}
              onChange={setEmail}
              required={true}
            />
            <Styled.ContactContent
              placeholder="content"
              value={content}
              onChange={setContent}
              required={true}
            />
          </Styled.InputWrapper>
          <Styled.SenderWrapper>
            <Styled.Sender
              type="submit"
              disabled={title && isEmail(email) && content ? false : true}
            >
              submit
            </Styled.Sender>
          </Styled.SenderWrapper>
        </Styled.Form>
      </Styled.FormWrapper>
    </Styled.Entire>
  )
}
