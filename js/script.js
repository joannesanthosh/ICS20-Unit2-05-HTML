// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the pay.
 */
function calculate() {
  // input
  const Number of Hours Worked = parseInt(document.getElementById('Hours-worked-here').value)
  const Hourly Rate = parseInt(document.getElementById('Hourly-Rate-Here').value)

  // process
  const pay = (hours * rate) * (1.00-0.18)
  const taxes = (hours * rate) * 0.18
  const some_var = 'Your pay will be: $' + takeHomeSalary.toFixed(2) parseFloat("10.33")


  // output
  document.getElementById('pay').innerHTML= 'Your pay will be: $' + takeHomeSalary.toFixed(2) parseFloat("10.33")
  
  }
