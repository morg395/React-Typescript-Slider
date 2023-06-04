import React from "react";
import Slide_1 from './assets/images/image_1.jpg';
import Slide_2 from './assets/images/image_2.jpg';
import Slide_3 from './assets/images/image_3.jpg';
import Slider from "./components/Slider";

const slides = [
    {
        url: Slide_1,
        id: 0
    },
    {
        url: Slide_2,
        id: 1
    },
    {
        url: Slide_3,
        id: 2
    },
]

function App() {
    return <Slider slides={slides}/>;
}

export default App;