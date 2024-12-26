let FuelStop = require('./fuel.stop.js');

class FuelSolution {
    constructor(fuel_solution_text) {
        this.text = fuel_solution_text;
        this.fuel_stops = [];
    }
    read() {
        const _text = this.text;

        const _lines = _text.trim().split('\n')
            .map(part => part.trim())
            .filter(part => part.length > 1);

        _lines.forEach((line, i) => {
            if (/QTY:\s[A-Z|\d]+/.test(line)) {
                this.fuel_stops.push(
                    new FuelStop(line, _lines[i + 1])
                )
            }
        })

        this.fuel_stops.forEach(stop => stop.read());
    }
}

module.exports = FuelSolution;