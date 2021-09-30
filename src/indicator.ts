import { CCI, MFI, RSI } from 'technicalindicators'

import { CCI_PERIOD, MFI_PERIOD, RSI_PERIOD } from './utils/options'

export const mfi = new MFI({ high: [], low: [], close: [], volume: [], period: MFI_PERIOD })
export const rsi = new RSI({ values: [], period: RSI_PERIOD })
export const cci = new CCI({ high: [], low: [], close: [], period: CCI_PERIOD })
