
        const fireChars = " ,;+1tgti!1I?/\\|)(1}{][rcvzjft]U0QocxfXhqwWB8&%$#@";
        const firePixelsArray = [];
        const width = 800; // Adjust width as needed
        const height = 80; // Adjust height as needed
        const maxCharIndex = fireChars.length;

        for (let i = 0; i < width * height + 1; i++) {
            firePixelsArray[i] = 1;
        }

        function generateFire() {
            let fireString = "";
            for (let i = 0; i < width; i++) {
                let randomCol = Math.floor(Math.random() * width);
                let index = randomCol + width * (height - 1);
                firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
            }

            for (let i = 0; i < width; i++) {
                let randomCol = Math.floor(Math.random() * width);
                let index = randomCol + width * (height - 1);
                firePixelsArray[index] = 0;
            }

            for (let i = 0; i < width * (height - 1); i++) {
                let averageValue =
                    (firePixelsArray[i] +
                    firePixelsArray[i + 1] +
                    firePixelsArray[i + width] +
                    firePixelsArray[i + width + 1]) / 4;
                firePixelsArray[i] = Math.floor(averageValue);

                fireString += fireChars[firePixelsArray[i]];
                if (i % width == 0) fireString += "\n";
            }

            document.getElementById("fire").innerHTML = fireString;
            setTimeout(generateFire, 30);
        }

        generateFire();
    