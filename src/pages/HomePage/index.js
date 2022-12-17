import React from "react";
import Almanac from "../Almanac";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
        <h1>
            Welcome to Spirits Almanac!
        </h1>
        <p>Here at Spirits Almanac we strive to ensure that you can keep track of your spirits and how you feel about them. Our goal is simple: create a way to catalog and record whatever spirit you've had in whatever way you'd like to have it be remembered. If you had an incredible dram from any distillery on the planet, we'll make sure that you can remember it long after you've forgotten it.</p>
        <h2>Getting Started</h2>
        <p>We recommend heading over to <Link to="/YourAlmanac">Your Almanac</Link> to get started. If you need a little help fleshing out some of the finer points see our suggestions below.</p>
        <h2>Suggestions</h2>
        <p>When adding spirits to the Almanac consider the following:</p>
        <ul>
            <li>Before adding a new bottle, search for it just to make sure you didn't have too much of it and forget you added it.</li>
            <li>Know what the exact bottle name is to avoid adding multiple bottles that have very similar names.</li>
            <li>Be as accurate as possible when inputing hard information such as proof and distiller.</li>
            <li>When adding tasting notes, make sure to add things like "vanilla", "peat", and other simple notes in the notes section. The idea behind this is if you're in the mood for a specific whiskey or want to recommend one to a friend, you'll be able to search based on tasting notes.</li>
            <li>This is your almanac. Organize it how you can figure it out best.</li>
            <li>Don't be afraid to add more complex tasting notes. Most of what tasting notes are, are the result of our brains trying to make sense of a smell or taste.</li>
        </ul>
        </div>
    )
}