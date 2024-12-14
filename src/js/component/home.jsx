import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(event) => setInputValue(event.target.value)}
						value={inputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"></input>
				</li>
				{todos.map((item, index) => (
					<li key={index}>						
						{item} {" "}
						<i
						class="fas fa-trash"
						onClick={() => 
							setTodos(
								todos.filter(
									(t, currentIndex) => 
										index != currentIndex
								)
							)
						}></i>
					</li>
				))}
			</ul>
			<div>{todos.length == 0 ? 'No tasks, please add a new one' : todos.length + ' tasks'}</div>
		</div>
	);
};

export default Home;
