import alert from './alert.svg'
import empty from './empty.svg'
import loading from './loading.svg'
import locked from './locked.svg'
import not_found from './not_found.svg'
import success from './success.svg'

export enum State {
  ALERT,
  EMPTY,
  LOADING,
  LOCKED,
  NOT_FOUND,
  SUCCESS,
}

export const getState = (state: State): string => {
  switch (state) {
    case State.ALERT:
      return alert
    case State.EMPTY:
      return empty
    case State.LOADING:
      return loading
    case State.LOCKED:
      return locked
    case State.NOT_FOUND:
      return not_found
    case State.SUCCESS:
      return success
  }
}
