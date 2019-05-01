const winston = require('winston')
const { createLogger, format, transports } = require('winston')
const colors = require('colors/safe');

const config = {
  levels: {
    error: 0,
    warn: 1,
    debug: 2,
    info: 3,
    data: 4,
    help: 5,
    prompt: 6,
    verbose: 7,
    input: 8,
    trace: 9
  },
  colors: {
    error: 'white redBG',
    warn: 'yellow',
    help: 'cyan',
    data: 'grey',
    info: 'green',
    debug: 'black cyanBG',
    prompt: 'grey', 
    verbose: 'cyan',
    input: 'grey',
    trace: 'magenta'
  }
}

const layout = {
  timeAndColors: format.combine(
    format.colorize({ colors: config.colors }),
    format.printf(info => `${colors.blue('[' + info.timestamp + ']')} [${info.level}] ${info.stack ? colors.bold(info.stack) : info.message}`)
  ),
  time: format.combine(
    format.printf(info => `[${info.timestamp}] [${info.level}] ${info.stack || info.message}`)
  ),
  simple: format.combine(
    format.colorize(),
    format.simple()
  )
}

winston.addColors(config.colors)

const logger = module.exports = createLogger({
  level: 'trace',
  levels: config.levels,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.prettyPrint()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'log/json/log-error.log', level: 'error', handleExceptions: true }),
    new transports.File({ filename: 'log/json/log-all.log', handleExceptions: true }),
    new transports.File({ filename: 'log/logs.log', format: layout.time, handleExceptions: true })
  ]
})

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: layout.timeAndColors,
    handleExceptions: true
  }))
}

// ***************
// Allows for JSON logging
// ***************

logger.info('App started.')
