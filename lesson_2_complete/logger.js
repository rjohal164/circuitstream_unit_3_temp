function logInfo(message) {
  console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
}

function logError(message) {
  console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
}

// Option 1: Export an object containing the functions
module.exports = {
  info: logInfo,
  error: logError,
};
