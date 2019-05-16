import { Module } from 'react-360-web';
import EventEmitter from 'EventEmitter';

/**
 * Demonstration of a custom Native Module, used to send browser information
 * to the React application.
 */
export default class NativeModule extends Module {
  _emitter = new EventEmitter();
  constructor(ctx) {
    super('NativeModule');
    this._rnctx = ctx;
  }

  applyDataCallback(callback) {
    console.log('applyDataCallback');
    debugger;
    this._emitter.addListener('test', (type, event) => {
      console.log('EVENT', type, event);
    });
  }

  getData(callback) {
    // AsyncStorage.getItem('r360-location-data').then(
    //   newData => {
    //     if (this._rnctx) {
    //       if (result) {
    //         this._rnctx.invokeCallback(resolve, newData);
    //       } else {
    //         // When rejecting a Promise, a message should be provided to populate
    //         // the Error object on the React side
    //         this._rnctx.invokeCallback(reject, [{ message: 'There was an error' }]);
    //       }
    //     }
    //   },
    //   () => {
    //     this._rnctx.invokeCallback(reject, [{ message: 'There was an error' }]);
    //   }
    // );
    console.log('NATIVE-MODULE start');
    const data = localStorage.getItem('r360-location-data');

    if (this._rnctx) {
      if (data) {
        console.log('NATIVE-MODULE callback');
        this._rnctx.invokeCallback(callback, [data]);
      } else {
        // When rejecting a Promise, a message should be provided to populate
        // the Error object on the React side
        this._rnctx.invokeCallback(callback, [{ message: 'There was an error' }]);
      }
    }
  }
}
