'use strict';

module.exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false

	let diff = new Date( Number(event.enhancedAuthContext.exp) * 1000 ) - new Date()
    let body = {
    	remainingTime: Math.floor(diff / 1000)
    }
	return body
}