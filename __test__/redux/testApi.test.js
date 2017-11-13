import { Observable } from 'rxjs/Observable'
import { ActionsObservable } from 'redux-observable'
import { testApiEpic, requestTestApi, successTestApi, failureTestApi } from '../../src/redux/testApi'
import 'rxjs/add/operator/toArray'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const method = 'GET'
const response = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}

describe('testApi side-effect', () => {
  it('returns a success action', done => {
    const action$ = ActionsObservable.of(requestTestApi())
    const store = null // not used by epic

    const dependencies = {
      ajax: (url, method) => Observable.of({ response })
    }

    testApiEpic(action$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual([
          successTestApi(response)
        ])
        done()
      })
  })

  it('receives correct response from server', async () => {
    const { data } = await axios({ url, method })
    expect(data).toMatchObject(response)
  })

  it('returns a failure action', done => {
    const action$ = ActionsObservable.of(requestTestApi())
    const store = null // not used by epic
    const dependencies = {
      ajax: (url, method) => Observable.throw({ name: 'error name' })
    }

    testApiEpic(action$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual([
          failureTestApi('error name')
        ])

        done()
      })
  })

  // todo: make this works
  // it('supports cancellation', (done) => {
  //   const action$ = ActionsObservable.of(requestTestApi())
  //   const store = null // not used by epic
  //   const dependencies = {
  //     ajax: (url, method) => Observable.of({ response })
  //   }
  //   const onNext = jest.fn()
  //   testApiEpic(action$, store, dependencies)
  //     .toArray()
  //     .subscribe({
  //       next: onNext,
  //       complete: () => {
  //         expect(onNext.mock.calls.length).toBe(1)

  //         done()
  //       }
  //     })
  // })
})
