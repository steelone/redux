import './styles.css'
import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'
import { INCREMENT, DECREMENT } from './redux/types'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0)

window.store = store

addBtn.addEventListener('click', () => {
    store.dispatch(increment)
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement)
})
asyncBtn.addEventListener('click', () => {

})
themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})
store.subscribe(() => {
    // console.log(store.getState())
    const state = store.getState()

    counter.textContent = state
})
store.dispatch({type: 'INIT_APPLICATION'})

