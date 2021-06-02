import React from 'react';
import Snake from './Snake';
import Food from './Food'; 
import snakeFtyle from './snake.module.css';
// import { ButtonToolbar,MenuItem, DropdownButton } from 'react-bootstrap';

const getRandomCoordinates = () => {
	let min = 1;
	let max = 98;
	let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x,y];
}
const initialState = {
	food : getRandomCoordinates(),
	speed: 200,
	direction: 'RIGHT',
	snakeDots: [[0,0],[2,0]]
}
class SnakeContainer extends React.Component {
	constructor() {
		super();  
		this.state = initialState;
	}
		componentDidMount(){
			setInterval(this.moveSnake, this.state.speed);
			document.onkeydown = this.onKeyDown;
		}
		componentDidUpdate(){
			this.checkIfOutOfBorders();
			this.checkIfCollapsed();
			this.checkIfEat();
		}
		onKeyDown = (e) => {
			e = e || window.event;
			switch (e.keyCode) {
				case 38:
					this.setState({direction:'UP'});
					break;
				case 40:
					this.setState({direction:'DOWN'});
					break;
				case 37:
					this.setState({direction:'LEFT'});
					break;
				case 39:
					this.setState({direction:'RIGHT'});
					break;
					default: this.setState({direction:'LEFT'});					
			}
		}
		moveSnake = () => {
			let dots = [...this.state.snakeDots];
			let head = dots[dots.length-1];

			switch(this.state.direction){
				case 'RIGHT':
					head = [head[0] + 2, head[1]];
					break;
				case 'LEFT':
					head = [head[0] - 2, head[1]];
					break;
				case 'DOWN':
					head = [head[0], head[1] + 2];
					break;
				case 'UP':
					head = [head[0], head[1] - 2];
					break;			
					default: 
			}
			dots.push(head);
			dots.shift();
			this.setState({snakeDots:dots})
		}
		checkIfOutOfBorders(){ //БОРДЮР
			let head = this.state.snakeDots[this.state.snakeDots.length - 1];
			if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0){
				this.onGameOver();
			} 
		}
		checkIfCollapsed(){  //ЕСЛИ СТОЛКНОВЕНИЕ
			let snake = [...this.state.snakeDots];
			let head = snake[snake.length - 1];
			snake.pop();
			snake.forEach((dot)=>{
				if(head[0] === dot[0] && head[1] === dot[1]){
					this.onGameOver();
				}
			})
		}
		checkIfEat(){  //СЬЕЛ
			let head = this.state.snakeDots[
				this.state.snakeDots.length - 1];//ГОЛОВА
			let food =this.state.food; //ЕДА
			if(head[0] === food[0] && head[1] === food[1]){
				this.setState({
					food: getRandomCoordinates()
				})
				this.enlargeSnake();
				this.increaseSpeed();
			} 
		}
		enlargeSnake(){
			let newSnack = [...this.state.snakeDots];//НОВЫЙ СНАК
            newSnack.unshift([]);
            newSnack.unshift([]);
			this.setState({
				snakeDots: newSnack
			})
		}
		increaseSpeed(){
			if(this.state.speed > 10){
				this.setState({
					speed: this.state.speed - 10
				})
			}
		}
		onGameOver(){
			alert(`Game Over, Snake length is ${this.state.snakeDots.length}`);
			this.setState(initialState)
		}

		
	

	render() {
		return (
			<div className={snakeFtyle.game_area}>
			    <Snake snakeDots = {this.state.snakeDots} />
			    <Food dot = {this.state.food} />
			</div>
		);
	}
}



export default  SnakeContainer;