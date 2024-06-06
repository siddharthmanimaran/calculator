import React, { useState, useEffect } from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';

const keys = [{ id: "default", key: "C" }, { id: "default", key: "+/-" }, { id: "default", key: '%' }, { id: "side", key: '/' },
{ id: "num", key: '7' }, { id: "num", key: '8' }, { id: "num", key: '9' }, { id: "side", key: '*' }, { id: "num", key: '4' },
{ id: "num", key: '5' }, { id: "num", key: '6' }, { id: "side", key: '-' }, { id: "num", key: '1' }, { id: "num", key: '2' },
{ id: "num", key: '3' }, { id: "side", key: '+' }, { id: "num", key: "." }, { id: "num", key: '0' }, { id: "num", key: '<=' }, { id: "side", key: '=' }];

const Calculator = () => {
    const [theme, setTheme] = useState('light');
    const [input, setInput] = useState('');
    const [previousInput, setPreviosInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            setInput('');
            setPreviosInput("")
        } else if (value === "<=") {
            setInput(input.slice(0, -1));
        } else {
            setInput(input + value);
        }
    };

    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    const calculateResult = () => {
        try {
            const result = parseExpression(input.replace(/,/g, '.'));
            if (isNaN(result)) {
                throw new Error('Invalid result');
            }
            const formattedResult = new Intl.NumberFormat('en-US', {
                maximumFractionDigits: 20,
            }).format(result);
            setPreviosInput(input);
            setInput(formattedResult);
        } catch (error) {
            setInput('Error');
        }
    };
    const parseExpression = (input) => {
        const tokens = input.match(/(\d+(\.\d+)?)|[+\-*/]/g);
        if (!tokens) {
            throw new Error('Invalid input');
        }

        const numbers = [];
        const ops = [];
        let index = 0;

        while (index < tokens.length) {
            if (!isNaN(tokens[index])) {
                numbers.push(parseFloat(tokens[index]));
            } else if (tokens[index] in operators) {
                while (ops.length && precedence(ops[ops.length - 1]) >= precedence(tokens[index])) {
                    const b = numbers.pop();
                    const a = numbers.pop();
                    const op = ops.pop();
                    numbers.push(operators[op](a, b));
                }
                ops.push(tokens[index]);
            }
            index++;
        }

        while (ops.length) {
            const b = numbers.pop();
            const a = numbers.pop();
            const op = ops.pop();
            numbers.push(operators[op](a, b));
        }

        return numbers[0];
    };

    const precedence = (op) => {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        return 0;
    };

    const toggleTheme = (e) => {
        setTheme(e.target.checked === true ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`calculator ${theme}`}>
            <div className="header">
                <input type="checkbox" id="toggle" className="toggleCheckbox" onChange={toggleTheme} />
                <label htmlFor="toggle" className="toggleContainer" >
                    {theme === "light" ? <><div>🌞</div> <></></> :
                        <><div></div><div>🌜</div></>}
                </label>
            </div>
            <Display input={input} previousInput={previousInput} />
            <div className="button-panel">
                {keys.map((btn, i) => (
                    <Button key={i} value={btn.key} onClick={handleButtonClick} id={btn.id} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
