import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="bg-blue-400 border-2 border-red-300">
            <p
                className={
                    count >= 20
                        ? "text-red-400 transition"
                        : count >= 10
                          ? "text-yellow-500 transition"
                          : "text-purple-600 transition"
                }>
                Current Count: {count}
            </p>
            <button onClick={handleCount}>Count Up</button>
            <br />
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
}
