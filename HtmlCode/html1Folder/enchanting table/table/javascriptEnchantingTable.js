const colors = ['#000000', '#050209', '#0D0A16', '#261D3C', '#3A2652'];
        const weights = [0.2578125, 0.2890625, 0.2578125, 0.12109375, 0.07421875];
        function getRandomColor() {
            const weightedColors = [];
            for (let i = 0; i < colors.length; i++) {
                const count = Math.floor(weights[i] * 100);
                for (let j = 0; j < count; j++) {
                    weightedColors.push(colors[i]);
                }
            }
            const randomIndex = Math.floor(Math.random() * weightedColors.length);
            return weightedColors[randomIndex];
        }
        function setRandomBackgroundColor(className) {
            const elements = document.getElementsByClassName(className);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = getRandomColor();
            }
        }
        window.onload = function () {
            setRandomBackgroundColor('colMatBen');
        };