let zoomLevel = 1;
        let isZoomingIn = false;
        let isZoomingOut = false;
        const zoomSpeed = 0.01;

        function zoom() {
            if (isZoomingIn) {
                zoomLevel += zoomSpeed;
            } else if (isZoomingOut) {
                zoomLevel -= zoomSpeed;
            }

            // Ensure the zoom level stays within a reasonable range
            zoomLevel = Math.max(0.5, Math.min(zoomLevel, 3));
            document.body.style.transform = `scale(${zoomLevel})`;

            if (isZoomingIn || isZoomingOut) {
                requestAnimationFrame(zoom);
            }
        }

        document.addEventListener('mousedown', (event) => {
            if (event.button === 0) { // Left mouse button
                isZoomingIn = true;
                zoom();
            } else if (event.button === 2) { // Right mouse button
                isZoomingOut = true;
                zoom();
            }
        });

        document.addEventListener('mouseup', (event) => {
            if (event.button === 0) { // Left mouse button
                isZoomingIn = false;
            } else if (event.button === 2) { // Right mouse button
                isZoomingOut = false;
            }
        });

        document.addEventListener('contextmenu', (event) => {
            event.preventDefault(); // Prevent the context menu from appearing on right-click
        });