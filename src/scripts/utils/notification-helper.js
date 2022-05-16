const NotificationHelper = {
    sendNotification({ title, options }) {
        // TODO: check availability.
        if (!this._checkAvailability()) {
            console.info('Notification not supported in this browser');
            return;
        }

        // TODO: check permisiion. If not granted, send request.
        if (!this._checkPermission()) {
            console.info('User did not yet granted permission');
            this._requestPermission();
            return;
        }

        // TODO: show notification.
        this._showNotification({ title, options });
    },

    _checkAvailability() {
        return !!('Notification' in window);
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.info('Notification Denied');
        }

        if (status === 'default') {
            console.info('Permission Closed');
        }
    },

    async _showNotification({ title, options }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        console.info(title);
        console.info(options);
        serviceWorkerRegistration.showNotification(title, options);
    },
};

export default NotificationHelper;
