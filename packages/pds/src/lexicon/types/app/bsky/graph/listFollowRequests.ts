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
import type * as AppBskyGraphDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.bsky.graph.listFollowRequests'

export type QueryParams = {
  /** Direction of follow requests: 'incoming' for requests to follow you, 'outgoing' for your requests to follow others */
  direction: 'incoming' | 'outgoing'
  /** Filter by request status. 'all' returns requests of any status. */
  status: 'pending' | 'approved' | 'denied' | 'all'
  /** Maximum number of results to return */
  limit: number
  /** Pagination cursor from previous response */
  cursor?: string
}
export type InputSchema = undefined

export interface OutputSchema {
  /** Pagination cursor for next page of results */
  cursor?: string
  /** List of follow request views */
  requests: AppBskyGraphDefs.FollowRequestView[]
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
}

export type HandlerOutput = HandlerError | HandlerSuccess
