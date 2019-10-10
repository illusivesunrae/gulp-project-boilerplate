/*! 
* gulp-project-boilerplate - @version 1.0.0

* Copyright (C) 2018 The Trustees of Indiana University
* SPDX-License-Identifier: BSD-3-Clause
*/
var Component = (function (exports) {
  'use strict';

  class Alert {
    constructor(options) {
      this.handleClick = this.handleClick.bind(this);
      this.init(options);
    }

    init(options) {
      document.getElementById(options.id).closest('[aria-labelledby]').querySelector('[data-alert-close]').addEventListener('click', () => {
        this.handleClick(options.id);
      }, false);
    }

    handleClick(id) {
      const dismissButton = event.target.closest('[data-alert-close]'); // If the target wasn't the dismiss button bail.

      if (!dismissButton) return;
      this.dismissAlert(id);
    }

    dismissAlert(id, callback) {
      const alert = document.querySelector('[aria-labelledby="' + id + '"]');

      if (!alert) {
        alert = document.getElementById(id);
      }

      if (!alert) {
        throw new Error('Could not find an alert with the id of ' + id + ' to dismiss.');
      }

      alert.remove();

      if (callback && typeof callback === 'function') {
        callback();
      }
    }

  }

  exports.Alert = Alert;

  return exports;

}({}));
