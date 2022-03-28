// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the pay.
 */

function pay () {
  // input
  const numberOfHoursWorked = parseInt(document.getElementById('number-of-hours-worked').value)
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value)

  // process
  const takeHomeSalary = (numberOfHoursWorked * hourlyRate) * (1.00 - 0.18)
  const governmentTax = (numberOfHoursWorked * hourlyRate) * 0.18

  // output
 
  document.getElementById ('take-home-salary').innerHTML= 'Your pay will be: $' + takeHomeSalary.toFixed(2) 
  document.getElementById ('government-tax').innerHTML= 'The government will take: $' + takeHomeSalary.toFixed(2) 
  }
