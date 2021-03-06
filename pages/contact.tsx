import * as Styled from '../src/styles/contact'
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { SlideInType, Aleart } from '../src/components'
import * as actions from '../src/actions/contact'
import { IContactState } from '../src/reducers/contact'
import { isEmail } from 'validator'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { showAleart } from '../src/actions/aleart'
import Head from 'next/head'

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

  const ref = useRef<HTMLMainElement>(null)

  const title = useMappedState(titleMapState)
  const email = useMappedState(emailMapState)
  const content = useMappedState(contentMapState)

  const [xindex, _xindex] = useState(0)

  const dispatch = useDispatch()
  const setTitle = (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setTitle(e.target.value))
  const setEmail = (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setEmail(e.target.value))
  const setContent = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(actions.setContent(e.target.value))

  const hundleSubmit = async (e: FormEvent<HTMLFormElement>, submitContact: any) => {
    e.preventDefault()
    try {
      await submitContact({
        variables: 
          {
            title,
            email,
            content,
          }
      })
      await dispatch(actions.successSubmit())
      await dispatch(showAleart())
    } catch (e) {
      await dispatch(actions.faildSubmit(e))
    }
  }

  const checkcursor = (e: any) => {
    _xindex(e.pageX)
  }

  const checkDevicemotion = (e: any) => {
    _xindex(e.accelerationIncludingGravity.x)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mousemove', checkcursor)
      ref.current.addEventListener('devicemotion', checkDevicemotion)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', checkcursor)
        ref.current.removeEventListener('devicemotion', checkDevicemotion)
      }
    }
  }, [])

  const SUBMIT_CONTACT = gql`
    mutation contact($title: String!, $email: String!, $content: String!) {
      contact(title: $title, email: $email, content: $content) {
        posted_at
      }
    }
  `

  return (
    <Mutation mutation={SUBMIT_CONTACT}>
    {
      (submitContact, { loading }) => (
        <Styled.Entire ref={ref}>
          <Head>
            <title>吉川勇太郎のポートフォリオ｜Contact</title>
          </Head>
          <Aleart />
          <Styled.FormWrapper
            itemProp={xindex.toString()}
          >
            <Styled.FormTitle>
              <SlideInType content="contact" baseDelay={300} />
            </Styled.FormTitle>
            <Styled.Form
              onSubmit={e => {
                hundleSubmit(e, submitContact)
              }}
              itemProp={xindex}
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
                  disabled={!loading && title && isEmail(email) && content ? false : true}
                >
                  <Styled.SenderIcon icon={faPaperPlane} />
                </Styled.Sender>
              </Styled.SenderWrapper>
            </Styled.Form>
          </Styled.FormWrapper>
        </Styled.Entire>
      )
    }
    </Mutation>
  )
}
