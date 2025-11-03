/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.bsky.actor.getPrivacySettings'

export type QueryParams = {
  /** The actor whose privacy settings to retrieve. If not specified, returns settings for the authenticated user. */
  actor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  /** Whether the profile is private and requires follow request approval */
  isPrivate: boolean
}

export type HandlerInput = void

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'NotFound' | 'NotAuthorized'
}

export type HandlerOutput = HandlerError | HandlerSuccess
