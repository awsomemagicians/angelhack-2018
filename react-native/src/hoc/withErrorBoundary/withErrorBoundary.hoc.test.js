import { NetInfo, Platform } from 'react-native'

import { callbacks, handlers } from './withErrorBoundary.hoc'

jest.mock('NetInfo', () => ({
  isConnected: {
    removeEventListener: jest.fn(),
    addEventListener: jest.fn(),
    fetch: jest.fn(() => Promise.resolve(true))
  }
}))

describe('HOC withErrorBoundary', () => {
  describe('callbacks', () => {
    callbacks.props = {
      updateConnected: jest.fn(),
      handleNetwork: jest.fn()
    }
    describe('componentWillUnmount', () => {
      test('should remove event listener', () => {
        callbacks.componentWillUnmount()
        expect(NetInfo.isConnected.removeEventListener).toBeCalled()
      })
    })
    describe('componentDidMount', () => {
      test('should add event handler', async () => {
        await callbacks.componentDidMount()
        expect(NetInfo.isConnected.addEventListener).toBeCalled()
      })
      test('should call updateConnected', async () => {
        Platform.OS = 'android'
        await callbacks.componentDidMount()
        expect(callbacks.props.updateConnected).toBeCalled()
      })
    })
  })
  describe('handlers', () => {
    describe('handleNetwork', () => {
      const props = {
        updateConnected: jest.fn(),
        hideNotification: jest.fn()
      }
      test('should show error message when disconnected', () => {
        handlers.handleNetwork(props)(false)
        expect(props.updateConnected).toBeCalledWith(false)
      })
      test('should not show error message when connected', () => {
        handlers.handleNetwork(props)(true)
        expect(props.updateConnected).toBeCalledWith(true)
      })
    })
  })
})
