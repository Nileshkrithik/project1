import React from "react";
import NavBar from "./Navbar";


function Home() {
  return (
    <div>
    <NavBar />
    
      <h1>Welcome to the Film Page</h1>
      <p>
      Film can be used to reach a wide audience, to inform and inspire change through engaging audiences and reflecting society.

      Social film drama unites people in a common sense of humanity and shared responsibility, which gives it added power to help foster positive change.
      
      Through integration into social marketing and change programmes, social film drama has the potential to make people take notice, get the process of change going and to sustain it. The genre has bought silence to audiences, has had people clamouring to talk and engendered desire for personal and social change.
      </p>
      <h2>Directors and Films</h2>
      <div>
        <p>VetriMaaran(Asuran)</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybuSx2n9ZUOsy5EO7Ab4CAweVJO8dB_H2xaSN4koF1-YHTkJxWul0IOl_5HUr1-9sKEs&usqp=CAU" alt="Director 1" />
        <p>Christopher Nolan</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4AehcBqmBy0TeE3UASobX_15syJVGyeQCQ&usqp=CAU" />
        <p>Martin Scorsce</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd8c7EWlYv79Ze_LZHecnWzYP32pppDnnykI-vEstlu-yCNXHmla99kPvGbXDLBPc6rw&usqp=CAU" alt="Director 3" />
        <p>Quentin Tarantino</p>
        <img src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2023/03/16/quentin_tarantino.png" alt="Director 4" />
      </div>
      <div>
       <p><strong>This Page is used to help the people to know about films and its critics.</strong></p>
      </div>
      
    </div>
  );
}

export default Home;