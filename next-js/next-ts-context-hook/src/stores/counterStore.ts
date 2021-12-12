import { makeAutoObservable, autorun, runInAction, reaction } from 'mobx'

export class CounterStore {
  private _counter

  constructor() {
    makeAutoObservable(this)
    this._counter = new Counter()
  }

  get counter() {
    return this._counter
  }

  resetStore() {
    this._counter = new Counter()
  }
}

// Domain object Counter.
export class Counter {
  private _count = 0
  constructor(count = 0) {
    makeAutoObservable(this)
    this._count = count
  }

  get count() {
    return this._count
  }

  increaseCount() {
    ++this._count
  }
}
