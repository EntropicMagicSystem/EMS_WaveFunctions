class Curves {
    static gaussian(x, mean, sigma) {
        const constant = 1 / (sigma * Math.sqrt(2 * Math.PI));
        const exponent = -(Math.pow(x - mean, 2)) / (2 * Math.pow(sigma, 2));
        return constant * Math.exp(exponent);
    }
}
