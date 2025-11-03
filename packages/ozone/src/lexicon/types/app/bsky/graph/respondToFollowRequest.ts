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
import type * as ComAtprotoRepoStrongRef from '../../../com/atproto/repo/strongRef.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.bsky.graph.respondToFollowRequest'

export type QueryParams = {}

export interface InputSchema {
  /** AT-URI of the follow request record to respond to */
  requestUri: string
  /** Whether to approve or deny the follow request */
  response: 'approve' | 'deny'
}

export interface OutputSchema {
  request: ComAtprotoRepoStrongRef.Main
  followRecord?: ComAtprotoRepoStrongRef.Main
}

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
  error?: 'RequestNotFound' | 'InvalidResponse' | 'NotAuthorized'
}

export type HandlerOutput = HandlerError | HandlerSuccess
