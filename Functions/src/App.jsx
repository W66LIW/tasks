import React from 'react';
import Mutation from './components/Mutation.jsx';
import SumAllNumbersInARange from './components/SumAllNumbersInARange.jsx';
import FuncComponent from './components/FuncComponent.jsx';
import sumAll from './components/functions/sumAll.js';
import mutation from './components/functions/mutation.js';
import increase from './components/functions/increase.js';
import sequence from './components/functions/sequence.js';
import nearest from './components/functions/nearest.js';
import betweenSmallers from './components/functions/betweenSmallers.js';
import findAPlace from './components/functions/FindAPlace.js';
import palindrom from './components/functions/palindrom.js';
import maxProduct from './components/functions/maxProduct.js';
import maxProductOf3 from './components/functions/maxProductOf3.js';
import sapper from './components/functions/sapper.js';
import digits from './components/functions/countOfDigits.js';
import intersection from './components/functions/intersection.js';
import divide from './components/functions/divide.js';
import words from './components/functions/words.js';
import calculator from './components/functions/сalculator.js';
import genome from './components/functions/genome.js';
import turtles from './components/functions/turtles.js';



const App = () => {

    return (
        <div>
            <FuncComponent value = {[turtles, "Черепахи", "Введите числа через пробел"]}/>
            <SumAllNumbersInARange value = {[genome, "Инопланетный геном"]}/>            
            <SumAllNumbersInARange value = {[calculator, "OpenCalculator"]}/>
            <FuncComponent value = {[words, "Количество слов в тексте", "Введите текст"]}/>
            <SumAllNumbersInARange value = {[divide, "Кубики"]}/>
            <SumAllNumbersInARange value = {[intersection, "Пересечение множеств"]}/>
            <FuncComponent value = {[digits, "Количество различных чисел", "Введите числа через пробел"]}/>
            <FuncComponent value = {[sapper, "Сапер", "Введите 3 числа через пробел"]}/>
            <FuncComponent value = {[maxProductOf3, "Наибольшее произведение трех чисел", "Введите числа через пробел"]}/>
            <FuncComponent value = {[maxProduct, "Наибольшее произведение двух чисел", "Введите числа через пробел"]}/>
            <FuncComponent value = {[palindrom, "Симметричная последовательность", "Введите числа через пробел"]}/>
            <FuncComponent value = {[findAPlace, "Чемпионат по метанию коровьих лепешек", "Введите числа через пробел"]}/>
            <FuncComponent value = {[betweenSmallers, "Больше своих соседей", "Введите числа через пробел"]}/>
            <FuncComponent value = {[nearest, "Ближайшее число", "Введите числа через пробел"]}/>
            <FuncComponent value = {[sequence, "Определить вид последовательности", "Введите числа через пробел"]}/>
            <FuncComponent value = {[increase, "Возрастает ли список?", "Введите числа через пробел"]}/> 
            {/* <Mutation />
            <SumAllNumbersInARange value = {[sumAll, "SumAll"]}/>
            <SumAllNumbersInARange value = {[mutation, "Mutation"]}/> */}           
        </div>   
    );

};

export default App;