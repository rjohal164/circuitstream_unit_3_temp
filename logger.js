function logInfo(message) {
  console.log(`[INFO] ${new Date().toLocaleString()} ${message}`);
}

function logError(message) {
  console.log(`[ERROR] ${new Date().toLocaleString()} ${message}`);
}

module.exports = {
  info: logInfo,
  error: logError,
};
