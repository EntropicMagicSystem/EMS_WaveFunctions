# EMS Wave Functions Specifications
This specifies the official implementation for EMS wave functions.
You can see the visualization [here](https://entropicmagicsystem.github.io/EMS_WaveFunctions/).

## General Specifications
- Wave function inputs
    - Non-user inputs
        - `x` - The value is between `0` and `π`.
        - `time` - The value is Unix timestamp in milliseconds divided by 100: `Date.now() / 100`
    - User inputs —
    The waves are usually *noisy*.
    The user can manipulate the noise using these inputs:
        - `focus` - Range: 0 to 1. Reduces the movement of the wave.
        - `concentration` - Range: 0 to 1. Tightens the distribution of the wave.
- Wave function output —
Normally, the output would be between 0 and 1.
It can go higher than 1 but never negative.
The output is the probability at `x` on the given `time`.
