'use strict'

import {calculateFees} from "../utils/calculateFees"
jest.mock('../utils/importData')

describe('calculateFees', () => {
  afterEach(() => {    
    jest.clearAllMocks()
  })

  it('Logs correct calculated fees for Department level node', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees for the Marketing department')
    expect(await logSpy).toHaveBeenCalledWith(729)
  })

  it('Logs correct calculated fees for Category level node', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees for coding in development department')
    expect(logSpy).toHaveBeenCalledWith(1109)
  })

  it('Logs correct calculated fees for Sub Category level node', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of sub category Cat3 of quality Assurance in Development department')
    expect(logSpy).toHaveBeenCalledWith(858)
  })

  it('Logs correct calculated fees for Type level node', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of TypeC which is in sub category Cat3 of ABM in Marketing department')
    expect(logSpy).toHaveBeenCalledWith(555)
  })

  it('Logs correct message when more than 1 Department is specified', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees for the Marketing sales department')
    expect(logSpy).toHaveBeenCalledWith('You can only calculate the fees of one given node on the same level at a time. Please specify only one department.')
  })

  it('Logs correct message when more than 1 Category is specified', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees for coding Quality assurance in development department')
    expect(logSpy).toHaveBeenCalledWith('You can only calculate the fees of one given node on the same level at a time. Please specify only one category.')
  })

  it('Logs correct message when more than 1 Sub Category is specified', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of sub category Cat3 cat1 of quality Assurance in Development department')
    expect(logSpy).toHaveBeenCalledWith('You can only calculate the fees of one given node on the same level at a time. Please specify only one sub category.')
  })

  it('Logs correct message when more than 1 Type is specified', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of TypeC TypeB which is in sub category Cat3 of ABM in Marketing department')
    expect(logSpy).toHaveBeenCalledWith('You can only calculate the fees of one given node on the same level at a time. Please specify only one type.')
  })

  it('Logs correct message when there is no valid department node provided', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of provided ABM')
    expect(logSpy).toHaveBeenCalledWith('Please specify a node to calculate its fees, starting from its department')
  })

  it('Logs correct calculated fees to last node with unborken chain when there is broken heirachy', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of sub category Cat1 of Performance Managements in Operations department')
    expect(logSpy).toHaveBeenCalledWith(354)
  })

  it('Logs correct message when node is undefined', async () => {
    const logSpy = jest.spyOn(console, 'log')
    await calculateFees('calculate the fees of sub category Cat2 of Performance Management in Operations department')
    expect(logSpy).toHaveBeenCalledWith('Please confirm that the heirachy you have specified for your target node is correct')
  })
})