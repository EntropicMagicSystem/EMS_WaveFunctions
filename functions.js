class Curves {
    static gaussian(x, mean, sigma) {
        const constant = 1 / (sigma * Math.sqrt(2 * Math.PI));
        const exponent = -(Math.pow(x - mean, 2)) / (2 * Math.pow(sigma, 2));
        return constant * Math.exp(exponent);
    }
}

class WaveFunctions {
    static gaus_wave(x, time, focus) {
        const mean = PI / 2 + map(noise(time), 0, 1, -PI / 2, PI / 2) * (1 - focus);
        return Curves.gaussian(x, mean, 0.4);
    }
}
