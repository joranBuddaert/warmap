self.addEventListener('message', function(e) {
    if (e.data === 'start') {
        // The main thread will start sending ready states
    } else if (e.data.state) {
        console.log('Current loading state:', e.data.state);
        self.postMessage({ state: e.data.state });
    }
});