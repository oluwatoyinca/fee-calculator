#!/usr/bin/env node
import { calculateFees } from './utils/calculateFees.js'

const [,, args] = process.argv

await calculateFees(args)
