if (window.Worker) {
    const worker = new Worker('webworker.js');

    function checkReadyState() {
        const state = document.readyState;
        worker.postMessage({ state: state });

        if (state !== 'complete') {
            setTimeout(checkReadyState, 100); // Check every 100 ms
        } else {
            worker.postMessage({ state: 'complete' });
        }
    }

    worker.postMessage('start');
    checkReadyState();

    worker.addEventListener('message', function(e) {
        if (e.data.state === 'complete') {
            window.completeLoader();
        }
    });
}