class WaveFunctions {
    static gaus_wave(x, time) {
        const values = [
            Curves.gaussian(x, -4, noise(time)),
            Curves.gaussian(x, -2, noise(time) * 0.7),
            Curves.gaussian(x, 0, noise(time) * 0.5),
            Curves.gaussian(x, 2, noise(time) * 0.7),
            Curves.gaussian(x, 4, noise(time)),
        ];
        const sum = values.reduce((sum, value) => sum + value);
        return sum ** 2;
    }
}
